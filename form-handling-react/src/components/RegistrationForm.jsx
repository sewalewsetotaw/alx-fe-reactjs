import React, { useState } from "react";

function RegistrationForm() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState({});
  const validateForm = () => {
    const error = {};
    if (!form.username.trim()) {
      error.username = "User name is required";
    } else if (!form.email.trim()) {
      error.email = "Email is required";
    } else if (!form.password.trim()) {
      error.password = "Password is required";
    }
    return error;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(form);
    setError(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted successfully:", form);
      alert("Registration successful!");
      setForm({ username: "", email: "", password: "" }); // Reset form
    } else {
      setError(newErrors);
      console.log("Validation errors:", newErrors);
    }
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="username">User Name:</label>
        <input
          type="text"
          name="username"
          id=""
          value={form.username}
          onChange={handleChange}
        />
        {error.username}
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id=""
          value={form.email}
          onChange={handleChange}
        />
        {error.email}
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id=""
          value={form.password}
          onChange={handleChange}
        />
        {error.password}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
