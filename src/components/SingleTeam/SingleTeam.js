import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './SingleTeam.css';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faClock, faUsers, faTransgenderAlt, faIgloo, faThumbtack} from '@fortawesome/free-solid-svg-icons';
import { faFutbol } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const SingleTeam = (props) => {
    const {
        strTeamBanner,
        strTeamBadge,
        strFacebook,
        strTwitter,
        intFormedYear,
        strInstagram,
        strSport,
        strYoutube,
        strStadium,
        strStadiumLocation,
        strGender,
        strAlternate,
        strTeam,
        strDescriptionEN } = props.team;

        // conditionally rendering image 
        const handleImage = (gender) => {
        if (gender === 'Male') {
            return <img src="https://i.ibb.co/yPFv7DD/male.png" className="img-fluid w-100" alt="" />
        }
        else {
            return <img src="https://i.ibb.co/HDBPrY6/female.png" className="img-fluid w-100" alt="" />
        }
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col md={12} className="mb-4">
                        <Card >
                            <Card.Img src={strTeamBanner} className="team-banner" alt="Card image" />
                            <div className="shade">
                                <Card.ImgOverlay className="team-badge d-flex align-items-center justify-content-center">
                                    <img src={strTeamBadge} className="img-responsive" alt="" />
                                </Card.ImgOverlay>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Container>
                    <Row>
                        <Col className="text-left bg-primary text-white mb-4 p-3 border table" md={6} xs={12}>
                            <h3>{strAlternate}</h3>
                            <p><FontAwesomeIcon icon={faClock} className="mr-2"></FontAwesomeIcon> <b>Founded:</b> {intFormedYear}</p>
                            <p><FontAwesomeIcon icon={faUsers} className="mr-2"></FontAwesomeIcon><b>Team:</b> {strTeam}</p>
                            <p><FontAwesomeIcon icon={faFutbol} className="mr-2"></FontAwesomeIcon><b>Sport Type:</b> {strSport}</p>
                            <p><FontAwesomeIcon icon={faTransgenderAlt} className="mr-2"></FontAwesomeIcon><b>Gender:</b> {strGender}</p>
                            <p><FontAwesomeIcon icon={faIgloo} className="mr-2"></FontAwesomeIcon><b>Stadium:</b> {strStadium}</p>
                            <p><FontAwesomeIcon icon={faThumbtack} className="mr-2"></FontAwesomeIcon><b>Stadium Location:</b> {strStadiumLocation}</p>
                        </Col>
                        <Col md={6} xs={12} className="border table mb-4">
                            {
                                (handleImage(strGender))
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-justify">
                            <p>{strDescriptionEN}</p>
                        </Col>
                    </Row>
                </Container>
                <Col md={12} className="mb-5">
                    <div className="social-links">
                        <a href={strFacebook}><FontAwesomeIcon icon={faFacebook}  spin></FontAwesomeIcon></a>
                        <a href={strInstagram}><FontAwesomeIcon icon={faInstagram} spin></FontAwesomeIcon></a>
                        <a href={strTwitter}><FontAwesomeIcon icon={faTwitter} spin></FontAwesomeIcon></a>
                        <a href={strYoutube}><FontAwesomeIcon icon={faYoutube} spin></FontAwesomeIcon></a>
                    </div>

                </Col>
            </Container>
        </div>
    );
};

export default SingleTeam;