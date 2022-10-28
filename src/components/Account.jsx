import React from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

const Account = () => {
  //match logged in user to user in firestore and return display name
  const [displayName, setDisplayName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);

  let navigate = useNavigate();

  const [user, setUser] = React.useState(null);
  //get user logged in and display name
  //if user is not logged in, redirect to signin page
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log("USER", user);
      //turn user.email object into string

      setEmail(user.email);
      alert("You are logged in", uid);
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  console.log(user);
  return (
    <div className="max-w-[600px] mx-auto my-16 p-4">
      <h1 className="text-2xl font-bold py-4">Account</h1>

      <p>User email:{email} </p>
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
