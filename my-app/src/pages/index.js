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
      <h1>Rocket League Stat Tracker</h1>
      <Navbar />
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/about">About</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/register">Register</Link>
      <Link href="/login">Login</Link>
      <Link href="/lfg">LFG</Link>

      <input
        type="text"
        placeholder="Enter Epic ID"
        onKeyDown={handleInput}
      />

      <Container>
        <Row>
          {ranks.map((rank, index) => (
            <Col key={index} md={4}>
              <div className="border p-3 my-3">
                <h3>{rank.playlist}</h3>
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
    </>
  );
}
