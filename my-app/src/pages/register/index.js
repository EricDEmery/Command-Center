import React, { useState } from "react";
import authService from "../../services/auth.service";
import { useRouter } from "next/router";
import Link from "next/link";
import '/src/pages/css/style.css';

function Register() {
  const router = useRouter();
  const [user, setUser] = useState({
    password: "",
    passwordConf: "",
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    epic_id: "" // Add epic_id field
  });

  const handleChange = (key, value) => {
    setUser({
      ...user,
      [key]: value,
    });
  };
console.log(user)
  async function handleRegister(e) {
    e.preventDefault();
    user.username = user.email;
    authService.register(user);
    router.push("/");
  }

  return (
    <div className="w-screen h-screen container-fluid d-flex justify-content-center align-items-center text-center vh-100 bg-dark text-light">
      <div className="col-md-6 col-lg-4">
        <h1 className="text-center text-warning">Register</h1>
        <div className="flex">
          <form className="mx-auto border border-warning bg-mtgray" onSubmit={handleRegister}>
            <div className="flex justify-between m-2 items-center space-x-2">
              <label htmlFor="firstName">First Name:</label><br />
              <input
                className="border form-control"
                type="text"
                id="firstName"
                required
                onChange={(e) => handleChange("firstName", e.target.value)}
              />
            </div>
            <div className="flex justify-between m-2 items-center space-x-2">
              <label htmlFor="lastName">Last Name:</label><br />
              <input
                className="border form-control"
                type="text"
                id="lastName"
                required
                onChange={(e) => handleChange("lastName", e.target.value)}
              />
            </div>
            <div className="flex justify-between m-2 items-center space-x-2">
              <label htmlFor="email">Email:</label><br />
              <input
                className="border form-control"
                type="text"
                id="email"
                required
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>
            <div className="flex justify-between m-2 items-center space-x-2">
              <label htmlFor="password">Password:</label><br />
              <input
                className="border form-control"
                type="password"
                id="password"
                required
                onChange={(e) => handleChange("password", e.target.value)}
              />
            </div>
            <div className="flex justify-between m-2 items-center space-x-2">
              <label htmlFor="passwordConf">Confirm Password:</label><br />
              <input
                className="border form-control"
                type="password"
                id="passwordConf"
                required
                onChange={(e) => handleChange("passwordConf", e.target.value)}
              />
            </div>
            <div className="flex justify-between m-2 items-center space-x-2">
              <label htmlFor="epic_id">Epic ID:</label><br />
              <input
                className="border form-control"
                type="text"
                id="epic_id"
                required
                onChange={(e) => handleChange("epic_id", e.target.value)}
              />
            </div>
            <div className="d-flex justify-content-center">
              <input
                type="submit"
                className="btn btn-warning mb-2"
                value="Register!"
                disabled={
                  user.password &&
                  user.password.length >= 8 &&
                  user.password === user.passwordConf &&
                  user.firstName &&
                  user.lastName &&
                  user.email &&
                  user.epic_id
                    ? false
                    : true
                }
              />
            </div>
          </form>
  
          <span className="text-light text-center">Already Have An Account? Login </span>
          <Link href="/" className="text-warning text-center">Here</Link>
        </div>
      </div>
    </div>
  );
  
}

export default Register;
