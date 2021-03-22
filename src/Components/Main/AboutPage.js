import React from 'react';


const About = () => {

    return (
<>
        <div className="fullImage">

            <div className="text">
                <h1 className="text-dark aboutPage">Adopt, don't buy!</h1> 
            </div>
        </div>

        <div className='container  d-flex flex-column'>
            <h3>Who We Are</h3>
            <br />
            <img className="img-fluid rounded mx-auto d-block animalsImg" alt="Responsive image" src={require('./images/animals.png')} />

                <p>El Hogar Animal is a non-profit animal protection organization that was founded in Ronda(Spain) in 2017, as a result of a large number of abandoned and abused animals. The fees of our partners and the donations of our supporters allow our work be sustainable and preserve our freedom of action. We have a veterinary center open to the public, which dedicates its income entirely to the care of abandoned animals, and a reception center in El Espinar (Segovia).</p>
            <br />

            <img className="img-fluid rounded mx-auto d-block petsImg" alt="Responsive image" src={require('./images/pets.png')} />
            <br />
                <p>Our actions are divided into 'direct' and 'informative'. Direct action encompasses both rescues of animals victims of abuse and neglect, as well as legal action against the perpetrators of crimes. All the animals that we welcome receive the proper veterinary attention (tests, treatments, surgeries, etc.) and are identified and sterilized before undertaking the search for adopters committed to providing them with a healthy and happy life. We defend 'zero sacrifice'. This means that we establish a very clear line between 'sacrifice' and 'euthanasia'. We never sacrifice newborn puppies, or lame, blind, deaf or chronically ill animals that are treatable. Exclusively in the case of a terminal illness that produces irreversible suffering, euthanasia is used with all the dignity, respect and love they deserve. The informative action promotes campaigns in different media with the clear objective of educating society in respect for animals and the rights they have to enjoy a dignified and healthy life. We also demand a series of basic rights for those responsible for dogs and cats, such as free access to public spaces (transport, shops, museums, parks, beaches ...) while we firmly defend the responsible possession of animals.</p>
        </div>
</>
    )
  }


  export default About;