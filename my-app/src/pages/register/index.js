import React, { useState } from "react";
import authService from "../../services/auth.service";
import { useRouter } from "next/router";
import Link from "next/link";

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
    <div className="w-screen h-screen">
      <div>
        <h1>Register</h1>
        <div className="flex">
          <form className="mx-auto border-2 bg-mtgray" onSubmit={handleRegister}>
            <div className="flex justify-between m-2 items-center space-x-2">
              <label htmlFor="firstName">First Name:</label><br />
              <input
                className="border"
                type="text"
                id="firstName"
                required
                onChange={(e) => handleChange("firstName", e.target.value)}
              />
            </div>
            <div className="flex justify-between m-2 items-center space-x-2">
              <label htmlFor="lastName">Last Name:</label><br />
              <input
                className="border"
                type="text"
                id="lastName"
                required
                onChange={(e) => handleChange("lastName", e.target.value)}
              />
            </div>
            <div className="flex justify-between m-2 items-center space-x-2">
              <label htmlFor="email">Email:</label><br />
              <input
                className="border"
                type="text"
                id="email"
                required
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>
            <div className="flex justify-between m-2 items-center space-x-2">
              <label htmlFor="password">Password:</label><br />
              <input
                className="border"
                type="password"
                id="password"
                required
                onChange={(e) => handleChange("password", e.target.value)}
              />
            </div>
            <div className="flex justify-between m-2 items-center space-x-2">
              <label htmlFor="passwordConf">Confirm Password:</label><br />
              <input
                className="border"
                type="password"
                id="passwordConf"
                required
                onChange={(e) => handleChange("passwordConf", e.target.value)}
              />
            </div>
            <div className="flex justify-between m-2 items-center space-x-2">
              <label htmlFor="epic_id">Epic ID:</label><br />
              <input
                className="border"
                type="text"
                id="epic_id"
                required
                onChange={(e) => handleChange("epic_id", e.target.value)}
              />
            </div>
            <div className="flex">
              <input
                type="submit"
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
          <Link href={`/loginPage`}>Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
