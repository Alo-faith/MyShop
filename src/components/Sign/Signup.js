import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

// styles
import { CreateButtonStyled, Form } from "./styles";

// store
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";

const Signup = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
    role: "vendor",
  });

  const handleChange = (event) => {
    const newUser = { ...user, [event.target.name]: event.target.value };
    setUser(newUser);
    console.log(user);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signup(user);
  };
  if (authStore.user) return <Redirect to="/" />;

  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <h3>Sign up</h3>
        <div className="form-group">
          <label>Username</label>
          <input
            required
            name="username"
            value={user.username}
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group row">
          <div className="col-6">
            <label>First Name</label>
            <input
              name="firstName"
              value={user.firstName}
              type="text"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label>Last Name</label>
            <input
              name="lastName"
              value={user.lastName}
              type="text"
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            value={user.email}
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            required
            name="password"
            value={user.password}
            type="password"
            className="form-control"
            onChange={handleChange}
          />{" "}
        </div>
        <CreateButtonStyled className="btn float-right" type="submit">
          Sign up
        </CreateButtonStyled>
        <Link to="/signin">Sign in</Link>
      </Form>
    </div>
  );
};

export default observer(Signup);
