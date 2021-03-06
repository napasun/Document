import React from 'react';
import ReactDOM from 'react-dom';
import { Appointment } from '../src/Appointment';

describe('Appointment', () => {
    it.skip('renders the customer first name', () => {
        expect(document.body.textContent).toMatch('Ashley');
    });

    it('renders the customer first name', () => {
        const customer = { firstName: 'Ashley' };
        const component = <Appointment customer={customer} />;
        const container = document.createElement('div');
        document.body.appendChild(container);

        ReactDOM.render(component, container);

        expect(document.body.textContent).toMatch('Ashley');
    });
    
    it('renders the customer first name', () => {
        const customer = { firstName: 'Ashley' };
        const container = document.createElement('div');
        ReactDOM.render(<Appointment customer={customer} />, container);
        expect(container.textContent).toMatch('Ashley');
    });
    /***
     * 
     * 
     */
    it('renders another customer first name', () => {
        const customer = { firstName: 'Jordan' };
        const component = <Appointment customer={customer} />;
        const container = document.createElement('div');
        document.body.appendChild(container);
        
        ReactDOM.render(component, container);
        
        expect(document.body.textContent).toMatch('Jordan');
    });
    it('renders another customer first name', () => {
        const customer = { firstName: 'Jordan' };
        const container = document.createElement('div');
        ReactDOM.render(<Appointment customer={customer} />, container);
        expect(container.textContent).toMatch('Jordan');
    });
});