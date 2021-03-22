import React from 'react';
import { useHistory, Link } from 'react-router-dom'


const Blog1 = () => {

    const history = useHistory();


    const handleSubmit = () => {
      history.push('/blog1')

      }

    return (
        <>
            <div>
                <h1>5 Safe and 5 Dangerous Spices for Dogs</h1>
<br/>

                    <div className="blogText">
                        <p >Can dogs eat spices? While it’s true that dogs don’t require five-star dining, many owners love to cater to their dogs’ unique tastes. And many have switched to making their own dog food to provide a better-sourced, healthier diet. So, why not add a little flavor, right? Are some spices toxic to dogs?</p>
                        <p>Dogs don’t need spices in order to stay healthy, and some spices are actually harmful to dogs. But certain spices do provide nutritional benefits for our pets, particularly pets with specific health conditions.</p>
                        <p>Here’s a list of spices that are safe and dangerous for your dog. Remember to always make gradual changes to your dog’s diet, and check with your veterinarian before you experiment.</p>
                    </div>
                <br/>
                <img className="imgBlog" alt="Responsive image" src={require('../images/dogImg2.png')} />
                <h3>5 Spices That Are Dangerous for Dogs</h3>
                    <div className="blogText">
                        <p>While some of the items on this list may be familiar, others may surprise you. Here are our top 5 spices toxic to dogs, with explanations on why they’re not good for dogs.</p>
                    </div>
                    <br/>
                    <div className="blogText">
                        <h5>1. Onion</h5>
                        <p>Onion and onion powder can easily upset a dog’s stomach and cause diarrhea and vomiting. Onion contains sulfoxides and disulfides, which can damage red blood cells.</p>
                        <h5>2. Garlic</h5>
                        <p>There are differing opinions about garlic, and some owners use it to help ward off fleas on their dogs. But garlic can be toxic for some pets, so it’s better to avoid garlic altogether, or proceed with great caution and absolutely discuss this idea with your veterinarian.</p>
                        <h5>3. Salt</h5>
                        <p>Although humans use salt in nearly everything we eat, this doesn’t translate well to our dogs’ diet. Salt will cause increased thirst and urination, which leads to dehydration. It can also cause vomiting, nausea, and diarrhea when ingested in larger quantities.</p>
                        <p>The recommended amount of sodium an adult 33-pound dog can have daily is only 200mg. For reference, a cup of noodle soup can have as much as 1,480mg of sodium. That’s more than seven times the daily amount for your dog!</p>
                        <h5>4. Cocoa Powder</h5>
                        <p>While not a spice, cocoa powder is used extensively in baking, and some pet parents may not realize it can be dangerous.</p>
                        <p>Like chocolate, cocoa powder can cause serious problems for dogs. It contains a compound similar to caffeine, which is harmful to a dog’s nervous system. Cocoa powder can contribute to kidney trouble and heart problems, and should always be avoided.</p>
                        <h5>5. Nutmeg</h5>
                        <p>A possibly surprising spice toxic to dogs, nutmeg can cause severe stomach upset and agitation in the nervous system.</p>
                        <p>A dog may become overly excited after eating nutmeg, and then become exhausted and drained. In some cases, nutmeg has led to death, so it’s considered highly dangerous. Mace, a spice derived from the same plant as nutmeg, has similar risks, so it’s best to avoid it as well.</p>
                        <p>Sad your dog can’t enjoy pumpkin spice? You can make a special spice blend that’s safe for dogs.</p>
                    </div>
                    <br/>

                <h3>5 Spices That Are Safe for Dogs to Eat</h3>
                    <div className="blogText">
                        <p>There are many dog safe spices out there. Here are the top 5 with tasty recipes and possible benefits.</p>
                    </div>
                    <br/>

                    <div className="blogText">
                        <h5>1. Basil</h5>
                        <p>Basil is a fragrant herb that’s rich in antioxidants with antiviral, and antimicrobial properties. It can help diminish the painful effects of arthritis, elevate the mood, and provide a remedy for stress and anxiety.</p>
                        <p>Try our Pizza Bones dog treats with oregano and basil or try a spritz of citrus basil doggie cologne for an aromatherapy mood boost.</p>
                        <h5>2. Cinnamon</h5>
                        <p>Cinnamon contains antioxidant and anti-inflammatory properties and can help to counteract the effects of diabetes. Cinnamon also helps reduce the aflatoxins found in store-bought food. (Aflatoxins are fungi that grow on the crown and other crops.)</p>
                        <p>Cinnamon can also help improve bad breath. Cinnamon features in some of our favorite treat recipes like Apple Pie Bites.</p>
                        <p>Spritz this pet safe cinnamon cologne on your dog after a good grooming session or on her bed for an aromatherapy boost or try a cinnamon and lamb training treat for an antioxidant boost.</p>
                        <h5>3. Ginger</h5>
                        <p>Ginger root is another flavorful agent that contains anti-inflammatory and antibacterial properties. It can provide a boost to the digestive system and soothe nausea, as well as improve circulation. Fresh ginger is quite strong, so you might use dried or ground ginger.</p>
                        <p>Ginger infused pill pouches are a cool product for dogs with upset tummies, and who doesn’t like the sound of homemade Gingerbread for dogs?</p>
                        <h5>4. Parsley</h5>
                        <p>Parsley contains healthy antioxidants, fiber, vitamins, and minerals. It helps improve organ function, flush toxins from the body, and improve bad breath. And it can be easily grown in most parts of the U.S.</p>
                        <p>Whip up a batch of our breath freshening dog treats or pick up some of these fancy cookies combine the power of parsley, mint, and gingerbread into one super-treat.  These Dentacare dental chews harness the powers of mint and parsley to help fight doggie breath.</p>
                        <h5>5. Turmeric</h5>
                        <p>Turmeric, which comes from a root (like ginger), provides a boost to the metabolism and helps accelerate weight loss. It provides benefits for cardiovascular, joint, and brain health.</p>
                        <p>Turmeric can provide some relief from arthritis, and has been used to protect against cancer and anemia. A turmeric supplement specially designed for dogs is a great way to try these healing benefits or try our pumpkin spice dog treats featuring earthy turmeric.</p>
                    </div>
                    <br/>

                <span className="d-flex justify-content-end"><Link to="/blog"><button onSubmit={(e) => {e.preventDefault(); handleSubmit()}} className="btn-lg btn-dark">Back</button></Link></span>
                <br/>

            </div>
        </>
    )
}


export default Blog1;