import React from 'react';
import { DogImage, DogBreeds } from './Dog';

import { useTranslation } from 'react-i18next';

import Popup from "reactjs-popup";
import PopUp from "../../Popup";
import "../../../index.css";


const DogList = ({ images }) => {
    const { t } = useTranslation();

    return (
<>
{/* 
<button className="btn btn-info" onClick={()=>{this.handleClick()}}>GATOS / PERROS</button>
<br /> */}

 {/* {dogs.slice(0,2).map((dog, image) => ( */}
    {images.slice(0,40).map((image, dog) => (
     <div className="card-group d-inline-block">
         <div className="card rounded-left">
             <div className="card-body">
                 {/* <h5 className="card-title"><DogBreeds dog = {dog} key = {dog.dog} /></h5> */}
                 <h5 className="card-title">Dog - Hogar Animal</h5>

             </div>
  
             <div className="card">
                 <DogImage image = {image} key = {image.index} />
             </div>
             <Popup modal trigger={<div className="card-footer"><input value ="Adopt" className="btn btn-info" /></div>}>
                {close => <PopUp close={close} />}
            </Popup>
                 {/* <input value ={t('input-Adopt.1')} className="btn btn-info" /> */}
         </div>
     </div>
))}

</>
    )
}

export default DogList;
