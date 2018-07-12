import React, { Component } from 'react';
import ListContacts from './listContacts';
import CreateContacts from './CreateContact'
import * as ContactsAPI from './utils/ContactsAPI'
class App extends Component {
    state = {
        contacts: [],
        screen: 'list'// create
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
            {this.state.screen==='list'&& < ListContacts onDeleteContact = { this.removeContact } onNavigate={()=>{this.setState({screen:'create'})}} contacts = { this.state.contacts } />}
            {this.state.screen==='create'&&  <CreateContacts/>}
      
                 </div>)
        
    }
}

export default App;