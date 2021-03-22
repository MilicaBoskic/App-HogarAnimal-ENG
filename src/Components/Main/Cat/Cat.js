import React from 'react';

const CatImages = ({ img }) => {

    return (
        <>
    <div className="image">
        <img src ={img.url} width = "285px" height = "180px"/>
    </div>

    </>
    )
}

export default CatImages;