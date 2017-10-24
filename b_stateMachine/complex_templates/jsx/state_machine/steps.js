'use strict';

import {initialState as state} from './initialState';
import choice from './view';
import startStep_template from '../template/startStep_template';
import customvarStep_template from '../template/customvarStep_template';
import datasetStep_template from '../template/datasetStep_template';
import typeStep_template from '../template/typeStep_template';

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

export function startStep() {
    return choice({
        location: 'startStep',
        handlers: {
            backward: [],
            forward: [customvarStep, datasetStep],
        },
        state: state,
        footer: wizardProps.footer,
    }, startStep_template);
}

function customvarStep() {
    return choice({
        location: 'customvarStep',
        handlers: {
            backward: [startStep,],
            forward: [...state.customvar
                .map(customVar => labeler('exitStep', exitStep(customVar), customVar))]
        },
        state: state,
        footer: wizardProps.footer,
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
        state: state,
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
        state: state,
        footer: wizardProps.footer,
    }, typeStep_template);
}

function randomStep(datasetProperty) {
    return choice({
        location: 'randomStep',
        chosen_dataset_property: datasetProperty,
        handlers: {
            backward: [
                startStep,
                labeler('typeStep', () => typeStep(datasetProperty), datasetProperty)
            ],
            forward: [
                labeler('exitStep', exitStep(datasetProperty), datasetProperty),
            ]
        },
        footer: wizardProps.footer,
    }, templateC);
}

function connectedStep(datasetProperty) {
    let datasetPropertyWithSuffix = datasetProperty + '/';
    return choice({
        location: 'connectedStep',
        chosen_dataset_property: datasetProperty,
        handlers: {
            backward: [
                startStep,
                labeler('typeStep', () => typeStep(datasetProperty), datasetProperty)
            ],
            forward: [
                ...datasetIndexes(datasetPropertyWithSuffix)
                    .map((arg, index) => labeler('exitStep ' + datasetPropertyWithSuffix + index, exitStep(arg)))
            ]
        },
        footer: wizardProps.footer,
    }, templateA);
}

function fixedStep(datasetProperty) {
    let datasetPropertyWithSuffix = datasetProperty + '#';
    return choice({
        location: 'fixedStep',
        chosen_dataset_property: datasetProperty,
        handlers: {
            backward: [
                startStep,
                labeler('typeStep', () => typeStep(datasetProperty), datasetProperty)
            ],
            forward: [
                ...datasetIndexes(datasetPropertyWithSuffix)
                    .map((arg, index) => labeler('exitStep ' + datasetPropertyWithSuffix + index, exitStep(arg)))
            ]
        },
        footer: wizardProps.footer,
    }, templateB);
}

function exitStep(value, index) { // reasonsforcologne.image/2 --> $(reasonsforcologne.image/2)
    let result = () => {
        alert('$(' + value + ')');
    };
    return labeler('exitStep', result, index);
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
