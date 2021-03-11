import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Teams from '../Teams/Teams';
const Home = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
        fetch(url)
            .then(response => response.json())
            .then(data => setTeams(data.teams))
            .catch(error => 'something went wrong')
    }, [])
    return (
        <div className="bg-light">
            <Container className="bg-light p-3">
                <Row>
                    {
                        teams.map(team => {
                            return <Col className="p-2" md={3} sm={6} xs={12}>
                                <Teams key={team.idTeam} team={team}></Teams>
                            </Col>
                        })
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Home;