import Link from "next/link";
import React, { useState } from "react";
import Navbar from "../components/Navbar";

function SearchPage() {
  return (
    <>
      <h1>Home page JDH</h1>
      <Navbar />
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/about">about</Link>
      <Link href="/profile">profile</Link>
      </>
  )}