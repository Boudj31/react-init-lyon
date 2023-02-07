import React, { Component } from 'react';

export class FormattedDate extends Component {
    render() {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
        return (
            <span>{this.props.date.toLocaleDateString('fr-FR', options)}</span>
        );
    }
}

export class FormattedTime extends Component {
    render() {
        return (
            <span>{this.props.date.toLocaleTimeString('fr-FR')}</span>
        );
    }
}