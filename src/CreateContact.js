import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import ImageInput from './ImageInput';
import formSerialize from 'form-serialize'



class CreateContacts extends Component{
    handleSubmit=(e)=>{
        e.preventDefault();
        const values= formSerialize(e.target,{hash:true});//the hash:true turn the info from the form to an object
        console.log(values);
        if(this.props.onCreateContacts){
            this.props.onCreateContacts(values);//this is to send the data to App.js
        }
    }
    render(){
        return( <div>
            <Link to='/' className='close-create-contact'></Link>
            <form onSubmit={this.handleSubmit} className='create-contact-form'>
            <ImageInput 
            className='create-contact-avatar-input'
            name='avatarURL'
            maxHeight={64}
            />
            <div className='create-contact-details'>
            <input type='text' name='name' placeholder='NAME'/>
            <input type='text' name='email' placeholder='EMAIL'/>
            <button>Add Contact</button>
            </div>
        
            </form>




        </div>);
       
    }
}

export default CreateContacts;