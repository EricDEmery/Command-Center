import Link from "next/link";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";



const api =
  "https://8000-ericdemery-commandcente-zcd9qh1wx6l.ws-us104.gitpod.io/api/search/";

export default function SearchPage() {
  const [ranks, setRanks] = useState([]);

  async function fetchData(username) {
    try {
      const response = await axios.get(`${api}?username=${username}`);
      // console.log("Response Data:", response.data);
      setRanks(response.data.ranks);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  function handleInput(e) {
    if (e.key === "Enter") {
      fetchData(e.target.value);
    }
  }

  return (
    <>
      <Navbar />
      <Link href="/">Login</Link>
      <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-dark text-light">
        <div className="text-center">
          <h1 className="text-warning">Rocket League Stat Tracker</h1>

          <input
            type="text"
            placeholder="Enter Epic ID"
            onKeyDown={handleInput}
          />

          <Container>
            <Row>
              {ranks.map((rank, index) => (
                <Col key={index} md={4}>
                  <div className="border rounded border-warning p-3 my-3 bg-dark">
                    <h3 className="text-warning">{rank.playlist}</h3>
                    <p>Rank: {rank.rank}</p>
                    <p>Division: {rank.division}</p>
                    <p>MMR: {rank.mmr}</p>
                    <p>Games Played: {rank.played}</p>
                    <p>Streak: {rank.streak}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
