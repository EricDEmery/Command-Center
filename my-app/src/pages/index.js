import Link from "next/link";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const api =
  "https://8000-ericdemery-commandcente-zcd9qh1wx6l.ws-us104.gitpod.io/api/search";

export default function SearchPage() {
  const [ranks, setRanks] = useState([]);

  function handleInput(e) {
    if (e.key === "Enter") {
      fetchData(e.target.value);
    }
  }

  async function fetchData(username) {
    try {
      const response = await axios.get(`${api}?username=${username}`);
      setRanks(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  console.log(ranks);
  return (
    <>
      <h1>Rocket League Stat Tracker</h1>
      <Navbar />
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/about">about</Link>
      <Link href="/profile">profile</Link>
      <Link href="/register">register</Link>
      <Link href="/login">login</Link>

      <input
        type="text"
        placeholder="Enter Epic ID"
        onKeyDown={(e) => handleInput(e)}
      />
    </>
  );
}
