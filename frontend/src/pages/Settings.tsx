import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../style/Settings.css';

type Settings = {};

const Settings: React.FC<Settings> = () => {
  const [pwd, setPwd] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pwd = e.target.value;
    setPwd(pwd);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Password change:', pwd);
    // Add logic to change password
  };
  return (
    <>
      <Navbar />
      <div className="settings-container">
        <h2>Account Settings</h2>
        <form className="settings-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Change Password</label>
            <input
              type="text"
              id="password"
              name="password"
              value={pwd}
              onChange={handleChange}
              placeholder="Enter new password"
              required
            />
          </div>
          <button type="submit">Change Password</button>
        </form>
      </div>
    </>
  );
};

export default Settings;
