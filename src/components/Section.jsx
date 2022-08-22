import React from 'react';

const Section = ({Icon, title, color}) => {
    return (
        <div className={`email__list--section ${color}`}>
          <Icon fontSize="small" className='email__list--icon'/>
          <h4 className="email__list--section-title">{title}</h4>
        </div>
    );
}

export default Section;
