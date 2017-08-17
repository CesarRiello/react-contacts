import React, { Component } from 'react';

class ListContacts extends Component {

  render() {
    return (
      <ol className="contact-list">
        {this.props.contacts.map(contact => (
          <li key={contact.id} className="contact-list-item"  >
            <picture className="contact-avatar"
              style={{ backgroundImage: `url(${contact.avatarURL})`}}/>
            <section className="contact-details">
              <p className="x">
                {contact.name}
              </p>
              <p className="x">
                {contact.email}
              </p>
            </section>
            <buttom className="contact-remove"> Remove </buttom>
          </li>
        ))}
      </ol>
    )
  }
}

export default ListContacts;