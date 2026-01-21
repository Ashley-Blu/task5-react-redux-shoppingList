import React from "react";
import { useSelector } from "react-redux";
import { type RootState } from "../../redux/store";
import noProfile from '../assets/images/no-profile.png'

const ProfilePage: React.FC = () => {
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);

  if (!currentUser) {
    return <h1 className="text-center mt-10 text-gray-500 text-[30px]">No user logged in. <img src={ noProfile } className="w-150 h-150 mx-auto  opacity-50" /></h1>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <p><span className="font-semibold">Name:</span> {currentUser.username}</p>
      <p><span className="font-semibold">Email:</span> {currentUser.email || "N/A"}</p>
    </div>
  );
};

export default ProfilePage;
