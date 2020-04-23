import React from 'react'
import HomeCarousel from '../screens/HomeCarousel'
import '../styles/home.css'

const Home = () => {
    return (
        <div className='home-wrapper' >
            <div className='home' style={{display: 'flex', flexDirection: 'column'}}>
                {/* <h1 style={{ padding: '.5em'}}>Ocean Audiology</h1> */}
                <div className='home-modal'  style={{display: 'flex'}}> 
                <div className='home-info' style={{width: '34em', height:'12em', marginTop: '10em', marginRight: '1em', marginLeft: '8em', textAlign: 'left', background:'rgba(0,0,0,0.5)', padding: '1em', color: 'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fuga laboriosam natus deserunt doloribus odio recusandae omnis, fugiat eaque vero quasi iure! Non nostrum maxime culpa, exercitationem consectetur mollitia incidunt.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fuga laboriosam natus deserunt doloribus odio recusandae omnis, fugiat eaque vero quasi iure! Non nostrum maxime culpa, exercitationem consectetur mollitia incidunt.
                <div className='anchors' style={{display:'flex', background: 'rgba(225,225,225,0.75)', width: '32em', marginTop:'.5em'}}>
                <div className='about-us'>
                <a href='#about-anchor'><h2  style={{ paddingLeft: '2em' , paddingRight: '3em', color: 'blue'}}>About</h2></a>
                <p style={{color: 'black', fontSize:'.75em', width:'10em', marginLeft:'5em'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ex, cum distinctio obcaecati.</p>
                </div>
                <div className='contact'>
                <h2 style={{ color: 'blue'}}>Contact Us</h2>
                <p style={{color: 'black', fontSize:'.75em', width:'10em', marginLeft:'2em'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ex, cum distinctio obcaecati.</p>
                </div>
                </div>
                </div>
                <HomeCarousel />
                {/* <a href="#about-anchor" class="btn btn-3">About Us</a>  */}
                </div>
            </div>
        </div>
    )
}
export default Home