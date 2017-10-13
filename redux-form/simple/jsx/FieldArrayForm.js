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
    const {handleSubmit, onReset} = props;
    return (
        <div className="form-div">
            <h3>fieldArray form</h3>
            <form onSubmit={handleSubmit}>
                <FieldArray
                    name="campoMatrice"
                    component={userFields}/>
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
    let {fields, meta} = props;
    return (
        <ul>
            <li>
                <button type="button" onClick={() => fields.push({})}>
                    Add personal trait
                </button>
            </li>
            {fields.map((trait, index) => (
                <li key={index}>
                    <button
                        type="button"
                        onClick={() => fields.remove(index)}>
                        Delete trait
                    </button>
                    <Field
                        name={`${trait}.key`}
                        type="text"
                        placeholder="insert a key"
                        component={userField}
                    />
                    <Field
                        name={`${trait}.value`}
                        type="text"
                        placeholder="insert a value"
                        component={userField}
                    />
                </li>
            ))}
        </ul>
    );
};

// defines Field
function userField({input, placeholder, type}) {
    return (
        <div>
            <div>
                <input {...input} type={type} placeholder={placeholder}/>
            </div>
        </div>
    );
}
