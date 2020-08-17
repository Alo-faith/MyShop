import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

// styles
import { CreateButtonStyled, Form } from "./styles";

// store
import authStore from "../../stores/authStore";
import { observer } from "mobx-react";

const Signin = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const newUser = { ...user, [event.target.name]: event.target.value };
    setUser(newUser);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signin(user);
  };

  if (authStore.user)
    return (
      <Redirect
        to={authStore.user.shopSlug ? `/shops/${authStore.user.shopSlug}` : "/"}
      />
    );
  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <h3>Sign in</h3>
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
        <div className="form-group">
          <label>Password</label>
          <input
            required
            name="password"
            value={user.password}
            type="password"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <CreateButtonStyled
          onClick={handleSubmit}
          className="btn float-right"
          type="submit"
        >
          Sign in
        </CreateButtonStyled>
        <Link to="/signup">New User</Link>
      </Form>
    </div>
  );
};

export default observer(Signin);
