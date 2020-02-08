import React, { Component } from 'react';

 export default function asyncComponent(importComponent) {
     class AsyncComponent extends Component {
         constructor(props) {
             super(props);
             this.state = {
                 component: null
             }
         }

         async componentDidMount() {
            const component = await importComponent;


            this.setState({
                component: component.default
            });
         }

         render() {
             const Component = this.state.component;


             return Component ? <Component {...this.props} /> : null; 
         }
     }

     return AsyncComponent;
 }