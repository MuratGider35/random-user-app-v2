import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import mailSvg from "./assets/mail.svg";
import manSvg from "./assets/man.svg";
import womanSvg from "./assets/woman.svg";
import manAgeSvg from "./assets/growing-up-man.svg";
import womanAgeSvg from "./assets/growing-up-woman.svg";
import mapSvg from "./assets/map.svg";
import phoneSvg from "./assets/phone.svg";
import padlockSvg from "./assets/padlock.svg";
const url = "https://randomuser.me/api/";

function App() {
  const [userData, setUserData] = useState("");
  const [userInfo, setUserInfo] = useState();
  const [isClicked, setİsClicked] = useState(false);

  const getRandomUser = async () => {
    const { data } = await axios(url);
    setUserData(data.results[0]);
    setUserInfo({
      title: "My name is",
      info: "data.results[0].name.first",
    });
    setİsClicked(false);
    console.log(userData);
  };

  useEffect(() => {
    getRandomUser();
  }, []);

  const getInfo = (hover) => {
    switch (hover) {
      case "profile":
        setUserInfo({
          title: "My Name is",
          info: `${userData.name.first} ${userData.name.last}`,
        });
        break;
      case "email":
        setUserInfo({
          title: "My email is",
          info: userData.email,
        });
        break;
      case "age":
        setUserInfo({
          title: "My age is",
          info: userData.dob.age,
        });
        break;
      case "location":
        setUserInfo({
          title: "My location is ",
          info: `${userData.location.city} ${userData.location.country}`,
        });
        break;
      case "phone":
        setUserInfo({
          title: "My phone number is",
          info: userData.phone,
        });
        break;
      case "password":
        setUserInfo({
          title: "My password is ",
          info: userData.login.password,
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      {userData?.gender}
      <button onMouseOver={() => getInfo("age")}>person</button>
    </div>
  );
}

export default App;
