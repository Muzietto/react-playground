import React from 'react';

import ItemsList from './ItemsList';

class Accordion extends React.Component {

    constructor(props) {
        let is_visible = (typeof props.accordion_is_visible === 'undefined' ? false : props.accordion_is_visible);
        super(props);
        this.state = {
            is_visible,
        };
    }

    render() {

        return (
            <AccordionParent
                accordion_name={this.props.accordion_name}
                accordion_visible={this.state.is_visible}
                accordion_toggler={this.accordionToggler.bind(this)}>
                <ItemsList
                    containerCssClass={'accordion_children'
                    + (this.state.is_visible ? ' is_open' : '')}
                    items={this.props.accordion_children}
                    itemsMapper={_accordionMapper}/>
            </AccordionParent>
        );
    }

    accordionToggler() {
        this.setState({is_visible: !this.state.is_visible});
    }
}

class AccordionParent extends React.Component {
    render() {
        return (
            <div
                className="accordion_parent"
                onClick={this.props.accordion_toggler}>
                <h3>{this.props.accordion_name}</h3>
                {this.props.children}
            </div>
        );
    }
}

function _accordionMapper(child, index) {
    return <h2
        style={{cursor: 'pointer'}}
        key={index}
        onClick={child.handler}>
        {(child.name || 'noname')}
    </h2>;
}

export default Accordion;