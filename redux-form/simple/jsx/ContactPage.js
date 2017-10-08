'use strict';

import React from 'react';
import ContactForm from './ContactForm';
import BikeForm from './BikeForm';
import Jsone from './Jsone';
import {SubmitterActionCreators} from './rootReducer';
import {store} from './rootReducer';
import {connect} from 'react-redux';

const contactFormName = 'contact';
const bikeFormName = 'bike';

const mapStateToProps = (state, ownProps) => {

    let submittedContactData = state.submitted.contact;
    let submittedBikeData = state.submitted.bike;

    return {submittedContactData, submittedBikeData};
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
                <ContactForm
                    onSubmit={this.submit(contactFormName)}
                    onReset={this.reset(contactFormName)}
                />
                <BikeForm
                    onSubmit={this.submit(bikeFormName)}
                    onReset={this.reset(bikeFormName)}
                />
                <Jsone
                    form="contact"
                    text={this.props.submittedContactData}
                />
                <Jsone
                    form="bike"
                    text={this.props.submittedBikeData}
                />
            </div>
        );
    }
}

export default connect(mapStateToProps, () => ({}))(ContactPage);
