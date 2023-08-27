import Link from "next/link";
import Navbar from "../components/Navbar";

export default function About() {
    return <div>
      <Navbar />
      <div className="container mt-5 bg-dark">
      <h1 className="text-center text-warning">Why Stat Track?</h1>
      <div classname="row">
        <div classname="col">
          <p className="text-light text-center">With a tracker, you can get up-to-date reports of your performance and post-game reports that will show you how you've done. More importantly, you can learn your average points in the field you care about, which will help you figure out what you need to focus on.</p>
        </div>
        <div classname="row">
          <div classname="col">
            <p className="text-light text-center">Command Center was founded by a group of people with a passion for competitive gaming</p>
          </div>
        </div>
      </div>
      </div>
    </div>

  }