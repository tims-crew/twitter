// @ts-nocheck

import "../App.css";
// import useStyles from "../constants";
import * as React from 'react';
import Dialog from "./Modal.tsx";
import Button from "@material-ui/core/Button";
import { makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const { Twitter: TwitterIcon, Search: SearchIcon, PeopleOutline: PeopleOutlineIcon, ChatBubbleOutline: ChatBubbleOutlineIcon } = require("@material-ui/icons");

const useStyles = makeStyles((theme) => ({
  typography: {
      color: "red",
      backgroundColor: "blue"
  },
  button: {
      borderRadius: 16,
      marginBottom: 14,
      textTransform: "none"
  },
  wrapper: {
      display: "flex",
      height: "100vh"
  },
  blueSide: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#1DA1F2",
      flex: "0 0 50%",
      transform: "scaleY(-1)",
  },
  logoSide: {
    backgroundImage: 'url(https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png)',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1DA1F2",
    flex: "0 0 53%"
  },
  loginSide: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flex: "0 0 47%",
      color: "#fff",
      backgroundColor: "#000"
  },
  loginWrapper: {
      width: 380,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
  },
  loginSideTitle: {
      fontSize:40,
      lineHeight: 1.1,
      fontWeight: 700,
      marginTop: 15,
      marginBottom: 40,
  },
  blueSideInfo: {
      listStyle: "none",
      // display: "flex",
      // flexDirection: "row",
      // alignItems: "baseline",
      // fontWeight: 800,
      marginBottom: 25,
      '& h6': {
      color: "#fff",
      display: "flex",
      alignItems: "center",
      fontSize: 20,
      fontWeight: 700,
      }
  },
  blueSideInfoIcon: {
      marginRight: 15,
      fontSize: 32,
  },
  modalTitle: {
      fontSize: 25,
      fontWeight: 600
  },
  inputControl: {
      marginTop: 10,
      marginBottom: 10
  }
}));

// TODO: fix problem with exported constant styles 

export default function SignIn() {
  const classes = useStyles();

  let [hidden, toggleModal] = React.useState(false);

  return (
    <div className={classes.wrapper}>
      <div className={classes.logoSide}>
        <TwitterIcon style={{width: 552, height: 390, color: "white"}} color="primary"/>
        {/* <ul>
          <li className={classes.blueSideInfo}>
            <Typography variant="h6">
              <SearchIcon className={classes.blueSideInfoIcon}/>
              Read about things, <br/>you are interested in
            </Typography>
          </li>
          <li className={classes.blueSideInfo}>
            <Typography variant="h6">
              <PeopleOutlineIcon className={classes.blueSideInfoIcon}/>
              Get the global news
            </Typography>
          </li>
          <li className={classes.blueSideInfo}>
            <Typography variant="h6">
              <ChatBubbleOutlineIcon className={classes.blueSideInfoIcon}/>
              Join the community
            </Typography>
          </li>
        </ul> */}
      </div>

      <div className={classes.loginSide}>
        <div className={classes.loginWrapper}>
          <Link to="/home">
            <TwitterIcon style={{width: 60, height: 80, color: "white", marginBottom: 50}}/>
          </Link>
          <Typography className={classes.loginSideTitle}>Узнайте что происходит в мире прямо сейчас</Typography>
          <Typography><b>Присоединяйтесь в Твиттеру прямо сейчас</b></Typography>
          <br/>
          <Button onClick={() => toggleModal(!hidden)} className={classes.button} color="primary" variant="contained" fullWidth>Зарегистрироваться</Button>
          <Button className={classes.button} color="primary" variant="outlined" fullWidth>Войти</Button>
        </div>
      </div>

      <Dialog state={hidden} toggleFunc={toggleModal}/>
    </div>
  );
}