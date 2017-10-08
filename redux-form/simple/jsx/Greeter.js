'use strict';

import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    // form = reducer name in combineReducers (rootReducer.js)
    // contact = form name in reduxForm (ContactForm.js)
    let friendsData = state.form.contact
        ? state.form.contact.values
        : '';
    let bikesData = state.form.bike
        ? state.form.bike.values
        : '';
    let fieldArrayData = state.form.fieldArray
        ? state.form.fieldArray.values
        : '';

    let submittedFriendsData = state.submitted.contact
        ? state.submitted.contact.values
        : '';
    let submittedBikesData = state.submitted.bike
        ? state.form.bike.values
        : '';

    let salutatio = ownProps.preambolo + ', amico ';

    if (friendsData) {
        salutatio += (friendsData.firstName + ' '
        + friendsData.lastName);
    }

    if (bikesData) {
        salutatio += (' with a nice '
        + bikesData.color + ' '
        + bikesData.brand);
    }

    if (fieldArrayData) {
        salutatio += ' and traits {'
            + Object.keys(fieldArrayData)
            .map(key => key + ':' + fieldArrayData[key])
            .join(', ') + '}';
    }

    return {salutatio};
};

class Greeter extends React.Component {
    // submit = values => {
    //     // print the form values to the console
    //     console.log(values);
    // };

    render() {
        return (
            <div>
                <h3>live view of state.form (managed by redux-form)</h3>
                <p>{this.props.salutatio}</p>
            </div>
        );
    }
}

export default connect(mapStateToProps, () => ({}))(Greeter);
