'use strict';

import {initialState as state} from './initialState';
import choice from './view';
import startStep_template from '../template/startStep_template';
import customvarStep_template from '../template/customvarStep_template';
import datasetStep_template from '../template/datasetStep_template';
import typeStep_template from '../template/typeStep_template';
import indexSelectionStep_template from '../template/indexSelectionStep_template';
 
// minimal config props, mostly overridden down the process
let wizardProps = {
    footer: {
        cancelButton: {
            onClick: () => {
                alert('cancel button clicked');
            },
            className: 'left_button',
        },
        restartButton: {
            onClick: () => {
                alert('restart button clicked');
            },
            className: 'left_button',
        },
        saveButton: {
            onClick: () => {
                alert('SAVE button clicked');
            },
            className: 'right_button',
        },
    },
};

let promiseCallback;

export function startStep(resolveCallback, REPLACE_CALLBACK) {

    if (REPLACE_CALLBACK) {
        promiseCallback = resolveCallback;
    }

    return choice({
        location: 'startStep',
        handlers: {
            backward: [],
            forward: [customvarStep, datasetStep],
        },
        state,
        footer: wizardProps.footer,
    }, startStep_template);
}

function customvarStep(chosenVar) {
    return choice({
        location: 'customvarStep',
        handlers: {
            backward: [startStep,],
            forward: [...state.customvar
                .map(customVar => labeler('exitStep', () => customvarStep.call(null, customVar), customVar))]
        },
        state,
        promiseCallback,
        footer: wizardProps.footer,
        // ignoring click events as args
        chosen_var: (chosenVar.length) ? chosenVar : undefined,
    }, customvarStep_template);
}

function datasetStep() {
    return choice({
        location: 'datasetStep',
        handlers: {
            backward: [startStep,],
            forward: [ // one array for each dataset
                ...Object.keys(state.dataset)
                    .map(datasetId => {
                        let datasetPosition = parsedStateId(datasetId).currentPos;
                        let datasetName = state.dataset_name[datasetPosition];
                        return [...state.dataset_keys[datasetPosition]]
                            .map(key => datasetName + '.' + key)
                            .map(key => labeler('typeStep', () => typeStep(key), key));
                    })
            ]
        },
        state,
        footer: wizardProps.footer,
    }, datasetStep_template);
}

function typeStep(datasetProperty) {
    let datasetName = datasetProperty.split('.')[0];
    let datasetId = 'dataset#' + state.dataset_name.findIndex(n => n === datasetName);
    return choice({
        location: 'typeStep',
        chosen_dataset_name: datasetName,
        chosen_dataset_property: datasetProperty,
        handlers: {
            backward: [
                startStep,
                labeler('propertyStep', () => datasetStep(), datasetName)
            ],
            forward: [
                ...[randomStep, connectedStep, fixedStep]
                    .map(fun => labeler(fun.name, () => fun(datasetProperty), datasetProperty))
            ]
        },
        state,
        footer: wizardProps.footer,
    }, typeStep_template);
}

// randomStep proposes again the typeStep while enabling the save button
function randomStep(datasetProperty) {
    let datasetName = datasetProperty.split('.')[0];
    return choice({
        location: 'randomStep',
        chosen_dataset_property: datasetProperty,
        handlers: {
            backward: [
                startStep,
                labeler('propertyStep', () => datasetStep(), datasetName),
                labeler('typeStep', () => typeStep(datasetProperty), datasetProperty)
            ],
            forward: [
                ...[randomStep, connectedStep, fixedStep]
                    .map(fun => labeler(fun.name, () => fun(datasetProperty), datasetProperty))
            ]
        },
        state,
        footer: wizardProps.footer,
        promiseCallback,
    }, typeStep_template);
}

// 'connectedStep', '/'
function indexSelectionStep(stepName, separator) {
    let result = function (datasetProperty, propWithIndex) {
        let datasetName = datasetProperty.split('.')[0];
        let datasetPropertyWithSuffix = datasetProperty + separator;
        return choice({
            location: stepName,
            chosen_dataset_property: datasetProperty,
            handlers: {
                backward: [
                    startStep,
                    labeler('propertyStep', () => datasetStep(), datasetName),
                    labeler('typeStep', () => typeStep(datasetProperty), datasetProperty)
                ],
                forward: [
                    ...datasetIndexes(datasetPropertyWithSuffix)
                        .map(propSuffixIndex => labeler('exitStep ' + propSuffixIndex,
                            () => result.apply(null, [datasetProperty, propSuffixIndex])))
                ]
            },
            state,
            promiseCallback,
            footer: wizardProps.footer,
            // ignoring click events as args
            chosen_prop_with_index: (propWithIndex) ? propWithIndex : undefined,
        }, indexSelectionStep_template);
    };

    Object.defineProperty(result, 'name', {
        value: stepName,
    });

    return result;
}

function connectedStep(datasetProperty, propWithIndex) {
    return indexSelectionStep('connectedStep', '/')(datasetProperty, propWithIndex);
}

function fixedStep(datasetProperty, propWithIndex) {
    return indexSelectionStep('fixedStep', '#')(datasetProperty, propWithIndex);
}

function datasetIndexes(datasetPropertyWithSuffix) { // reasonsforcologne.image -> reasonsforcologne.image/2
    let datasetName = datasetPropertyWithSuffix.split('.')[0];
    let datasetPos = state.dataset_name.findIndex(item => item === datasetName);
    let numInstances = state.dataset['dataset#' + datasetPos].length;
    return [...Array(numInstances).keys()].map(key => datasetPropertyWithSuffix + key);
}

function parsedStateId(id) {
    let pieces = id.split('#');
    return {
        currentPos: pieces[1],
    };
}

function labeler(stepName, fun, labelValue) {
    Object.defineProperty(fun, 'name', {
        value: stepName + ' '
        + ((typeof labelValue !== 'undefined') ? labelValue : '')
    });
    return fun;
}
