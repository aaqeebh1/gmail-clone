import React from 'react';
import './SidebarOption.css'

const SidebarOption = ({Icon,title,number}) => {
    return (
        <div className='sidebar__option'>
            <Icon fontSize='small'/>
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    );
}

export default SidebarOption;
