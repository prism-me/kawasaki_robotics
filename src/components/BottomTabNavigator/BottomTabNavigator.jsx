import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import {
//   AiOutlineHome,
//   AiOutlineUser,
//   AiOutlineHeart,
// } from "react-icons/ai";
// import { IoGridOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./BottomTabNavigator.scss";
import { DiAndroid, DiApple } from "react-icons/di";
import { AiTwotoneHome } from "react-icons/ai";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

function BottomTabNavigator() {
  const classes = useStyles();
  const [value, setValue] = React.useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="bottom-navigator-wrapper">
      <BottomNavigation
        showLabels={false}
        value={value}
        onChange={handleChange}
        className={classes.root}
      >
        <Link to="/">
          <AiTwotoneHome className="tab-icon" />
          <p>Home</p>
        </Link>
        <Link to="/">
          <DiAndroid
            className="tab-icon"
            onClick={() =>
              window
                .open(
                  "https://play.google.com/store/apps/details?id=com.rafid.customer&hl=en",
                  "_blank"
                )
                .focus()
            }
          />
          <p>Android</p>
        </Link>
        <Link to="">
          <DiApple
            className="tab-icon"
            onClick={() =>
              window
                .open(
                  "https://apps.apple.com/us/app/buraq-rides-delivery/id1535514773",
                  "_blank"
                )
                .focus()
            }
          />
          <p>IOS</p>
        </Link>
      </BottomNavigation>
    </div>
  );
}

export default BottomTabNavigator;
