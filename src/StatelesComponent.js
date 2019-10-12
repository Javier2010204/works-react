import React, { Component } from 'react';

class StatlesComponent extends Component{

    constructor(args){
        super(args);
        this.state = {}
    }

    render(){
        return(
            <h1>Desde el componente</h1>
        )
    }
}

export default StatlesComponent;

