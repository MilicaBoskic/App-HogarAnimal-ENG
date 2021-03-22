import React from 'react';
import { useHistory, Link } from 'react-router-dom'


const Blog6 = () => {

    const history = useHistory();


    const handleSubmit = () => {
      history.push('/blog6')

      }

    return (
        <>
            <div>
                <h1>6 Hypoallergenic Cat Food Products Recommended by Pet Experts in 2020</h1>
                <br/>
                    <div className="blogText">
                        <p>It’s important to note that cats can develop food allergies at any point in their lives. While it may be tricky to identify the allergen(s) and work around it, we believe that it’s possible and necessary to help your cat achieve a balanced diet.</p>
                    </div>
                <br/>
                <img className="imgBlog" alt="Responsive image" src={require('../images/catFood.jpg')} />

                    <div className="blogText">
                        <h3>How to Identify What Food Your Cat is Allergic to</h3>
                        <p>There’s no cure for food allergies. The only solution is to learn how to work around it by finding a feasible diet that’s nutritious. But first, you have to identify what food your cat is allergic to. According to Dawn LaFontaine, Founder of Cat in the Box, a food trial is used to identify what food your cat is allergic to.</p>
                        <h5>1. Vet recommends a diet</h5>
                        <p>Your veterinarian may recommend a commercial food product or homemade recipes, involving a protein that your cat has never been exposed to before.</p>
                        <h5>2. Observe your cat for symptoms</h5>
                        <p>During the trial, you are to strictly follow the diet set by the vet and observe your cat for any symptoms in the next 6 – 8 weeks.</p>
                        <h5>3. Determine what to do next</h5>
                        <p>If your cat is feeling better after the food trial: You can begin reintroducing foods one at a time to see if any of them trigger the symptoms again. However, if your cat isn’t feeling better after the food trial: Chances are the symptoms have a different root cause.</p>

                    </div>
                    <br/>
                    <span className="d-flex justify-content-end"><Link to="/blog"><button onSubmit={(e) => {e.preventDefault(); handleSubmit()}} className="btn-lg btn-dark">Back</button></Link></span>
                <br/>

            </div>
        </>
    )
}


export default Blog6;