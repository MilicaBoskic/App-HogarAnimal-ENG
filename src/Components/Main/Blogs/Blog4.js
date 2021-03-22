import React from 'react';
import { useHistory, Link } from 'react-router-dom'


const Blog4 = () => {

    const history = useHistory();


    const handleSubmit = () => {
      history.push('/blog4')

      }

    return (
        <>
            <div>
                <h1>Quick Health Tips and Questions for Dog and Puppy Adoption</h1>
                <br/>
                    <div className="blogText">
                        <p>Welcoming a new canine friend into your home is an amazing privilege. Though all we want to do is give a loving home to a deserving pup, there are a few things to consider throughout the searching process. You want your new furry family member to be around for years to come, making it so important to ensure their health at time of adoption. So how can you do this?</p>
                        <p>In this article we’ll discuss the questions you should ask when adopting a puppy or dog, and help you make the best decision on your future furry friend!</p>
                    </div>
                    <br/>

                    <img className="imgBlog" alt="Responsive image" src={require('../images/dogImg.jpg')} />

                    <div className="blogText">
                        <h5>What Do You Need to Know When Adopting a Puppy or Dog?</h5>
                        <p>When searching for a new canine friend to bring into your home, it’s easy to get swept away in the cute faces and wagging tails that you may meet. You may fall in love with every pup that crosses your path, but it’s important to keep a few tips in mind throughout your search.</p>
                        <p>So often, new pet owners bring their pups home to discover brewing medical conditions soon after. With irresponsible breeders on the rise, it’s more important than ever to make sure your puppy is coming from a breeder that has their best interest at heart. This is true of dogs that are adopted as adults as well, as you never want your time with a new furry friend to be limited.</p>
                        <p>The best way to ensure the health and happiness of your new pup going forward is by asking a few important questions. To make sure you are prepared for your upcoming search, let’s discuss the list of questions that you should have prepared!</p>
                        
                        <h5>Adopting or Purchasing A Puppy</h5>
                        <p>If you are adopting or purchasing a puppy from a breeder, there is a specific set of questions that you should be ready to ask. Understanding where your puppy is coming from is essential in ensuring a healthy future, and will save you from bringing a potentially ill puppy into your home. To help you maneuver your journey, let’s discuss our puppy checklist below.</p>
                        
                        <h5>Adopting an Adult Dog</h5>
                        <p>Adopting an adult dog may be a different process then purchasing a puppy, but it still comes with responsibility. To help you find the best dog for you, let’s discuss our checklist for adopting an adult dog.</p>
                        <p>When adopting an adult dog, it’s important to know as much about their past as possible. Not only can this help you better understand your new pup going forward, but it can help you create the best home possible for them.</p>
                        <p>We urge you to ask as many questions as possible when it comes to better understanding their past. This may include asking about their parents, why they are rehoming them, asking about any previous conditions you should be aware of, and more.</p>
                        <p>While these questions are shelter specific, they can be tailored to fit any situation. If you are adopting an adult dog from an owner that can no longer care for them, you can always ask a series of these questions as well. The more you know about the dog’s past, the better chance you will have at a happy future together.</p>
                        <p>Though you may not know everything about a dog’s past when adopting them as an adult, you can certainly get peace of mind by asking a few questions. No matter where you are adopting your adult dog, you should always receive proof of the following:</p>
                        <p>Understanding a dog’s personality is important when welcoming them into your family. Not only is this essential for keeping your family safe, but in offering your new dog comfort as well. It’s best to ask about any triggers you should be aware of, how well they socialize with other pets, how well they socialize with other humans, if they experience anxiety or stress in any situations, and any other useful information about their temperament.</p>
                        <p>The last thing you should always confirm is the current food they are eating. This will help your dog transition easier into daily life in your home, as well as avoid an upset stomach from a sudden diet switch. You should also ask about any treats they seem to enjoy, and their favorite toy choices as well.</p>
                        <br/>
                        <img className="imgBlog" alt="Responsive image" src={require('../images/dogBlackWhite.jpg')} />

                        <h5>Final Thoughts</h5>
                        <p>As you can see, there are many ways to make sure you have chosen the best furry friend for your family. Be sure to review the information that we discussed above, and you can better maneuver the pet search process going forward!</p>
                    </div>
                    <br/>
                    <span className="d-flex justify-content-end"><Link to="/blog"><button onSubmit={(e) => {e.preventDefault(); handleSubmit()}} className="btn-lg btn-dark">Back</button></Link></span>
                <br/>

            </div>
        </>
    )
}


export default Blog4;