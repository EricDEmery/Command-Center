import Link from "next/link";
import Navbar from "../components/Navbar";

const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://rocket-league1.p.rapidapi.com/ranks/KujohLive/',
  
  headers: {
    'User-Agent': 'RapidAPI Playground',
    'Accept-Encoding': 'identity',
    'X-RapidAPI-Key': '5fc0357622msh5ccf58c452c805dp156dafjsnf40ae832c05a',
    'X-RapidAPI-Host': 'rocket-league1.p.rapidapi.com',
    'x-rapidapi-ua': 'RapidAPI-Playground'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

export default function Page() {
    return <div>
      <h1>Home page JDH</h1>
      <Navbar />
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/about">about</Link>
      <Link href="/profile">profile</Link>
    </div>
  }