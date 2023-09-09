import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import LinkedinSVG from '../../ressources/icons/LinkedinSVG';
import GitHubSVG from '../../ressources/icons/GithubSVG';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('', '', form.current, '')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id='contact' className='contact'>
            <div className='page-width'>
                <div className='contact-header'>
                    <h2>Contact</h2>
                    <div className='contact-header-wrapper'>
                        <p>Vous êtes intéressé pour une collaboration ? <br /> C'est avec plaisir que je lirais votre message par mail ou sur Linkedin !</p>
                        <div className='link-wrapper'>
                            <a href="https://www.github.com/quentda" target='_blank' rel='noreferrer'><GitHubSVG /></a>
                            <a href="https://www.linkedin.com/in/quentin-de-andrade-911611156/" rel='noreferrer' target='_blank'><LinkedinSVG /></a>
                        </div>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <div className='form-wrapper'>
                        <div className='input-wrapper'>
                            <input type="text" name="user_name" placeholder='Nom' />
                            <input type="text" name="user_phone" placeholder='Numéro de téléphone' />
                            <input type="email" name="user_email" placeholder='Adresse mail' />
                        </div>
                        <textarea name="message" placeholder='Votre message' />
                    </div>
                    
                    <div className='button-wrapper'>
                            <button className='button-primary color' type='submit'>envoyer</button>
                        </div>
                </form>
            </div>
        </div>
    );
};