import React, { Component } from 'react';

export const FormattedDate = ({date}) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
        return (
            <span>{date.toLocaleDateString('fr-FR', options)}</span>
        );
    
}

export const FormattedTime = ({date}) => {
        return (
            <span>{date.toLocaleTimeString('fr-FR')}</span>
        );
    
}