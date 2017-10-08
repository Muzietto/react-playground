'use strict';

import React from 'react';
import {Field, reduxForm} from 'redux-form';

let ContactForm = props => {
    const {handleSubmit, onReset} = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">First Name</label>
                <Field
                    name="firstName"
                    component="input"
                    className="paperino"
                    type="text"/>
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <Field name="lastName" component="input" type="text"/>
            </div>
            <button type="submit">Submit</button>
            <button
                type="button"
                onClick={onReset}>Reset
            </button>
        </form>
    );
};

ContactForm = reduxForm({
    // a unique name for the form
    form: 'contact'
})(ContactForm);

export default ContactForm;