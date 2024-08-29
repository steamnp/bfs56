import React, { useState } from "react";
import { FaUserEdit } from "react-icons/fa"; // Import the edit icon
import { useNavigate } from "react-router-dom";
import { getUserFromLocalStorage } from "../utils/tokenConfig";
import { useUpdateUserMutation } from "../features/auth/authService"; // Import the hook

const Profile = () => {
  const navigate = useNavigate();
  const [updateUser] = useUpdateUserMutation(); // Use the hook for updating user

  const userProfile = getUserFromLocalStorage();
  console.log(userProfile);

  const initialUser = {
    firstName: userProfile?.firstname,
    lastName: userProfile?.lastname,
    email: userProfile?.email,
    mobile: userProfile?.mobile,
  };

  const [user, setUser] = useState(initialUser);
  const [isEditing, setIsEditing] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = async () => {
    setIsEditing(false);
    setIsUpdating(true);
    try {
      await updateUser({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        mobile: user.mobile,
      }).unwrap(); // Use unwrap() to handle the promise result or error
      navigate("/profile"); // Optional: navigate or show a success message
    } catch (error) {
      console.error("Update failed:", error); // Handle errors as needed
    } finally {
      setIsUpdating(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-3">User Profile</h2>
      <div className="row">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  value={user.firstName}
                  onChange={handleInputChange}
                  readOnly={!isEditing}
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  value={user.lastName}
                  onChange={handleInputChange}
                  readOnly={!isEditing}
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={user.email}
                readOnly
              />
            </div>

            <div className="mb-3">
              <label htmlFor="mobile" className="form-label">
                Mobile
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="mobile"
                  name="mobile"
                  value={user.mobile}
                  onChange={handleInputChange}
                  readOnly={!isEditing}
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="d-flex mb-3">
        <button
          type="button"
          className="btn"
          style={{ backgroundColor: "#febd69", borderColor: "#febd69" }}
          onClick={isEditing ? handleSaveClick : handleEditClick}
          disabled={isUpdating} // Disable button while updating
        >
          {isUpdating ? "Saving..." : isEditing ? "Save" : <FaUserEdit />}
        </button>
      </div>
    </div>
  );
};

export default Profile;
