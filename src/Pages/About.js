import React from 'react'
import Layout from '../Components/Layout'
import {Link} from 'react-router-dom'
import catimg from './cat.jpg'
const About = () => {
  return (
    
    <Layout>
        <section className="about-us">
  <div className="about ">
   <div className='pe-3'><img src={catimg} alt="catimg" className="pic" /></div> 
    <div className="text ms-3">
      <h3>About Us</h3>
      <h5>Front-end <span>Developer</span></h5>
      <p>Hello...! My name is Kiran Abrar.I am react js Developer.<br/>
      I have created many portfolio websites by using HTML<br/>CSS, JavaScript, Reactjs and react-reduxtoolkit.</p>
      <div className="data">
        <Link to="/contact" className="hire">Contact</Link>
      </div>
    </div>
  </div>
</section>
</Layout>

    
  )
}

export default About