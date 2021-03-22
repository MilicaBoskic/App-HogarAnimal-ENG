import React from 'react';
import { useHistory, Link } from 'react-router-dom'


const Blog2 = () => {

    const history = useHistory();


    const handleSubmit = () => {
      history.push('/blog2')

      }

    return (
        <>
            <div>
                <h1>Guide to Mange in Cats: Causes, Symptoms, and Treatment Options</h1>
<br/>
                    <div className="blogText">
                        <p>Mange is a skin disease caused by an infestation of mites that irritates your cat’s skin and causes it to itch. Read on to learn how to identify the warning signs, causes, types, and treatment options available for this skin condition.</p>
                        <ul>
                            <li>Difference between mites, ticks, and fleas</li>
                            <li>Symptoms of mange in cats</li>
                            <li>Types and causes of mange in cats</li>
                            <li>What to do if your cat has mange</li>
                            <li>How to treat mange in cats</li>
                            <li>How to prevent mange in cats</li>
                        </ul>                    
                        </div>
                    <br/>

                    <img className="imgBlog" alt="Responsive image" src={require('../images/gat.jpg')} />

                    <div className="blogText">
                        <h5>Difference Between Mites, Ticks, and Fleas</h5>
                        <p>Most pet owners can’t differentiate between fleas, mites, and ticks. While they’re considered as parasites, these pests can cause different problems and symptoms.</p>
                        <p>As such, it’s important for you to understand what they are and the issues they may cause.</p>
                        <p className="font-italic">According to 247 Pest Control, you should consult with an exterminator upon the slightest sign of a flea or tick infestation as these can spread out of control in a matter of days.</p>
                        <h5>Symptoms of Mange in Cats</h5>
                        <p>Some symptoms of mange in cats include</p>
                        <ul>
                            <li>Excessive grooming</li>
                            <li>Patchy areas of hair loss</li>
                            <li>Oily fur</li>
                            <li>Bumps on the skin</li>
                            <li>Excessive scratching due to itch</li>
                            <li>Presence of scabs on the skin</li>
                        </ul>                    

                    <br/>                        
                    
                        <h5>Types and Causes of Mange in Cats</h5>
                        <p>As mentioned above, mange in cats is caused by mites. These parasites can be transmitted to your furry friend </p>
                        <ul>
                            <li>if he’s been in contact with another infected cat or </li>
                            <li>if he touches an object that’s been contaminated with mites.</li>
                        </ul>   

                        <h5>What to Do If Your Cat Has Mange</h5>
                        <p>You’ll need to first bring the infected animal to the veterinary clinic where your vet can confirm the presence of mites. An appropriate treatment plan will be recommended once your pet has been properly diagnosed.</p>
                        <p>Following the visit, it’s important that you keep your pet isolated to prevent the mites from spreading to other household members.</p>
                        
                        <h5>How to Treat Mange in Cats</h5>
                        <p>Apple cider vinegar is a popular home remedy for treating mange. To use apple cider vinegar as a treatment, dilute it with warm water in a 1:1 ratio and apply directly to your cat’s skin.</p>
                        <p> Olive, castor or coconut oil - these types of oil can help soothe your cat’s itch and suffocate and kill the mites. Simply apply some directly to your cat’s skin when using.</p>
                        <p>Sad your dog can’t enjoy pumpkin spice? You can make a special spice blend that’s safe for dogs.</p>
                    
                        <img className="imgBlog" alt="Responsive image" src={require('../images/gato4.jpg')} />

                        <h5>How to Prevent Mange in Cats</h5>
                        <p>The best way to prevent your cat from developing mange or recurrence is to keep him away from infected animals. </p>
                        <p>An unsanitary environment can lead to the spreading of mites, resulting in mange. As such, keeping a hygienic living environment for your furry companion is important. To do this, wash his bedding and litter box in hot water with detergent, and vacuum the house regularly. </p>
                        <p>Cats with a weak immune system will have trouble dealing with a mite infestation, making them prone to mange. Therefore, you can enhance your furkid’s immune system by feeding him a well-balanced diet that’s packed with nutrients. You can also boost his immunity by supplementing his diet with vitamins for cats. Other tips to help keep mange at bay include practising good grooming habits and washing your hands after handling other animals.</p>

                    </div>
                    <br/>
                    <span className="d-flex justify-content-end"><Link to="/blog"><button onSubmit={(e) => {e.preventDefault(); handleSubmit()}} className="btn-lg btn-dark">Back</button></Link></span>
                <br/>

            </div>
        </>
    )
}


export default Blog2;