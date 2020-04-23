import React from 'react'
import '../styles/about.css'
import Figure from 'react-bootstrap/Figure'
import FigureImage from 'react-bootstrap/FigureImage'
import FigureCaption from 'react-bootstrap/FigureCaption'

const About = () => {
    return (

        <div className='about' data-aos="fade-in" style={{ display: 'flex' }}>
            <div id='about-anchor' />
            <div className='what-we-do' style={{ width: '20em', height: '30em', textAlign: 'left', marginLeft: '1em', marginTop: '6em', background: 'rgba(0,0,0,0.5)', padding: '2em', borderRadius: '5px', boxShadow: '2px 2px 2px white', color: 'white' }}>
                <h2>What we do?</h2>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ex sapiente consequuntur illum facere amet vel aliquam quis harum nobis consectetur velit dolor consequatur delectus quae, nulla, veritatis impedit neque.</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repudiandae id assumenda fugit, saepe neque ut qui illum aliquid quibusdam ipsa cumque eos non magni quam tempore velit voluptates deserunt.
            </p>
            </div>
            <div className='what-we-do' style={{ width: '20em', height: '30em', textAlign: 'left', marginLeft: '1em', marginTop: '6em', background: 'rgba(0,0,0,0.5)', padding: '2em', borderRadius: '5px', boxShadow: '2px 2px 2px white', color: 'white' }}>
                <h2>Our Mission</h2>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ex sapiente consequuntur illum facere amet vel aliquam quis harum nobis consectetur velit dolor consequatur delectus quae, nulla, veritatis impedit neque.</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repudiandae id assumenda fugit, saepe neque ut qui illum aliquid quibusdam ipsa cumque eos non magni quam tempore velit voluptates deserunt.
            </p>
            </div>
            <Figure style={{ margin: '6em'}}> 
                <Figure.Image
                    width={500}
                    height={200}
                    alt="171x180"
                    src="https://www.worldatlas.com/r/w1200-h701-c1200x701/upload/66/14/d8/kangchenjunga.jpg"
                />
                <Figure.Caption>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                </Figure.Caption>
            </Figure>

        </div>
    )
}
export default About
