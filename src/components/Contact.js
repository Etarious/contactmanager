import React from 'react';
import PropTypes from 'prop-types'

class Contact extends React.Component{
    render(){
        const {name, email, phone} = this.props.contact;
        return (
            <div className="card card-body mb-3">
                <h4>{name} <i onClick={() => console.log("Hello")} className="fas fa-sort-down"></i></h4>
                <ul className="list-group">
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Phone: {phone}</li>
                </ul>
            </div>
            
        );
    };
};

Contact.defaultProps = {
    name: "Your Name",
    email: "your@email.com",
    phone: "your-phone-number"
};

Contact.propTypes = {
    contact: PropTypes.object.isRequired
};

export default Contact;