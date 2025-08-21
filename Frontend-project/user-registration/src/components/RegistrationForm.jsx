// src/components/RegistrationForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function RegistrationForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    countryCode: "+251",
    dob: "",
    country: "",
    gender: "",
    idType: "",
    password: "",
    confirmPassword: "",
    profilePhoto: null,
    idFront: null,
    idBack: null,
    document: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("❌ Passwords do not match!");
      return;
    }

    alert(`✅ Registration complete! Redirecting to login...`);
    navigate("/login"); // Redirect to login page after registration
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Create Account</h2>

      <div className="form-row">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleChange}
          required
        />
      </div>

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <div className="phone-group">
        <select
          name="countryCode"
          value={form.countryCode}
          onChange={handleChange}
          required
        >
          <option value="+251">🇪🇹 +251</option>
          <option value="+1">🇺🇸 +1</option>
          <option value="+91">🇮🇳 +91</option>
          <option value="+44">🇬🇧 +44</option>
        </select>
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />
      </div>

      <label>Date of Birth:</label>
      <input
        type="date"
        name="dob"
        value={form.dob}
        onChange={handleChange}
        required
      />

      <label>Country:</label>
      <select
        name="country"
        value={form.country}
        onChange={handleChange}
        required
      >
        <option value="">Select Country</option>
        <option value="Ethiopia">Ethiopia</option>
        <option value="USA">USA</option>
        <option value="India">India</option>
        <option value="UK">UK</option>
      </select>

      <label>Gender:</label>
      <div className="gender-group">
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={handleChange}
            required
          />{" "}
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={handleChange}
            required
          />{" "}
          Female
        </label>
      </div>

      <label>Type of ID:</label>
      <select
        name="idType"
        value={form.idType}
        onChange={handleChange}
        required
      >
        <option value="">Select ID Type</option>
        <option value="National ID">National ID</option>
        <option value="Passport">Passport</option>
        <option value="Driver License">Driver License</option>
      </select>

      <label>Upload Front Side of ID:</label>
      <input
        type="file"
        name="idFront"
        accept="image/*"
        onChange={handleChange}
        required
      />

      <label>Upload Back Side of ID:</label>
      <input
        type="file"
        name="idBack"
        accept="image/*"
        onChange={handleChange}
        required
      />

      <label>Upload Profile Photo:</label>
      <input
        type="file"
        name="profilePhoto"
        accept="image/*"
        onChange={handleChange}
        required
      />

      <label>Upload Document:</label>
      <input
        type="file"
        name="document"
        accept=".pdf,.doc,.docx,.jpg,.png"
        onChange={handleChange}
        required
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={form.confirmPassword}
        onChange={handleChange}
        required
      />

      <button type="submit">Register</button>

      <p className="form-footer">
        Already have an account?{" "}
        <span
          className="link"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/login")}
        >
          Login
        </span>
      </p>
    </form>
  );
}

export default RegistrationForm;
