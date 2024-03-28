import { useState } from 'react';
import Navbar from "./Navbar";
import '../assets/css/profile.css';

const Userprofile = () => {
  const [profile, setProfile] = useState({
    username: 'Anusree',
    email: 'anusree@gmail.com',
    bio: 'User',
    avatarUrl: 'https://via.placeholder.com/150',
    location: 'New York, USA',
    website: 'https://example.com',
    joinedDate: 'January 1, 2023',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState({ ...profile });

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    setProfile({ ...editedProfile });
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditedProfile({ ...profile });
    setIsEditing(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };
  
  return (
    <div className="home11">
      <Navbar />
      <div className="sidebar-contentpr">
      <div className="profile">
          <div className="profile-header">
          <img src={'https://res.cloudinary.com/ddlw9iej1/image/upload/v1708764246/pro_msw5st.png'} alt="Profile Avatar" className="avatar" />
            <div className="profile-details">
              {isEditing ? (
                <input
                  type="text"
                  name="username"
                  value={editedProfile.username}
                  onChange={handleInputChange}
                  className="input-field"
                />
              ) : (
                <h2>{profile.username}</h2>
              )}
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={editedProfile.email}
                  onChange={handleInputChange}
                  className="input-field"
                />
              ) : (
                <p>{profile.email}</p>
              )}
              {isEditing ? (
                <textarea
                  name="bio"
                  value={editedProfile.bio}
                  onChange={handleInputChange}
                  className="input-field"
                />
              ) : (
                <p>{profile.bio}</p>
              )}
              <div className="additional-details">
                <p><strong>Location:</strong> {profile.location}</p>
                <p><strong>Website:</strong> <a href={profile.website}>{profile.website}</a></p>
                <p><strong>Joined:</strong> {profile.joinedDate}</p>
              </div>
              {isEditing ? (
                <div className="edit-actions">
                  <button className="button save-button" onClick={handleSaveProfile}>Save</button>
                  <button className="button cancel-button" onClick={handleCancelEdit}>Cancel</button>
                </div>
              ) : (
                <button className="button edit-button" onClick={handleEditProfile}>Edit Profile</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userprofile;
