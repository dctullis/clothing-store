import React from 'react'
import './menu-item.styles.scss'
// import withRouter from '../withRouter/withRouter'
import { useNavigate } from "react-router-dom";


const MenuItem = ({ title, imageUrl, size, linkUrl}) => {

    let navigate = useNavigate();

    function handleClick() {
        navigate(`/${linkUrl}`);
    };


    return (
        <div className={`${size} menu-item`} onClick={handleClick} >
            <div
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
                className="background-image"
            />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem;