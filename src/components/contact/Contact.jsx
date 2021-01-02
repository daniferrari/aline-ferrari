import React from 'react';
import './contact.scss';

function Contact () {

    const sendEmail = (e) => {
        e.preventDefault();
        var yourMessage = document.getElementById("message").value;
        var subject = document.getElementById("name").value + ' - Contato com a Doutora Aline';
        document.location.href = "mailto:chrisgreg23@googlemail.com?subject="
            + encodeURIComponent(subject)
            + "&body=" + encodeURIComponent(yourMessage);
    }

    return (
        <div id="contact" className="contact">
            <h2>ENTRE EM CONTATO</h2>

            <form action="submit">

                <div className="formItem">
                    <label htmlFor="name">*Nome:</label>
                    <input name="name" id="name" type="text" placeholder="Nome" required=""/>
                </div>

                {/* <div className="formItem">
                    <label htmlFor="email">*E-mail:</label>
                    <input name="email" id="email" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="E-mail" required=""/>
                </div> */}

                <div className="formItem">
                    <label htmlFor="message">*Mensagem:</label>
                    <textarea rows="6" name="message" id="message" type="text" placeholder="Mensagem" required=""/>
                </div>

                <div className="buttonContainer">
                    <button onClick={(e) => {sendEmail(e)}}>Enviar</button>
                </div>

            </form>
        </div>
    );
}

export default Contact;