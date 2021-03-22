import React, { Component } from 'react';
import Pages from '../../../Utils/Pages';
import { getCatImages } from '../../../Services/DogService';
import CatList from './CatList';

// import { withTranslation } from 'react-i18next';


class AdoptCat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            img: [],
            selected: 40
        }
    }

    componentDidMount() {
        this.setCatImages();
        }

    setCatImages = async () => {
        let data = await getCatImages();
        this.setState({
            img: data
        })        
    }

    handleChange = async (e) => {

        let selected = Number(e.target.value);
        let data = await getCatImages();
        let page = data.slice(0, selected);
        this.setState({
            img: page,
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
        let data = await getCatImages();
        let page = data.slice((btnNumber - 1) * this.state.selected, this.state.selected * btnNumber);
        this.setState({
            img: page
        })
    }
    

    render() {

        return (
            <>
            <div className="space">

            <select class="selectpicker form-control btn-light" onChange={(e) => { this.handleChange(e) }} name="" id="">
                <option value="40">All</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
            </select>

                <CatList imagesCat = {this.state.img} />
                <Pages pages={this.createPages()} handler={(e) => { this.handlePageClick(e) }} />
            </div>
            </>
        )
    }
}

export default (AdoptCat);
