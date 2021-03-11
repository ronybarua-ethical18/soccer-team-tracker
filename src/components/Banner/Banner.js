import React from 'react';
import { Container } from 'react-bootstrap';
import './Banner.css';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Banner = () => {
    return (
        <div className="bg-light">
            <Container className="banner w-100 d-flex align-items-center justify-content-center p-3">
                <h1 className="display-3 text-white banner-title p-5">
                    <FontAwesomeIcon icon={faFutbol} className="mr-3 banner-icon" spin></FontAwesomeIcon>Soccer Team Tracker</h1>
            </Container>
        </div>
    );
};

export default Banner;