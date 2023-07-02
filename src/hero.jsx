import  heroImg from './assets/hero.svg'
export const Hero = () => {
    return <section className="hero">
        <div className="hero-center">
            <div className="hero-title">
                <h1>Contentful CMS</h1>
                <p>
                    Photo booth bushwick succulents mixtape mustache. Pok pok asymmetrical vape, XOXO keffiyeh affogato cloud bread you probably haven't heard of them la croix williamsburg. Shaman blog raclette, direct trade marfa cardigan pinterest gentrify palo santo hashtag knausgaard organic.
                </p>
            </div>
            <div className="img-container">
                <img src={heroImg} alt="women and a browser"  className='img'/>
            </div>
        </div>

    </section>
}