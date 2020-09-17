import React from "react";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./RightNavBar.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function RightNavbar() {
  const classes = useStyles();
  return (
    <div className="rightNav">
      <a href="#">Gmail</a>
      <a href="#"> Images</a>
      <a href="">
        <ViewModuleIcon />
      </a>
      <a href="#">
        <Avatar
          className={classes.small}
          src="https://scontent.fyhu2-1.fna.fbcdn.net/v/t1.0-9/14717118_10153749857630356_3209614510848148068_n.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_ohc=xeWjq92zHZEAX-huRl-&_nc_ht=scontent.fyhu2-1.fna&oh=8547298a8861da9a49c56f5b67875fef&oe=5F8806CC"
        />
      </a>
    </div>
  );
}

export default RightNavbar;
