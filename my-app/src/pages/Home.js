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
      
      <div className="container-fluid d-flex justify-content-center align-items-center vh-100 bg-dark text-light">
        <div className="text-center">
          <h1 className="text-warning">Rocket League Stat Tracker</h1>
          <input
            type="text"
            className="form-control mt-3 mb-3"
            placeholder="Enter Epic ID"
            onKeyDown={handleInput}
          />
          {ranks.length > 0 ? (
            <Container className="mt-4">
              <div className="table-responsive">
                <table className="custom-table table-lg table-bordered border border-warning">
                  <thead>
                    <tr>
                      <th>Playlist</th>
                      <th>Rank</th>
                      <th>Division</th>
                      <th>MMR</th>
                      <th>Games Played</th>
                      <th>Streak</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ranks.map((rank, index) => (
                      <tr key={index}>
                        <td className="text-warning">{rank.playlist}</td>
                        <td>{rank.rank}</td>
                        <td>{rank.division}</td>
                        <td>{rank.mmr}</td>
                        <td>{rank.played}</td>
                        <td>{rank.streak}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Container>
          ) : (
            <p className="mt-4">Using an Epic ID, search for a player's ranks and statistics.</p>
          )}
        </div>
      </div>
    </>
  );
}
