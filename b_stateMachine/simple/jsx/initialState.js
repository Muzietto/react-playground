'use strict';

const initialState = {
    'dataset': {
        'dataset#0': [
            'dataset#0.dataset_item#0',
            'dataset#0.dataset_item#1',
        ],
        'dataset#1': [
            'dataset#1.dataset_item#0',
        ],
    },
    'dataset_item': {
        'dataset#0.dataset_item#0': {'brand': 'bmw', 'color': 'white'},
        'dataset#0.dataset_item#1': {'brand': 'audi', 'color': 'red'},
        'dataset#1.dataset_item#0': {'name': 'marco', 'image': 'http://image.com/marco'},
    },
    'dataset_name': ['cars', 'people'],
    'dataset_keys': [['brand', 'color'], ['name', 'image']],
    'customvar': ['player_name'],
};

export {initialState};