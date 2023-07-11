/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import { images } from '../../constants';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    // This is after updatating the palceholder when user send the data.
    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    };

    // So the updated form go the sanity DB.
    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className='head-text'>Take a coffee & chat with me</h2>
      {/* THIS IS FOR THE EMAIL. */}
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href='mailto:soumyasubhrajit@gmail.com' className='p-text'>
            soumyasubhrajit@gmail.com
          </a>
        </div>

        {/* THIS IS FOR THE PHNO. */}
        <div className='app__footer-card'>
          <img src={images.mobile} alt='mobile' />
          <a href='tel: +917008210471' className='p-text'>
            +91 7008210471
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input
              type='text'
              className='p-text'
              placeholder='Your Name'
              name='name'
              value={name}
              onChange={handleChangeInput}
            />
          </div>

          <div className='app__flex'>
            <input
              type='email'
              className='p-text'
              placeholder='Your Email'
              name='email'
              value={email}
              onChange={handleChangeInput}
            />
          </div>

          <div>
            <textarea
              className='p-text'
              placeholder='Your Message'
              name='message'
              value={message}
              onChange={handleChangeInput}
            ></textarea>
          </div>

          <button className='p-text' type='button' onClick={handleSubmit}>
            {!loading ? 'Send Message' : 'Sending...'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className='head-text'>Thank you for getting touch with me.</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'footer',
  'app__whitebg'
);
