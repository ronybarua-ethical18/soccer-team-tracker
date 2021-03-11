import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { faBomb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Teams.css';
const Teams = (props) => {
    const { idTeam, strTeamLogo, strSport, strTeam } = props.team;

    const history = useHistory();
    const showTeam = (id) => {
        const url = `team/${id}`;
        history.push(url);
    }
    return (
        <Card style={{ width: '18rem' }} className="p-3 w-100 team-card shadow">
            <Card.Img variant="top" src={strTeamLogo} />
            <Card.Body>
                <Card.Title>{strTeam}</Card.Title>
                <Card.Text>Sports Type {strSport}</Card.Text>
                <Button id="main-button" onClick={() => showTeam(idTeam)}>
                    Explore<FontAwesomeIcon className="ml-2" icon={faBomb}></FontAwesomeIcon>
                </Button>
            </Card.Body>
        </Card>
    );
};

export default Teams;