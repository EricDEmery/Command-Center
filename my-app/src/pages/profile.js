import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Container, Table } from "react-bootstrap";
import { useGlobalState } from "../context/GlobalState.js";
import style from "../pages/css/style.css"

const api = "https://8000-ericdemery-commandcente-zcd9qh1wx6l.ws-us104.gitpod.io/api/search/";
const userApi = "https://8000-ericdemery-commandcente-zcd9qh1wx6l.ws-us104.gitpod.io/api/users/";

export default function DashboardPage() {
  const { state } = useGlobalState();
  const { user } = state;
  const [ranks, setRanks] = useState([]);
  const [userEpicId, setUserEpicId] = useState(null);

  useEffect(() => {
    const userStats = async () => {
      try {
        const response = await axios.get(`${userApi}${user.user_id}/`);
        setUserEpicId(response.data.epic_id);
      } catch (error) {
        console.error('Error fetching user epic ID:', error);
      }
    };

    userStats();
  }, [user.user_id]);

  useEffect(() => {
    async function fetchData() {
      if (userEpicId) {
        try {
          const response = await axios.get(`${api}?username=${userEpicId}`);
          setRanks(response.data.ranks);
        } catch (error) {
          console.error("Error fetching user stats:", error);
        }
      }
    }

    fetchData();
  }, [userEpicId]);

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <h1 className="text-warning text-center mt-3 mb-3">Your Stats</h1>
        {userEpicId ? (
          <Container className="mt-4">
            <div className="table-responsive">
              <Table className="custom-table bg-dark table table-bordered border border-warning" id="table">
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
              </Table>
            </div>
          </Container>
        ) : (
          <p className="mt-4">Loading user statistics...</p>
        )}
      </div>
    </>
  );
  
  
}
