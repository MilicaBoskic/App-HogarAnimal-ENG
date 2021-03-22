import React from 'react';
import { useHistory, Link } from 'react-router-dom'


const Blog5 = () => {

    const history = useHistory();


    const handleSubmit = () => {
      history.push('/blog5')

      }

    return (
        <>
            <div>
                <h1>Keeping Outdoor Pets Safe and Warm In Winter</h1>
                <br/>
                    <div className="blogText">
                        <p>Pets are often filled with a sense of adventure. It’s part of what makes them so lovable. But they’re not able to look out for themselves or able to tell us if something’s wrong. It’s our job as pet owners to be their caretakers and protectors. Winter brings cold and wet weather that can present a danger to pets. If your pet is an outside-only pet, or is outside the majority of the time, this article will give you tips to keep your outdoor pet safe and warm throughout the winter.</p>
                    </div>
                    <br/>

                    <img className="imgBlog" alt="Responsive image" src={require('../images/dogCover.jpg')} />

                    <div className="blogText">
                        <h5>1. Housing</h5>
                        <p>First, it is important to provide proper shelter from the elements during winter. This includes proper housing with warm, dry, clean bedding. Housing should provide shelter from strong wind, have a slanted, waterproof roof and be large enough for your pet to stand up and turn around inside. It’s a good idea to build a four to six inch platform for your dog’s bed. This will keep him dry in the event that water penetrates the dog house. Heated pet mats and electric space heaters are used by some in dog houses, but the risk of fire or electrical burns to your pet makes them inadvisable. From time to time check out your dog’s enclosure to make sure there are no leaks. The last thing you want is to have your dog lying on a soiled dog bed. Even if your dog sleeps inside during the winter, a platform will keep his bed off the floor and away from the cold. Heated dog beds are available and are great for old or arthritic dogs.</p>
                        <h5>2. Warm Clothing</h5>
                        <p>Just because your dog has a fur coat doesn’t mean that he is warm. A waterproof jacket is a good option if you want to make sure that your dog is warm enough to brave the elements. Velcro jackets are easy to slip on and off your dog quickly and polar fleece makes for a nice warm lining. Some dog jackets even come with a hood. Breeds with thick coats, like Alaskan Malamutes, Siberian Huskies, Mastiffs, and Samoyeds probably won’t require any additional protection. Dog booties are another measure to protect your dog’s paws from ice, snow, and ice melt. Even if you have a dog with a medium to heavy coat, prolonged exposure to extreme cold can make them susceptible to frostbite. Areas commonly affected by frostbite include your dog’s ears, paws, and tail.</p>
                        <p>It should be noted that puppies are more susceptible to cold weather than a full-grown adult dog. If you think your dog has experienced frostbite, wrap their exposed extremities in a blanket and immediately call your veterinarian. Hairless dogs and ones with thin coats should not be kept outdoors for long periods of time. Dress them warmly and take shorter walks than you normally would. The same goes for pets with diabetes, heart disease, kidney disease, and Cushing’s disease. These conditions make it harder for pets to regulate their body temperature.</p>
                        <h5>3. Fresh Water</h5>
                        <p>All pets should always have access to fresh water, which means checking their outdoor water bowls several times a day to make sure they are clean and unfrozen. Many dog owners are guilty of leaving an outdoor water bowl unattended to and filled with dirty water and debris. Thermal water bowls that prevent water from freezing are available for purchase in pet stores and online.</p>
                        <h5>4. Garage Dangers</h5>
                        <p>During the cold winter, a warm car engine can be inviting to outdoor or feral cats. If this is a possibility where you live, check beneath the hood of your car before starting your engine. Another danger that lurks in your garage (or driveway) is antifreeze. Ethylene glycol is a key ingredient in several antifreeze mixes and its sweet taste is appealing to pets. If a small amount is ingested by your pet it can be fatal. If you think your pet has consumed any amount of antifreeze that contains ethylene glycol, contact your veterinarian immediately.</p>
                        <h5>5. Proper Nutrition</h5>
                        <p>Pets should also have access to proper nutrition. Outdoor pets will need to eat more calories in the winter than they do in the summer. Be sure not to overfeed your dog if they are primarily indoors during the cold months or you’ll end up with an overweight dog. Additional food is only necessary for a dog that is outdoors most of the wintertime or is particularly active. Consult with your pet’s veterinarian to ensure it’s safe for your pet to be an outside pet during the wintertime and get their input regarding your dog’s nutritional needs.</p>
                        <p>Pets Best pet insurance can give you peace of mind all year long when it comes to your pet receiving the best veterinary care available. Plans from Pets Best Insurance covers up to 90% of your pet’s unexpected veterinary costs and provides a 24/7 Pet Helpline to answer health questions you have about your pet.* Get a quote and protect your pet today.</p>
                    </div>

                    <br/>
                    <span className="d-flex justify-content-end"><Link to="/blog"><button onSubmit={(e) => {e.preventDefault(); handleSubmit()}} className="btn-lg btn-dark">Back</button></Link></span>
                <br/>

            </div>
        </>
    )
}


export default Blog5;