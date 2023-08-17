import Link from "next/link";

export default function About() {
    return <div>
      <h1>About</h1>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/">Home</Link>
      <div classname="container-fluid">
      <div classname="col">
      <div classname="col">
        <h4>Why Stat Track?</h4>
      </div>
      <div classname="row">
        <div classname="col">
          <p>With a tracker, you can get up-to-date reports of your performance and post-game reports that will show you how you've done. More importantly, you can learn your average points in the field you care about, which will help you figure out what you need to focus on.</p>
        </div>
        <div classname="row">
          <div classname="col">
            <p>Command Center was founded by a group of people with a passion for caompetitive gaming</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
  }