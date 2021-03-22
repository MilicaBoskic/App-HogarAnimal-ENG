import React from 'react';
import { DogImage } from '../Dog/Dog';

const AdoptedImage = ({ images }) => {
    return (
<>
        {images.slice(0,50).map((image) => (
            <div class="d-inline-block">
                <div class="card">
                    <DogImage image ={image} key={image.index} />
                </div>
            </div>
        ))}

</>
    )
}

export default AdoptedImage;