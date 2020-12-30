import React from 'react';
import './contact.scss';

function Contact () {
    return (
        <div id="contact" className="contact">
            <h2>ENTRE EM CONTATO</h2>

            <form action="submit">

                <div className="formItem">
                    <label htmlFor="name">*Nome:</label>
                    <input name="name" id="name" type="text" placeholder="Nome"/>
                </div>

                <div className="formItem">
                    <label htmlFor="email">*E-mail:</label>
                    <input name="email" id="email" type="text" placeholder="E-mail"/>
                </div>

                <div className="formItem">
                    <label htmlFor="message">*Mensagem:</label>
                    <textarea rows="6" name="message" id="message" type="text" placeholder="Mensagem"/>
                </div>

            </form>
        </div>
    );
}

export default Contact;