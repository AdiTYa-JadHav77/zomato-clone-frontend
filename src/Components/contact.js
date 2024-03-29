import React from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Contact extends React.Component{
  constructor(){
    super();
    this.state={
        
        firstName:'',
        lastName:'',
        phone_number:0,
        email:'',
        address:'',
        message:''

    }
}

   handelOnClick=()=>{
   
      const { email, firstName,lastName,message,address,phone_number } = this.state;

      const detailsObj = {
          email: email,
          firstName:firstName,
          lastName:lastName,
          address:address,
          message:message,
          phone_number:phone_number
      };
      
      axios({
          method: 'POST',
          url: 'https://guarded-cliffs-31948.herokuapp.com/contactUs',
          headers: { 'Content-Type': 'application/json' },
          data: detailsObj
      })
          .then(response => {
              if(response.data.message == "Please enter all details "){
                toast.info(response.data.message,{position:"top-center"});
              }
              else{
                this.setState = {
                  email: '',
                  firstName:'',
                  lastName:'',
                  address:'',
                  message:'',
                  phone_number:''
              };
                toast.success(response.data.message,{position:"top-center"});
              }
          })
          .catch(err => console.log(err))
          
  }

  handelInputChange=(event,state)=>{
    this.setState({[state]:event.target.value});
}

  render (){
    return(
    <>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                    Connect With Our <br />  Team.
                  </h1>
                  <p className="main-hero-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt eaque alias similique.
                  </p>
                  <img src="./Assets/contact.jpg"/>
                </div>
                

                {/* right side contact form  */}
                <div className="contact-rightside col-12 col-lg-7">
                  
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="firstName"
                          id=""
                          className="form-control"
                          placeholder="First Name"
                          
                          onChange={(event)=>this.handelInputChange(event,'firstName')}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="lastName"
                          id=""
                          className="form-control"
                          placeholder="Last Name"
                          
                          onChange={(event)=>this.handelInputChange(event,'lastName')}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="phone"
                          id=""
                          className="form-control"
                          placeholder="Phone Number "
                          onChange={(event)=>this.handelInputChange(event,'phone_number')}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-feild">
                        <input
                          type="text"
                          name="email"
                          id=""
                          className="form-control"
                          placeholder="Email ID"
                          onChange={(event)=>this.handelInputChange(event,'email')}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-feild">
                        <input
                          type="text"
                          name="address"
                          id=""
                          className="form-control"
                          placeholder="Add Address"
                          onChange={(event)=>this.handelInputChange(event,'address')}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 ">
                        <input
                          type="text"
                          name="message"
                          id=""
                          className="form-control"
                          placeholder="Enter Your Message"
                          onChange={(event)=>this.handelInputChange(event,'message')}
                        />
                      </div>
                    </div>
                    <div class="form-check form-checkbox-style">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        class="form-check-label"
                        className="main-hero-para">
                        I agree that the zomato may contact me at the
                        email address or phone number above
                      </label>
                    </div>

                    <button
                      
                      className="btn btn-danger w-100"
                      onClick={this.handelOnClick}>
                      Submit
                    </button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer theme="colored"  />

    </>)
  }
}

export default Contact;