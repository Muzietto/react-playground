'use strict';

import {initialState as state} from './initialState';
import choice from './dsl';

export function startStep() {
    return choice([customvarStep, datasetStep]);
}

function customvarStep() {
    return choice([startStep, ...state.customvar
        .map(customVar => labeler('exitStep', exitStep(customVar), customVar))]);
}

function datasetStep() {
    return choice([
        startStep,
        ...Object.keys(state.dataset)
            .map(key => labeler('propertyStep',
                () => propertyStep(key), state.dataset_name[parsedStateId(key).currentPos]))
    ]);
}

function propertyStep(datasetId) {
    let datasetName = state.dataset_name[parsedStateId(datasetId).currentPos];
    return choice([
        startStep,
        labeler('back to datasetStep', () => datasetStep(), datasetName),
        ...state.dataset_keys[parsedStateId(datasetId).currentPos]
            .map(key => datasetName + '.' + key)
            .map(key => labeler('typeStep', () => typeStep(key), key))
    ]);
}

function typeStep(datasetProperty) {
    let datasetName = datasetProperty.split('.')[0];
    let datasetId = 'dataset#' + state.dataset_name.findIndex(n => n === datasetName);
    return choice([
        startStep,
        labeler('back to propertyStep', () => propertyStep(datasetId), datasetName),
        ...[randomStep, connectedStep, fixedStep]
            .map(fun => labeler(fun.name, () => fun(datasetProperty), datasetProperty))
    ]);
}

function randomStep(datasetProperty) {
    return choice([
        startStep,
        labeler('back to typeStep', () => typeStep(datasetProperty), datasetProperty),
        labeler('exitStep', exitStep(datasetProperty), datasetProperty),
    ]);
}

function connectedStep(datasetProperty) {
    let datasetPropertyWithSuffix = datasetProperty + '/';
    return choice([
        startStep,
        labeler('back to typeStep', () => typeStep(datasetProperty), datasetProperty),
        ...datasetIndexes(datasetPropertyWithSuffix)
            .map((arg, index) => labeler('exitStep ' + datasetPropertyWithSuffix + index, exitStep(arg)))
    ]);
}

function fixedStep(datasetProperty) {
    let datasetPropertyWithSuffix = datasetProperty + '#';
    return choice([
        startStep,
        labeler('back to typeStep', () => typeStep(datasetProperty), datasetProperty),
        ...datasetIndexes(datasetPropertyWithSuffix)
            .map((arg, index) => labeler('exitStep ' + datasetPropertyWithSuffix + index, exitStep(arg)))
    ]);
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
