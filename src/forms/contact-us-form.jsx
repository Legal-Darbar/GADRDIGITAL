import React from "react";
import NiceSelect from "../ui/nice-select";
import { useForm, ValidationError } from '@formspree/react';



function ContactUsForm  () {
  const [state, handleSubmit] = useForm("mgvaeqnp");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="box">
        <div className="row gx-20">
          <div className="col-12">
            <div className="postbox__comment-input mb-30">
              <input  className="inputText"   id="name" 
        name="name" required />
              <span className="floating-label" htmlFor="name">Full Name</span>
            </div>
          </div>
          <div className="col-12">
            <div className="postbox__comment-input mb-30">
              <input type="email" className="inputText" name="email" id="email" required />
              <span className="floating-label" htmlFor="email">Your Email</span>
            </div>
          </div>
          <div className="col-12">
            <div className="postbox__comment-input mb-35">
              <input type="text" id="phone" name="phone"  className="inputText" required />
              <span className="floating-label" htmlFor="phone">Phone Number</span>
            </div>
          </div>
          <div className="col-12">
          <span className="floating-label" htmlFor="timming">Best time to reach out</span>
            <div className="postbox__comment-input mb-35">
            
            <select
          className="inputText"
          id="reach-option"
          name="reach-option"
          required
        >
          <option value="9:30Am - 10:30Am">9:30Am - 10:30Am</option>
          <option value="10:30Am - 11:30Am">10:30Am - 11:30Am</option>
          <option value="11:30Am - 12:30Pm">11:30Am - 12:30Pm</option>
          <option value="2:30Pm - 3:30Pm">2:30Pm - 3:30Pm</option>
          <option value="3:30Pm - 4:30Pm">3:30Pm - 4:30Pm</option>
          <option value="4:30Pm - 5:30Pm">4:30Pm - 5:30Pm</option>
       
        </select>
              
            </div>
          </div>
          <div className="col-12">
          <span className="floating-label" htmlFor="servicetype">Service Looking For</span>
            <div className="postbox__comment-input mb-35">
            
            <select
          className="inputText"
          id="service-option"
          name="service-option"
          required
        >
          <option value="Website">Website</option>
          <option value="Apps">Apps</option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="Social Media Management">Social Media Management</option>

       
        </select>
              
            </div>
          </div>
          <div className="col-12">
            <div className="postbox__comment-input mb-35">
              <input type="text" id="number" name="number"  className="inputText" required />
              <span className="floating-label" htmlFor="phone">Zip Code</span>
            </div>
          </div>
     
          <div className="col-xxl-12">
            <div className="postbox__btn-box">
              <button className="submit-btn w-100" type="submit">Send your Request</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactUsForm;