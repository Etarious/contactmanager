import React from 'react';
import Contact from './Contact';

class Contacts extends React.Component{
    state = {
        contacts: [
            {
                id: 1,
                name: "Glorious",
                email: "glo@email.com",
                phone: "000-0000-0000"
            },
            {
                id: 2,
                name: "Etarious",
                email: "eta@email.com",
                phone: "111-1111-1111"
            },
            {
                id: 3,
                name: "Flavour",
                email: "fla@email.com",
                phone: "222-2222-2222"
            }
        ]
    }

    render(){
        const { contacts } = this.state;

        return (
            <div>
                {contacts.map(contact => <Contact key={contact.id} contact={contact} />)}
            </div>
        )
    }
}

export default Contacts;