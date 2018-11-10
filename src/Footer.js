import React, { Component } from 'react';
import './Footer.css';
// import '../node_modules/contact-me-custom/bin/elements.js';

class Footer extends Component {
    render() {
        return (
            <div className="foot">
                <contact-me author="Nikhil Pahwa" label="React!"></contact-me>
            </div>
        );
    }
}

export default Footer;