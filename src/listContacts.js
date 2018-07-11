import React, { Component } from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
class ListContacts extends Component {
     static propTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired
      }

      state = {
            query: ''
          }
        
    updateQuery = (query) => {
    this.setState({ query: query.trim() })
          }
          clearQuery=()=>{
              this.setState({query:''})
          }

    render(){
        const { contacts, onDeleteContact } = this.props
        const { query } = this.state
        let showingContacts;
        if(query){
            const match = new RegExp(escapeRegExp(query), 'i');
            showingContacts = contacts.filter((contact) => match.test(contact.name));
        }else{
            showingContacts=contacts;
        }
        showingContacts.sort(sortBy('name'));
    return (
        <div className='list-contacts'>
       {JSON.stringify(this.state)}
      <div className='list-contacts-top'>
          <input
            className='search-contacts'
            type='text'
            placeholder='Search contacts'
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
        </div>
        {showingContacts.length!==contacts.length&&
        <div className='showing-contacts'>
        <span>now showing {showingContacts.length} out of {contacts.length}
        <button onClick={this.clearQuery}>show all contacts</button>
        </span>
        </div>}
        <ol className="contact-list">
            {
                showingContacts.map(contact => (
                    <li key={contact.id} className='contact-list-item'>
                        <div className='contact-avatar' style={{
                            backgroundImage: `url(${contact.avatarURL})`
                        }}></div>

                        <div className='contact-details'>
                            <p>{contact.name}</p>
                            <p>{contact.email}</p>
                        </div>
                        <button className='contact-remove' onClick= {() =>onDeleteContact(contact)} >remove</button>


                    </li>
                ))
            }
        </ol>
        
        </div>
       
    )
}

    }




export default ListContacts;