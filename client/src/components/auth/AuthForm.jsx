import React, { useState } from "react";

function AuthForm({ type, onSubmit }) {
  const isSignUp = type === "signup";

  const [formData, setFormData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    birthdate: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData)
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{isSignUp ? "Sign Up" : "Log In"}</h2>
      {isSignUp && (
        <>
          <div>
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              placeholder="First name"
              className="border-2"
            />
          </div>
          <div>
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              placeholder="Last name"
              className="border-2"
            />
          </div>
          <div>
            <input
              type="date"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
              className="border-2"
            />
          </div>
        </>
      )}
      <div>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          className="border-2"
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          className="border-2"
        />
      </div>
      <button type="submit">
        {isSignUp ? "Sign Up" : "Log In"}
      </button>
    </form>
  );
}

export default AuthForm;
