import React, { useState } from "react";
import "./SignUp.css"; // Assuming you have a CSS file for styling
function SignupForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});

  // ✅ Handle input changes using spread operator
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData, // keep old values
      [name]: value, // update only the changed field
    });
  };

  // ✅ Basic validation logic
  const validateForm = () => {
    let errors = {};

    if (!formData.username.trim()) {
      errors.username = "Username is required";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0; // ✅ return true if no errors
  };

  // ✅ Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);
      alert("Signup Successful ✅");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit} className="signup-container">
        {/* Username */}
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Enter your username"
          />
          {formErrors.username && (
            <p style={{ color: "red" }}>{formErrors.username}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="nawazbabar398@gmail.com"
          />
          {formErrors.email && (
            <p style={{ color: "red" }}>{formErrors.email}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="abs@&23342"
          />
          {formErrors.password && (
            <p style={{ color: "red" }}>{formErrors.password}</p>
          )}
        </div>

        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default SignupForm;
