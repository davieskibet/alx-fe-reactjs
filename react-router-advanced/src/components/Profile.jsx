import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <h2>User Profile</h2>
      <nav>
        <Link to="details">Details</Link> |{" "}
        <Link to="settings">Settings</Link>
      </nav>
      <div style={{ marginTop: "1rem" }}>
        {/* Nested routes will render here */}
        <Outlet />
      </div>
    </div>
  );
}
