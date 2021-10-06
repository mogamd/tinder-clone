import React from 'react';
import './Header.css';

// Material UI Imports:
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
    return (
        <div className='header'>
            
            <IconButton>
                <PersonIcon fontSize='large' className='header__icon'/>
            </IconButton>

            <img
                className='header__logo'
                src='data:image/jpeg;base64,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'
                alt=''
            />
            <IconButton>
                <ForumIcon fontSize='large' className='header__icon'/>
            </IconButton>

        </div>
    )
}

export default Header
