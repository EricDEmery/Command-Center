import Link from "next/link";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from 'axios'

const api = "https://8000-ericdemery-commandcente-0d2at847xvr.ws-us104.gitpod.io/app/search/";

export default function SearchPage() {
  const [username, setUsername] = useState('');
  const [ranks, setRanks] = useState([]);

  async function fetchData() {
    try {
      const response = await axios.get(`${api}?username=${username}`);
      setRanks(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
console.log(username)
console.log(ranks)
  return (
    <>
      <h1>Rocket League Stat Tracker</h1>
      <Navbar />
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/about">about</Link>
      <Link href="/profile">profile</Link>

      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter Epic ID"
      />
      <button onClick={fetchData}>Search</button>
      

    </>
  );
}
