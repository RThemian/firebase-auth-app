import React from "react";
import { useNavigate } from "react-router-dom";

//user must be logged in to access account page
//if user is not logged in, redirect to signin page
//if user is logged in, show account page

const Account = ({ user }) => {
  let navigate = useNavigate();
  console.log(user);
  return (
    <div className="max-w-[600px] mx-auto my-16 p-4">
      <h1 className="text-2xl font-bold py-4">Account</h1>
      <p>User Email:{user?.displayName}</p>
      <p>User Email:{user?.email}</p>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="border border-blue-500 px-6 py-2 my-4"
      >
        Logout
      </button>
    </div>
  );
};

export default Account;
