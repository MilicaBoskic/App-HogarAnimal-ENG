
import React, { Component } from 'react';
import DogList from './DogList';
import { getAllBreeds, getImages } from '../../../Services/DogService';
import Pages from '../../../Utils/Pages';

// import { withTranslation } from 'react-i18next';


class AdoptDog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dogs: [],
            image: [],
            selected: 40
        }
    }

    componentDidMount() {
        this.setAllBreeds();
        this.setImages();
        }

    setAllBreeds = async () => {
        let data = await getAllBreeds();
        this.setState({
            dogs: data
        })        
    }
    
    setImages = async () => {
        let data = await getImages();
        this.setState({
            image: data
        })        
    }

    handleChange = async (e) => {
        e.preventDefault();

        let selected = Number(e.target.value);
        let data = await getImages();
        let page = data.slice(0, selected);
        this.setState({
            image: page,
            selected: selected
        })
    }

    createPages() {
        let pages = [];

        for (let i = 1; i <= Math.ceil(40 / (this.state.selected)); i++) {
            pages.push(i);
        }
        return pages;
    }

    handlePageClick = async (e) => {
        e.preventDefault();
        
        let btnNumber = Number (e.target.id);
        let data = await getImages();
        let page = data.slice((btnNumber - 1) * this.state.selected, this.state.selected * btnNumber);
        this.setState({
            image: page
        })
    }
    

    render() {
        // const { t } = this.props;

        return (
            <>
            <div className="space">

                <select class="selectpicker form-control btn-light" onChange={(e) => { this.handleChange(e) }} name="" id="">
                    <option value="40">All</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                </select>
            
                <DogList dogs = {this.state.dogs} images ={this.state.image} />
                <Pages pages={this.createPages()} handler={(e) => { this.handlePageClick(e) }} />
            </div>
            </>
        )
    }
}

export default (AdoptDog);

