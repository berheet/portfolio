import React, {Component} from 'react';
import './Contact.css';
import axios from 'axios';

class Contact extends Component {
    constructor(){
        super()

        this.state = {
            name: '',
            company: '',
            email: '',
            phoneNumber: '',
            message: ''

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    async handleSubmit(e){
        e.preventDefault()

        const {name, company, email, phoneNumber, message} = this.state

        const form = await axios.post('api/form', {
            name, 
            company,
            email,
            phoneNumber,
            message
        })
    }

    render(){
        return(
        <div class="form" onSubmit={this.handleSubmit}>
    <div className='form-div'>
    <div className='contact-me'><h2 >Contact Me</h2></div>
    <div className='container animated fadeIn'>
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
            <input type='text' name='name' onChange={this.handleChange}/>
            </p>
            <p><label>Company</label>
            <input type='text' name='Company' onChange={this.handleChange}/>
            </p>
            <p><label>Email</label>
            <input type='email' name='email' onChange={this.handleChange}/>
            </p>
            <p><label>Phone Number</label>
            <input type='text' name='number' onChange={this.handleChange}/>
            </p>
            <p className='msg'><label>Message</label>
            <textarea name='message' rows='7' onChange={this.handleChange}> </textarea>
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