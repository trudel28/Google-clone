import React from "react";
import "./Main.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";

function Main() {
  return (
    <div className="main">
      <div className="main_image">
        <img
          src="https://www.google.ca/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt=""
        />
      </div>
      <div className="search">
        <SearchIcon className="loupe" />
        <input className="search_input" type="text" />
        <MicIcon className="mic" />
      </div>
      <div className="btn">
        <button>Google Search</button>
        <button>I'm Feeling Lucky</button>
      </div>
      <div className="text">
        <p>
          Google offered in :{" "}
          <span>
            <a href="">Français</a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Main;
