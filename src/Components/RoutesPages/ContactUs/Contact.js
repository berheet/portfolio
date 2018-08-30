import React, {Component} from 'react';
import './Contact.css';
import axios from 'axios';

class Contact extends Component {
        handleSubmit(e){
        alert("Thank you for reaching out!")
    }

    render(){
        return(
            <div className='contact-main-div'>
        <div class="form" onSubmit={this.handleSubmit}>
    <div className='form-div animated fadeIn'>
    <div className='contact-me'><h2 >Contact Me</h2></div>
        <div className='contact-form'>
        <div style={{paddingTop:'20px',paddingBottom:'1em',display:'flex', justifyContent:'center'}}>
                <div><h2>Eyobell Berhe</h2></div>
                <div style={{paddingTop:'6px',paddingLeft:'1em',paddingRight:'1em', display:'flex'}}> <i className='fa fa-map-marker fa-2x' style={{marginRight:'5px'}}></i><p> Alexandria, Virginia</p></div>
                <div style={{paddingTop:'6px',paddingLeft:'1em',paddingRight:'1em', display:'flex'}}> <i className='fa fa-envelope fa-2x' style={{marginRight:'5px'}}></i><p>  Berheet@gmail.com</p></div>
        </div>
        <form onSubmit={this.handleSubmit}>
            <p><label>Name</label>
            <input type='text' name='name'/>
            </p>
            <p><label>Company</label>
            <input type='text' name='Company'/>
            </p>
            <p><label>Email</label>
            <input type='email' name='email'/>
            </p>
            <p><label>Phone Number</label>
            <input type='text' name='number'/>
            </p>
            <p className='msg'><label>Message</label>
            <textarea name='message' rows='7'> </textarea>
            </p>
            <button className='form-button'> Submit</button>
            </form>
        </div>
    </div>
        </div>
        </div>
        )} 
}     
export default Contact;