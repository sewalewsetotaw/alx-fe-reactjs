import React from "react";
import { Routes, Route, Link } from "react-router-dom";

// Sub-components for nested routes
function ProfileDetails() {
  return <div>Here are your profile details.</div>;
}

function ProfileSettings() {
  return <div>Here are your profile settings.</div>;
}

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

      {/* Nested Routes within the Profile component */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

export default Profile;
