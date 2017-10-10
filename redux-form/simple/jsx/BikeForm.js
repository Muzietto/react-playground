import React from 'react';
import {Field, FieldArray, reduxForm} from 'redux-form';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        // mandatory key name
        initialValues: state.submitted.bike, // pull initial values from submitted reducer
    };
};

const renderSpec = ({ input, label, type }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
    </div>
  </div>
)

const renderSpecs = ({fields}) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push()}>
        Add Spec
      </button>
    </li>
    {fields.map((spec, index) => (
      <li key={index}>
        <button
          type="button"
          title="Remove Spec"
          onClick={() => fields.remove(index)}
        >Remove Spec</button>
        <Field
          name={spec}
          type="text"
          component={renderSpec}
          label={`Spec #${index + 1}`}
        />
      </li>
    ))}
  </ul>
);

let BikeForm = props => {
    const {handleSubmit, onReset} = props;

    return (
        <div className="form-div">
            <h3>bike form</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="color">color</label><br/>
                    <Field name="color" component="input" type="text"/>
                </div>
                <div>
                    <label htmlFor="brand">brand</label><br/>
                    <Field name="brand" component="input" type="text"/>
                </div>
                <div>
                    <label htmlFor="brand">brand</label><br/>
                    <FieldArray
                        name="specs"
                        component={renderSpecs}/>
                </div>

                <button type="submit">Submit</button>
                <button
                    type="button"
                    onClick={onReset}>Reset
                </button>
            </form>
        </div>
    );
};

BikeForm = reduxForm({
    // a unique name for the form
    form: 'bike'
})(BikeForm);

BikeForm = connect(mapStateToProps, () => ({}))(BikeForm);

export default BikeForm;
