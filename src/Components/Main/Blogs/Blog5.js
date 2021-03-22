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
                <h1>Top 10 Best Cat Litter Boxes</h1>
                <br/>
                <img className="imgBlog" alt="Responsive image" src={require('../images/catBox1.jpg')} />

                    <div className="blogText">
                        <h5>Our comprehensive list features the best cat litter boxes in different styles, materials, and sizes–there is a match for every kitty.</h5>
                        <p>Cats are notorious about being particular, especially when it comes to their toilet habits. As tidy animals, they are not prone to peeing or pooping outside the designated area–unless there’s a problem with the litter box itself or an underlying medical issue. In many ways, cats can be the ideal pet when hygiene is considered. Still, to avoid any “trouble” caused by an inadequate kitty toilet, you’ll have to choose the right location for the litter box, the right type of litter, and finally, the right litter box itself. Otherwise, you can expect pee and poo everywhere but the place it’s supposed to be – and a lot of unwanted chores. Unfortunately, choosing the best cat litter box can be a trial and error process – unless you do your research beforehand. And we’re here to make that research easier!</p>
                        <h5>Frisco Flip Top Hooded Cat Litter Box</h5>
                        <p>Simple, efficient, and durable, this classic hooded litter box for cats is an all-around great choice. It is made from quality BPA-free, durable, recyclable plastic that’s easy to clean and will last a long time. The hooded design offers your shy kitty some privacy while they do their business inside, but at the same time, they won’t feel cramped in it. The dimensions are a good fit for most cats, and the translucent door provides easy access. To boot, the flip top opens easily for you to scoop out the clumped waste without having to remove the whole top every time you clean the litter.Thanks to these features, Frisco’s design is super simple to use and very efficient as well.</p>
                        <h5>Tidy Cats Breeze Cat Litter Box System</h5>
                        <p>If you want one product that takes care of everything, Tidy Cats Breeze Cat Litter Box System is the answer. To make sure that there are no odors or mess in the litter box, this innovative system relies on the separation of solids and liquids. This means that the urine drops below the litter onto a disposable moisture-absorbing pad, whereas the poop remains in the litter for you to scoop it. Easy peasy and it smells almost breezy! The litter of choice in these system litter boxes are dust free and low tracking feline-friendly litter pellets. The downside for some might be that there is no protective hood, so vigorous diggers could end up making a mess around the litter box but raised sides prevent this in most cases. Either way, it is a design that brings some nifty innovations into the market of litter boxes.</p>
                        <h5>Modkat Flip Litter Box with Scoop and Reusable Liner</h5>
                        <p>The innovative Modkat Flip Litter Box is great if you want a versatile litter box. You might have more than one cat in your home, and you want to make sure that one litter box fits everyone’s needs (although you need to up the number of litter boxes either way in this case). The extra high and fully enclosed design of this litter box offers varying levels of privacy as its top-mounted lid gives you the option to keep it fully open, half-open or completely closed. This allows for plenty of adjustability for both your and your cat’s convenience. The inside of this litter box is unique as it is lined with easily removable tarp cover, that will keep the walls and the whole interior of the litter box protected and easier to clean. One tarp cover lasts about three months, at least! An ideal choice when cleanliness is a priority!</p>
                        <h5>Nature’s Miracle Advanced Hooded Corner Litter Box</h5>
                        <p>You can never go wrong with a tried and tested design. This plain-looking classic hooded litter box is extremely popular with cat parents and it’s mainly for one reason: it fits into corners. And let me tell you something – that reason alone is more than enough to tempt many of us into buying it. Anyone who has limited space in their apartment or simply has a perfect corner in the bathroom for the litter knows how hard it is to efficiently place a regular litter box there. Naturally, in addition to its nifty shape, this budget-friendly litter box is also in demand for its sturdy built and hooded design. Easy to use and quite reliable, it is one of the ideal choices. Great for every owner, and perfect for every tiny house!</p>
                        <h5>Yangbaga Stainless Steel Litter Box</h5>
                        <p>If you’re looking into ways of being a more eco-friendly cat parent, or just want to buy one litter tray and be done with it for good, go for stainless steel. Not only that is extremely durable, but it is also less likely to start retaining odors with age (as it won’t scratch or deteriorate). The litter tray has tall sides that will keep the litter in even if your cat is messy when covering their waste, and it comes in two sizes to fit every feline’s needs for a spacious toilet. And if your kitten is prone to scratching everything to bits – the stainless steel will prove a tricky obstacle!</p>
                        <br/>
                        
                        <img className="imgBlog" alt="Responsive image" src={require('../images/catBox2.jpg')} />

                        <h5>Good Pet Stuff Hidden Cat Litter Planter</h5>
                        <p>If you can’t or won’t keep your cat’s litter box out of sight, why not get funky with it? This stylish concealed litter box proves that you can make even cat litter boxes a part of the decor if you choose right. When screwed together, the top and the bottom of this litter box make it look like an elegant planter, complete with faux greenery on top. It’s so pretty one will suspect that your kitty is pooping in it.</p>
                        <h5>Catit Jumbo Hooded Cat Litter Pan</h5>
                        <p>I like big cats and I cannot lie- it can be hard to find a litter box that fits properly. Luckily, even if you have a chubby kitty or one of the large breeds such as Norwegian Forest Cat, this jumbo litter box will be a good match. Additionally, if you have a cat that demands a lot of space to go potty but you’re keen on getting a hooded litter box to minimize the mess, this is an excellent compromise. This large size is great for when you are out too. The size makes it good for more than one use – ideal for your cat while you are away at work!</p>
                        <h5>IRIS Top Entry Cat Litter Box</h5>
                        <p>Let us talk about dogs for a minute. If you have both a cat and a dog in your home, you know that pooches can sometimes develop a taste for… Well, you already know if you’ve been there. Having a top entry litter box can solve that little nasty issue in no time! Additionally, even if you’re only a feline pawrent, this enclosed type of litter boxes could minimize the mess and give your cat the privacy she or he craves. To boot, the lid has grooves on it, that will retain litter trapped in the paws when the kitty goes out of it–no tracking issues! It just might be a bit challenging for your cat to get a grasp of how to use it.</p>
                    </div>
                    <br/>
                    <span className="d-flex justify-content-end"><Link to="/blog"><button onSubmit={(e) => {e.preventDefault(); handleSubmit()}} className="btn-lg btn-dark">Back</button></Link></span>
                <br/>

            </div>
        </>
    )
}


export default Blog5;