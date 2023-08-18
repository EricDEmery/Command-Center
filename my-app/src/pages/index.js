import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Page() {
    return <div>
      <h1>Home page JDH</h1>
      <Navbar />
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/about">about</Link>
      <Link href="/profile">profile</Link>
    </div>
  }