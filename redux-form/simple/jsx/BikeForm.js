import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        // mandatory key name
        initialValues: state.submitted.bike, // pull initial values from submitted reducer
    };
};

let BikeForm = props => {
    const {handleSubmit, onReset} = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="color">Colore</label>
                <Field name="color" component="input" type="text"/>
            </div>
            <div>
                <label htmlFor="brand">brand</label>
                <Field name="brand" component="input" type="text"/>
            </div>
            <button type="submit">Submit</button>
            <button
                type="button"
                onClick={onReset}>Reset</button>
        </form>
    );
};

BikeForm = reduxForm({
    // a unique name for the form
    form: 'bike'
})(BikeForm);

BikeForm = connect(mapStateToProps, () => ({}))(BikeForm);

export default BikeForm;
