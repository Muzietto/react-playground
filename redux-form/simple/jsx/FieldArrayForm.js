import React from 'react';
import {connect} from 'react-redux';
import {Field, FieldArray, reduxForm} from 'redux-form';

const mapStateToProps = state => {
    return {
        // mandatory key name
        initialValues: state.submitted.fieldArray, // pull initial values from submitted reducer
    };
};

let FieldArrayForm = props => {
    const {handleSubmit, onReset, initialValues} = props;
    return (
        <div class="form-div">
            <h3>fieldArray form</h3>
            <form onSubmit={handleSubmit}>
                <FieldArray
                    name="fieldArray"
                    component={userFields}
                    pairs={initialValues}/>
                <button type="submit">Submit</button>
                <button
                    type="button"
                    onClick={onReset}>Reset
                </button>
            </form>
        </div>
    );
};

FieldArrayForm = reduxForm({form: 'fieldArray'})(FieldArrayForm);

export default connect(mapStateToProps, () => ({}))(FieldArrayForm);

// contains Field
function userFields(props) {
    // find out purpose of meta (cfr FieldArraysForm in redux-form examples)
    let {fields, meta, pairs} = props;
    return (
        <ul>
            <li>
                <button type="button" onClick={() => pairs['new key'] = 'new value'}>
                    Add personal trait
                </button>
            </li>
            {Object.keys(pairs).map((traitName, index) => (
                <li key={index}>
                    <button
                        type="button"
                        onClick={() => delete pairs[index]}>
                        Delete trait
                    </button>
                    <Field
                        name={traitName}
                        type="text"
                        component={userField}
                        fieldValue={pairs[traitName]}
                        label={traitName}
                    />
                </li>
            ))}
        </ul>
    );
};

// defines Field
function userField({input, label, type}) {
    return (
        <div>
            <label>{label}</label>
            <div>
                <input {...input} type={type} placeholder={label}/>
            </div>
        </div>
    );
}
