import React, { Component } from 'react';
import AlreadyAdopted from './AdoptedList';
import { getImages } from '../../../Services/DogService';

// import { withTranslation } from 'react-i18next';

class Adopted extends Component {
    constructor(props) {
        super(props)
        this.state = {
            images: [],
        }
    }

    setImages = async () => {
        let data = await getImages();
        this.setState({
            images: data
        })        
    }

    componentDidMount() {
        this.setImages();
        }

    render() {
        // const { t } = this.props;
        
        return (
            <>
            <h1 className="text-dark addPet">Pets that found their home</h1>
            {/* <h2>{t('h2Adopted.1')}</h2> */}
            <br />
            <h5 className="adoptedText">These are the pets for which we managed to find a home from the beginning of the year.</h5>
            <div>
            <AlreadyAdopted images = {this.state.images} />
            </div>
            </>
        )
    }
}

export default (Adopted);