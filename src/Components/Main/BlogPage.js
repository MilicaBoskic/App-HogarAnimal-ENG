import React from 'react';
import { useHistory, Link } from 'react-router-dom'


const Blog = () => {

  const history = useHistory();

  const handleSubmit = () => {
    history.push('/blog')

    }

    return (
<>
<div>
<h6 className="adoptedText">Pet lovers turn to blogs for advice on health concerns, entertainment, ideas for fun activities to enjoy with your pet, tips on traveling with pets, and just about any concern you might have as a pet parent.</h6>
</div>

<br />
<div class="card-deck">
<div class="card">
<img src="..." class="card-img-top" alt="..." src={require('./images/coverdog.jpg')}/>
<div class="card-body">
  <h5 class="card-title">5 Safe and 5 Dangerous Spices for Dogs</h5>
  <span></span>
  <p class="card-text">Pet nutrition has evolved from just regular off-the-shelf food to self-prepped meals that consist of premium ingredients.</p>
</div>
<div class="card-footer">
<span><Link to="/blog1"><button onSubmit={(e) => {e.preventDefault(); handleSubmit()}} className="btn-lg btn-light btn-block">Read more...</button></Link></span>
</div>
<div class="card-footer">
  <small class="text-muted">Last updated 10 mins ago</small>
</div>
</div>

<div class="card">
<img src="..." class="card-img-top" alt="..." src={require('./images/gato1.jpg')} />
<div class="card-body">
  <h5 class="card-title">Guide to Mange in Cats: Causes, Symptoms, and Treatment Options</h5>
  <p class="card-text">Read on to learn how to identify the warning signs, causes, types, and treatment options available for this skin condition.</p>
</div>
<div class="card-footer">
<span><Link to="/blog2"><button onSubmit={(e) => {e.preventDefault(); handleSubmit()}} className="btn-lg btn-light btn-block">Read more...</button></Link></span>
</div>
<div class="card-footer">
  <small class="text-muted">Last updated 2 days ago</small>
</div>
</div>

<div class="card">
<img src="..." class="card-img-top" alt="..." src={require('./images/dogCover3.jpg')}/>
<div class="card-body">
  <h5 class="card-title">Keeping Outdoor Pets Safe</h5>
  <p class="card-text">Pets are not able to look out for themselves or able to tell us if something’s wrong. It’s our job as pet owners to be their caretakers and protectors.</p>
</div>
<div class="card-footer">
<span><Link to="/blog3"><button onSubmit={(e) => {e.preventDefault(); handleSubmit()}} className="btn-lg btn-light btn-block">Read more...</button></Link></span>
</div>
<div class="card-footer">
  <small class="text-muted">Last updated 7 days ago</small>
</div>
</div>
</div>
<br />
<br />
<br />

<div class="card-deck">
<div class="card">
<img src="..." class="card-img-top" alt="..." src={require('./images/perro.jpg')}/>
<div class="card-body">
  <h5 class="card-title">Quick Health Tips and Questions for Dog and Puppy Adoption</h5>
  <p class="card-text">In this article we’ll discuss the questions you should ask when adopting a puppy or dog, and help you make the best decision on your future furry friend!</p>
</div>
<div class="card-footer">
<span><Link to="/blog4"><button onSubmit={(e) => {e.preventDefault(); handleSubmit()}} className="btn-lg btn-light btn-block">Read more...</button></Link></span>
</div>
<div class="card-footer">
  <small class="text-muted">Last updated 13 days ago</small>
</div>
</div>

<div class="card">
<img src="..." class="card-img-top" alt="..." src={require('./images/gato2.jpg')} />
<div class="card-body">
  <h5 class="card-title">Top 10 Best Cat Litter Boxes</h5>
  <p class="card-text">Read on to figure out which of these cat litter boxes is up to your pampered pet's high standards.</p>
</div>
<div class="card-footer">
<span><Link to="/blog5"><button onSubmit={(e) => {e.preventDefault(); handleSubmit()}} className="btn-lg btn-light btn-block">Read more...</button></Link></span>
</div>
<div class="card-footer">
  <small class="text-muted">Last updated 42 days ago</small>
</div>
</div>

<div class="card">
<img src="..." class="card-img-top" alt="..." src={require('./images/gatonegro.jpg')}/>
<div class="card-body">
  <h5 class="card-title">6 Hypoallergenic Cat Food Products Recommended by Pet Experts in 2020</h5>
  <p class="card-text">It is important to keep in mind that cats can develop food allergies at any time in their lives so it is necessary to help your cat to achieve a balanced diet.</p>
</div>
<div class="card-footer">
<span><Link to="/blog6"><button onSubmit={(e) => {e.preventDefault(); handleSubmit()}} className="btn-lg btn-light btn-block">Read more...</button></Link></span>
</div>
<div class="card-footer">
  <small class="text-muted">Last updated 67 days ago</small>
</div>
</div>
</div>

<br />
<br />

</>
    )
    }


export default Blog;
