import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Search = ({ keyword, onChange }) => {
  const element = <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />;
  const [play, setPlay] = useState("none");

  const noTapp = {
    backgroundColor: "rgb(23, 23, 23)",
    position: "absolute",
    right: "0%",
    border: "none",
    width: "0px",
    visibility: "hidden",
    zIndex: "-1",
  };

  const tapp = {
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    border: "0.5px solid rgba(255, 255, 255, 0.05)",
    width: "200px",
    visibility: "visible",
    zIndex: "0",
  };

  const [tap, setTap] = useState(noTapp);
  console.log(tap);

  const handleClick = () => {
    if (play === "none") {
      setPlay("inline");
      setTap(noTapp);
    } else {
      setPlay("none");
      setTap(tapp);
    }
  };

  return (
    <div className="search">
      <input
        style={tap}
        className="inputSearch"
        type="text"
        value={keyword}
        placeholder="Search"
        onChange={(e) => onChange(e.target.value)}
      />
      <i onClick={handleClick}>{element}</i>
    </div>
  );
};

export default Search;
