import React, { Component } from 'react';
import ListContacts from './listContacts';
import CreateContacts from './CreateContact'
import {Route} from 'react-router-dom'
import * as ContactsAPI from './utils/ContactsAPI'
class App extends Component {
    state = {
        contacts: [],
    }
    componentDidMount(){
      ContactsAPI.getAll().then((contacts)=>
      {this.setState({
        contacts:contacts
      })}
    )
    }
    
    

    removeContact = (contact) => {
        this.setState((state) => ({
            contacts: this.state.contacts.filter((c) => c.id !== contact.id)
        }))
        ContactsAPI.remove(contact);
    }



    render() {
      
        return ( <div>
            <Route exact path='/' render={()=>(<ListContacts onDeleteContact = { this.removeContact } onNavigate={()=>{this.setState({screen:'create'})}} contacts = { this.state.contacts } /> )}/>  
            <Route path='/create' component={CreateContacts}/>
                 </div>)
        
    }
}

export default App;