import React, { useState } from "react";
import { FaUserEdit } from "react-icons/fa"; // Import the edit icon
import { useDispatch } from "react-redux";
import { getUserFromLocalStorage } from "../utils/tokenConfig";
import { useUpdateUserMutation } from "../features/auth/authService"; // Updated import

const Profile = () => {
  const dispatch = useDispatch();

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

  const [updateUser, { isLoading, isError, isSuccess }] =
    useUpdateUserMutation(); // Use the hook from createApi

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = async () => {
    setIsEditing(false);
    try {
      const updatedUser = await updateUser({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        mobile: user.mobile,
      }).unwrap();
      console.log("User updated successfully:", updatedUser);
    } catch (error) {
      console.error("Failed to update user:", error);
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
          disabled={isLoading} // Disable the button while the update is in progress
        >
          {isEditing ? "Save" : <FaUserEdit />}
        </button>
      </div>
      {isError && <div className="error">Error updating profile</div>}
      {isSuccess && <div className="success">Profile updated successfully</div>}
    </div>
  );
};

export default Profile;
