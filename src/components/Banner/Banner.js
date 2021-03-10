import React from 'react';
import { Container } from 'react-bootstrap';
import './Banner.css';
import { faFutbol } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Banner = () => {
    return (
        <Container className="banner w-100 d-flex align-items-center justify-content-center p-3">
            <h1 className="display-3 banner-title border p-5">
                <FontAwesomeIcon icon={faFutbol} className="mr-3 icon"></FontAwesomeIcon>Soccer Team Tracker</h1>
        </Container>
    );
};

export default Banner;