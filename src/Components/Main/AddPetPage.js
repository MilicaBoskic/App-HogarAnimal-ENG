import React from 'react';
import { useHistory } from 'react-router-dom';

// import { useTranslation } from 'react-i18next';

import Popup from "reactjs-popup";
import PopUpAddPet from "../../Components/PopupAddPet";

const AddPet = ({ isLoggedIn }) => {

    const history = useHistory();
      
        if (isLoggedIn === false) {
            history.push('/login')
            // alert('Para poder Dar en adopcion es necesario iniciar la sesión!')
        }

    return (
        <>

            <div className="fullImageAddPet">

                <div className="text">
                    <h1 className="text-dark addPet">Find your pet a loving home!</h1>
                    <br />
                    <h3 className="text-dark addPet">Do you have to put your pet up for adoption?</h3>
                    <br />
                </div>
            </div>

            <div className='container d-flex flex-column'>
                <p>Rehoming your pet should be easy and stress free both for you and your pet. Our experts at Hogar Animal, the largest non-profit pet adoption website, have created a simple, reliable, free program to help you place your pet from your loving home directly to another. If you have a dog, cat, rabbit, ferret ... or any type of pet and for whatever reason you cannot take care of it, post it for adoption directly in Hogar Animal to find adopters.</p>
            </div>
            
            <hr /> 

            <section className="d-flex justify-content-center">

                <div className="w-25 ">
                    <div className="card-body">
                        <h2 className="card-title"><b>Create a Pet Profile</b></h2>
                        <p className="card-text"><b>Get your pets posted on Hogar Animal to be seen by millions of pet adopters.</b></p>
                    </div>
                </div>

                <div className="w-25">
                    <div className="card-body">
                        <h2 className="card-title"><b>Review Applications</b></h2>
                        <p className="card-text"><b>The dedicated team at Hogar Animal will give you all the help you need to select the best potential adopters.</b></p>
                    </div>
                </div>

                <div className="w-25">
                    <div className="card-body">
                        <h2 className="card-title"><b>Meet Adopters</b></h2>
                        <p className="card-text"><b>The Hogar Animal team will guide you through the process of setting safe and pressure-free meetings with applicants.</b></p>
                    </div>
                </div>

                <div className="w-25">
                    <div className="card-body">
                        <h2 className="card-title"><b>Finalize Adoption</b></h2>
                        <p className="card-text"><b>Hogar Animal will provide you with an adoption contract to protect the transfer of your pet ownership.</b></p>
                    </div>
                </div>

            </section>

            <form className="form-group" onSubmit={(e) => {e.preventDefault()}}>
                <h4>Please fill in the fields shown below.</h4>
                <br />
                <div className="col-md-4 mb-4 mx-auto">

                    <label for="name"><b>Pet name</b></label>
                    <input className="form-control" type="text" placeholder="Breed" name="name" required  />

                    <label for="username"><b>Breed</b></label>
                    <input className="form-control" type="text" placeholder="Breed" name="raza" required  />

                    <label for="username"><b>Age</b></label>
                    <input className="form-control" type="number" placeholder="Age" name="edad"  required  />

                    <label for="exampleFormControlFile1"><b>Upload image</b></label>
                    <input type="file" class="form-control-file" />

                    <hr />

                    <Popup modal trigger={<button type="submit" class="btn btn-dark">Submit</button>}>
                        {close => <PopUpAddPet close={close} />}
                    </Popup>
                    
                </div>
            </form>
        </>
    )
}


export default AddPet;
