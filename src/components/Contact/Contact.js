import React, { useRef, useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import LinkedinSVG from '../../ressources/icons/LinkedinSVG';
import GitHubSVG from '../../ressources/icons/GithubSVG';
import Modal from '../Modal/Modal';

export const Contact = () => {
    const form = useRef();
    const [isOpen, setIsOpen] = useState(false);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const sendEmail = (e) => {
        e.preventDefault();
        if (name && phone && email && message !== '') {
            emailjs.sendForm('service_oqbkv5v', 'template_b9kegpa', form.current, '9m3KXRw8rP1-JPNRZ')
                .then((result) => {
                    console.log(result.text);
                    setIsOpen(true); // Ouvrir la modal lorsque le mail est envoyé avec succès
                    setName('');
                    setPhone('');
                    setEmail('');
                    setMessage('');

                })
                .catch((error) => {
                    console.log(error.text);
                });
        } else {
            console.log('Veuillez remplir tous les champs');
        }
    };

    const handleModal = () => {
        setIsOpen(!isOpen);
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
                            <input type="text" name="user_name" placeholder='Nom' onChange={(e) => setName(e.target.value)} value={name} />
                            <input type="text" name="user_phone" placeholder='Numéro de téléphone' onChange={(e) => setPhone(e.target.value)} value={phone} />
                            <input type="email" name="user_email" placeholder='Adresse mail' onChange={(e) => setEmail(e.target.value)} value={email} />
                        </div>
                        <textarea name="message" placeholder='Votre message' onChange={(e) => setMessage(e.target.value)} value={message} />
                    </div>

                    <div className='button-wrapper'>
                        <button className='button-primary color' type='submit'>envoyer {isOpen}</button>
                    </div>
                </form>
                {isOpen ? (
                    <Modal isOpen={isOpen} handleModal={handleModal} title="Votre message a été envoyé !" />
                ) : null}
            </div>
        </div>
    );
};
