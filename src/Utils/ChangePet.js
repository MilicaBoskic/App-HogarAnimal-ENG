import React, { Component } from 'react';
import AdoptDog from '../Components/Main/Dog/DogPage';
import AdoptCat from '../Components/Main/Cat/CatPage';

import { withTranslation } from 'react-i18next';


function Pet (props) {
    
    if (props.value) {
        return <AdoptDog />
    } 
    return <AdoptCat />
}

class Adopt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: true,
            isLoggedIn: false
}
    }


    handleChangePet = () => {
        this.setState({
            value: !this.state.value
        });
    }

render() {
    const { t } = this.props;

    return (
        <div>
        <div className="backImage">

        <h1 className="text-dark changePet">Adopt a Pet</h1>

        {/* <span role="img" aria-label="dog">🐶 </span> */}
        <button className="btn btn-info" onClick = {this.handleChangePet}>Dog / Cat</button>
        {/* <span role="img" aria-label="cat"> 🐱</span> */}
        </div>

        <Pet value = {this.state.value}/>

        </div>
    ) 
}
}
export default withTranslation()(Adopt);

