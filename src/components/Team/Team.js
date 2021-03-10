import React, { useEffect, useState } from 'react';
// import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import SingleTeam from '../SingleTeam/SingleTeam';

const Team = () => {
    const { TeamId } = useParams();
    const [teams, setTeams] = useState([]);
    console.log(teams);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${TeamId}`;
        fetch(url)
            .then(response => response.json())
            .then(data => setTeams(data.teams));
    }, [])
    return (
        <div>
            {
                teams.map(team => <SingleTeam team={team}></SingleTeam>)
            }
        </div >
    );
};

export default Team;