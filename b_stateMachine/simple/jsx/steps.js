'use strict';

import {initialState as state} from './initialState';
import choice from './view';
import {templateA, templateB, templateC} from './view';

export function startStep() {
    return choice({
        location: 'startStep',
        backward: [],
        forward: [customvarStep, datasetStep],
    }, templateA);
}

function customvarStep() {
    return choice({
        location: 'customvarStep',
        backward: [startStep,],
        forward: [...state.customvar
            .map(customVar => labeler('exitStep', exitStep(customVar), customVar))]
    }, templateB);
}

function datasetStep() {
    return choice({
        location: 'datasetStep',
        backward: [startStep,],
        forward: [
            ...Object.keys(state.dataset)
                .map(key => labeler('propertyStep',
                    () => propertyStep(key), state.dataset_name[parsedStateId(key).currentPos]))
        ]
    }, templateC);
}

function propertyStep(datasetId) {
    let datasetName = state.dataset_name[parsedStateId(datasetId).currentPos];
    return choice({
        location: 'propertyStep',
        backward: [
            startStep,
            labeler('datasetStep', () => datasetStep(), datasetName)
        ],
        forward: [
            ...state.dataset_keys[parsedStateId(datasetId).currentPos]
                .map(key => datasetName + '.' + key)
                .map(key => labeler('typeStep', () => typeStep(key), key))
        ]
    }, templateA);
}

function typeStep(datasetProperty) {
    let datasetName = datasetProperty.split('.')[0];
    let datasetId = 'dataset#' + state.dataset_name.findIndex(n => n === datasetName);
    return choice({
        location: 'typeStep',
        backward: [
            startStep,
            labeler('propertyStep', () => propertyStep(datasetId), datasetName)
        ],
        forward: [
            ...[randomStep, connectedStep, fixedStep]
                .map(fun => labeler(fun.name, () => fun(datasetProperty), datasetProperty))
        ]
    }, templateB);
}

function randomStep(datasetProperty) {
    return choice({
        location: 'randomStep',
        backward: [
            startStep,
            labeler('typeStep', () => typeStep(datasetProperty), datasetProperty)
        ],
        forward: [
            labeler('exitStep', exitStep(datasetProperty), datasetProperty),
        ]
    }, templateC);
}

function connectedStep(datasetProperty) {
    let datasetPropertyWithSuffix = datasetProperty + '/';
    return choice({
        location: 'connectedStep',
        backward: [
            startStep,
            labeler('typeStep', () => typeStep(datasetProperty), datasetProperty)
        ],
        forward: [
            ...datasetIndexes(datasetPropertyWithSuffix)
                .map((arg, index) => labeler('exitStep ' + datasetPropertyWithSuffix + index, exitStep(arg)))
        ]
    }, templateA);
}

function fixedStep(datasetProperty) {
    let datasetPropertyWithSuffix = datasetProperty + '#';
    return choice({
        location: 'fixedStep',
        backward: [
            startStep,
            labeler('typeStep', () => typeStep(datasetProperty), datasetProperty)
        ],
        forward: [
            ...datasetIndexes(datasetPropertyWithSuffix)
                .map((arg, index) => labeler('exitStep ' + datasetPropertyWithSuffix + index, exitStep(arg)))
        ]
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
