import React from 'react';
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

function SocialMedia() {
  return (
    <div className='app__social'>
      <div>
        <a href='https://twitter.com/SoumyaSubhrajit' target='_blank'>
          <BsTwitter />
        </a>
      </div>

      <div>
        <a href='https://www.instagram.com/soumya_subhrajit/' target='_blank'>
          <BsInstagram />
        </a>
      </div>

      <div>
        <a href='https://github.com/SoumyaSubhrajit' target='_blank'>
          <BsGithub />
        </a>
      </div>

      <div>
        <a
          href='https://www.linkedin.com/in/soumya-subhrajit-bag-56884823a/'
          target='_blank'
        >
          <BsLinkedin />
        </a>
      </div>

      <div>
        <a href='#' target='_blank'>
          <FaFacebookF />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
