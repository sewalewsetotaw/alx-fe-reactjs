// src/components/Profile.jsx
import React from "react";
import { Outlet } from "react-router-dom";

function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="details">Profile Details</Link>
          </li>
          <li>
            <Link to="settings">Profile Settings</Link>
          </li>
        </ul>
      </nav>
      <Outlet />{" "}
      {/* Renders nested routes like ProfileDetails or ProfileSettings */}
    </div>
  );
}

export default Profile;
