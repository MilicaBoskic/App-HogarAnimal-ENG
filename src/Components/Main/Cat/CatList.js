import React from 'react';
import CatImages from './Cat';


import Popup from "reactjs-popup";
import PopUp from "../../Popup";
import "../../../index.css";


const CatList = ({ imagesCat }) => {

    return (
<>
{/* {imagesCat.map(img => (<CatImages img = {img} key = {img.index} />))} */}


    {imagesCat.map(img => (
     <div class="card-group d-inline-block">
         <div class="card rounded-left">
             <div class="card-body">
                 <h5 class="card-title">Cat - Hogar Animal</h5>
             </div>
             <div class="card">
                 <CatImages img = {img} key = {img.index} />
             </div>
             <Popup modal trigger={<div className="card-footer"><input value ="Adopt" class="btn btn-info" /></div>}>
                {close => <PopUp close={close} />}
            </Popup>
             <div class="card-footer">
                 {/* <input value ={t('input-Adopt.1')} class="btn btn-info" /> */}
             </div>
         </div>
     </div>
))}

</>
    )
}

export default CatList;