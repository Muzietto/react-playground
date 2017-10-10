'use strict';

import React from 'react';
import ContactForm from './ContactForm';
import BikeForm from './BikeForm';
import FieldArrayForm from './FieldArrayForm';
import Jsone from './Jsone';
import Greeter from './Greeter';
import {SubmitterActionCreators} from './rootReducer';
import {store} from './rootReducer';
import {connect} from 'react-redux';

const contactFormName = 'contact';
const bikeFormName = 'bike';
const fieldArrayFormName = 'fieldArray';

const mapStateToProps = (state, ownProps) => {

    let submittedContactData = state.submitted.contact;
    let submittedBikeData = state.submitted.bike;
    let submittedFieldArrayData = state.submitted.fieldArray;

    return {
        submittedContactData,
        submittedBikeData,
        submittedFieldArrayData,
    };
};

let {storeSubmittedData, resetSubmittedData} = SubmitterActionCreators;

class ContactPage extends React.Component {

    submit = formName => values => {
        store.dispatch(storeSubmittedData(formName, values));
        console.log(formName, values);
    };

    reset = formName => ev => {
        store.dispatch(resetSubmittedData(formName));
    };

    render() {
        return (
            <div>
                <div className="container">
                    <ContactForm
                        onSubmit={this.submit(contactFormName)}
                        onReset={this.reset(contactFormName)}
                    />
                    <BikeForm
                        onSubmit={this.submit(bikeFormName)}
                        onReset={this.reset(bikeFormName)}
                    />
                </div>
                <div className="container">
                    <FieldArrayForm
                        onSubmit={this.submit(fieldArrayFormName)}
                        onReset={this.reset(fieldArrayFormName)}
                    />
                </div>
                <div className="container">
                    <h3>last submitted data</h3>
                    <Jsone
                        form="contact"
                        text={this.props.submittedContactData}
                    />
                    <Jsone
                        form="bike"
                        text={this.props.submittedBikeData}
                    />
                    <Jsone
                        form="fieldArray"
                        text={this.props.submittedFieldArrayData}
                    />
                    <Greeter preambolo="Ciaone"/>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, () => ({}))(ContactPage);
