import React from 'react';

function NavigationDots({ active }) {
  return (
    <div className='app__navigation'>
      {['home', 'about', 'work', 'skills', 'testimonial', 'footer'].map(
        (item) => (
          // eslint-disable-next-line jsx-a11y/anchor-has-content
          <a
            href={`#${item}`}
            key={item}
            className='app__navigation-dot'
            style={active === item ? { backgroundColor: '#313BAC' } : {}}
          ></a>
        )
      )}
    </div>
  );
}

export default NavigationDots;
