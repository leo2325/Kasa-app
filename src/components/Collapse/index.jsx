import React, { useState } from 'react';
import classnames from 'classnames';
import '../../styles/Collapse.scss';
import '../../styles/Card.scss';
import arrow from '../../assets/icon/arrow_back_ios-24px.svg';

function Collapse(props) {
    const [expanded, setExpanded] = useState(false);
    const handleToggle = () => {
        setExpanded(!expanded);
        if (expanded) {
        }
    };
    const getIconRotationClass = () => {
        return classnames('rotate-icon', {
            'rotated': expanded,
        });
    };
    return (
        <div id="collapse_container">
            <div className='listCollapse_title' data-toggle='collapse' aria-expanded={expanded} onClick={() => handleToggle()}>
                <h3>{props.title}</h3>
                <img className={getIconRotationClass()} src={arrow} alt='icon flêche' />
            </div>
            <div>
                <div className={expanded ? 'listCollapse_content show' : 'listCollapse_content hide'}>
                    <p>{props.content}</p>
                </div>
            </div>
        </div>
    );
}
export default Collapse;