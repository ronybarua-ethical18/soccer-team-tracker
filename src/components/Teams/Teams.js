import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { faBomb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Teams = (props) => {
    const { idTeam, strTeamLogo, strAlternate, strTeam } = props.team;
    const history = useHistory();
    const showTeam = (id) => {
        const url = `team/${id}`;
        history.push(url);
    }
    return (
        <Card style={{ width: '18rem' }} className="p-2 w-100 shadow">
            <Card.Img variant="top" src={strTeamLogo} />
            <Card.Body>
                <Card.Title>{strAlternate}</Card.Title>
                <Card.Text>
                    {strTeam}
                </Card.Text>
                <Button onClick={() => showTeam(idTeam)}
                    variant="primary">Explore<FontAwesomeIcon className="ml-2" icon={faBomb}></FontAwesomeIcon>
                </Button>
            </Card.Body>
        </Card>
    );
};

export default Teams;