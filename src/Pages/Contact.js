import React, { useRef }from 'react'
import Layout from '../Components/Layout'
import emailjs from 'emailjs-com';


export default function Contact() {
  const form = useRef();
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_syyvg5c', 'template_htat0ic', form.current, 'SWj2Fz9JUveLcKIR6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }
    return (
      <Layout>
        <div className="container2 mx-auto">
          <form ref={form} onSubmit={sendEmail}>
            <h1>Contact Us Form</h1>
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="text" name="subject" placeholder="Subject" required />
            <h5>Type Your Message Here</h5>
            <textarea required defaultValue={""}  name="message" />
            <input type="submit" defaultValue="Send"  id="button" />
          </form>
        </div>
        </Layout>

  
    )

  }




