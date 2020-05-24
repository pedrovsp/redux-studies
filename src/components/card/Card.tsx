import React, { FunctionComponent } from 'react';
import './Card.scss'
export interface CardProps {
    title: string;
};

export const Card: FunctionComponent<CardProps> = (props) => {
    return <div className='Card'>
        <div className='Header'>
            <span>{props.title}</span>
        </div>
        <div className='Content'>
            {props.children}
        </div>
    </div>
}