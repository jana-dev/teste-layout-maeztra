import React from 'react';
import './Tip.css';
import { IconButton } from '@mui/material';

export const Tip = (props) => {
    const iconStyle = {
        fontSize: '32px',
    };
    return (
        <div className='tip'>
            <div className="tip-icon">
                {props.materialIcon && (
                    <IconButton>
                    {React.cloneElement(props.materialIcon, { style: iconStyle })}
                </IconButton>
                )}
            </div>
            <div className='tip-content'>
                <p className='content-title'>{props.title}</p>
                <p className='content-text'>{props.text}</p>
            </div>
        </div>
    );
};