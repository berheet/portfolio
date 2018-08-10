import React, {Component} from 'react';
import './Contact.css';

const Contact = () =>(
    <div class="form">
    <div className='form-div'>
    <div className='contact-me'><h2 >Contact Me</h2></div>
    <div className='container animated bounceInLeft'>
        <div className='contact-info'>
        <h3></h3>
        <ul>
            <li><h3>Eyobell Berhe</h3></li>
            <li><i className='fa fa-road'></i> Alexandria, Virginia</li>
            <li><i className='fa fa-envelope'></i>berheet@gmail.com</li>
            </ul>
        </div>
        <div className='contact-form'>
        <form>
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
)         
export default Contact;