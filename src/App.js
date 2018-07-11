import React, { Component } from 'react';
import ListContacts from './listContacts';
import * as ContactsAPI from './utils/ContactsAPI'
class App extends Component {
    state = {
        contacts: []
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
      
        return ( <div>< ListContacts onDeleteContact = { this.removeContact } contacts = { this.state.contacts } /></div>)
        
    }
}

export default App;