import React from 'react';

const DogBreeds = ({ dog }) => {

    return (
        <>
        <div className="dog">
            {dog}
        </div>
    </>
    )
}

const DogImage = ({ image }) => {

    return (
        <>
    <div className="image">
        <img src ={image} width = "285px" height = "180px"/>
    </div>

    </>
    )
}

export { DogBreeds, DogImage }



// import React from 'react';

// const DogImage = ({ image }) => {

//     return (
//         <>
//     <div className="image">
//         <img src ={image} width = "285px" height = "180px"/>
//     </div>

//     </>
//     )
// }

// export default DogImage;


// // import React from 'react';

// // const Dog = ({ dog }) => {

// //     return (
// //         <>
// //         <div>
// //             <div className="dog">
// //                 {dog.id}
// //             </div>
// //             <div className="dog">
// //                 {dog.name}
// //             </div>
// //             <div className="dog">
// //                 {dog.temperament}
// //             </div>
// //             <div className="dog">
// //                 {dog.url}
// //             </div>
// //         </div>

// //     </>
// //     )
// // }

// // const DogImage = ({ image }) => {

// //     return (
// //         <>
// //     <div className="image">
// //         <img src ={image} width = "285px" height = "180px"/>
// //     </div>

// //     </>
// //     )
// // }

// // export { Dog, DogImage } ;



// // // const DogBreeds = ({ dog }) => {

// // //     return (
// // //         <>
// // //         <div className="dog">
// // //             {dog}
// // //         </div>
// // //     </>
// // //     )
// // // }



// // // export { DogBreeds, DogImage }

