import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './SingleTeam.css';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faClock, faUsers, faFlag, faTransgenderAlt, faIgloo, faThumbtack } from '@fortawesome/free-solid-svg-icons';
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
        strCountry,
        strYoutube,
        strStadium,
        strStadiumLocation,
        strGender,
        strAlternate,
        strTeam,
        strDescriptionEN } = props.team;

    // conditionally rendering image 
    const handleImage = (gender) => {
        return gender === 'Male' ? <img src="https://i.ibb.co/1T4xPS5/wp2569318.jpg" className="img-fluid w-100 rounded" alt="" />
             : gender === 'Female' ? <img src="https://i.ibb.co/HDBPrY6/female.png" className="img-fluid w-100" alt="" />
             : <img src="https://i.ibb.co/GsHGpb9/404.gif" className="img-fluid w-100" alt="" />;
    }
    return (
        <div className="bg-light">
            <Container>
                <Row>
                    <Col className="mb-3">
                        <Card className="rounded">
                            <Card.Img src={strTeamBanner} className="team-banner" alt="Card image" />
                            <div className="shade shadow">
                                <Card.ImgOverlay className="team-badge d-flex align-items-center justify-content-center">
                                    <img src={strTeamBadge} className="img-responsive" alt="" />
                                </Card.ImgOverlay>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Container className="p-2">
                    <Row>
                        <Col className="text-left text-white mb-4 table" md={6} xs={12}>
                            <div className="p-3 team-info">
                                <h3>{strAlternate}</h3>
                                <p><FontAwesomeIcon icon={faClock} className="mr-2"></FontAwesomeIcon> <b>Founded:</b> {intFormedYear}</p>
                                <p><FontAwesomeIcon icon={faUsers} className="mr-2"></FontAwesomeIcon><b>Team:</b> {strTeam}</p>
                                <p><FontAwesomeIcon icon={faFlag} className="mr-2"></FontAwesomeIcon><b>Country:</b> {strCountry}</p>
                                <p><FontAwesomeIcon icon={faFutbol} className="mr-2"></FontAwesomeIcon><b>Sport Type:</b> {strSport}</p>
                                <p><FontAwesomeIcon icon={faTransgenderAlt} className="mr-2"></FontAwesomeIcon><b>Gender:</b> {strGender}</p>
                                <p><FontAwesomeIcon icon={faIgloo} className="mr-2"></FontAwesomeIcon><b>Stadium:</b> {strStadium}</p>
                                <p><FontAwesomeIcon icon={faThumbtack} className="mr-2"></FontAwesomeIcon><b>Stadium Location:</b> {strStadiumLocation}</p>
                            </div>
                        </Col>
                        <Col md={6} xs={12} className=" table mb-4">
                            <div className="p-3 team-info">
                                {
                                    (handleImage(strGender))
                                }
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-justify mb-4">
                            <h2 className="display-5 pseudo-title"><span className="title">Team</span> Description<hr /></h2>
                            <p>{strDescriptionEN}</p>
                            <div className="social-links text-center">
                                <a href={'https://' + strFacebook} target="_blank "><FontAwesomeIcon icon={faFacebook} className="icon" spin></FontAwesomeIcon></a>
                                <a href={'https://' + strInstagram} target="_blank "><FontAwesomeIcon icon={faInstagram} className="icon" spin></FontAwesomeIcon></a>
                                <a href={'https://' + strTwitter} target="_blank "><FontAwesomeIcon icon={faTwitter} className="icon" spin></FontAwesomeIcon></a>
                                <a href={'https://' + strYoutube} target="_blank "><FontAwesomeIcon icon={faYoutube} className="icon" spin></FontAwesomeIcon></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    );
};

export default SingleTeam;