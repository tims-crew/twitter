import React from "react";
import theme from "../theme";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import {
  Container,
  Avatar,
  Grid,
  makeStyles,
  Paper,
  Typography,
  TextField,
} from "@material-ui/core";

const {
  ListAlt: ListAltIcon,
  Twitter: TwitterIcon,
  ExploreOutlined: ExploreOutlinedIcon,
  Search: SearchIcon,
  BookmarkBorder: BookmarkBorderIcon,
  NotificationsNone: NotificationsNoneIcon,
  MailOutline: MailOutlineIcon,
  PermIdentity: PermIdentityIcon,
  MoreHoriz: MoreHorizIcon,
} = require("@material-ui/icons");

const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: "100vh",
  },
  item: {
    padding: 0,
  },
  logo: {
    fontSize: 35,
    margin: "13px 0",
  },
  sideMenuList: {
    margin: 0,
    padding: "0 14px",
    listStyle: "none",
  },
  sideMenuIcons: {
    marginRight: 15,
    fontSize: 29,
  },
  sideMenuItemLabel: {
    marginBottom: 25,
    "& h6": {
      fontWeight: 500,
      display: "flex",
      alignItems: "center",
      fontSize: 20,
    },
    "&:hover": {
      background: "#181818",
    },
  },
  button: {
    borderRadius: 35,
    fontSize: 18,
    fontWeight: 700,
    letterSpacing: 1.5,
    textTransform: "none",
    padding: "10px 35px",
  },
  accountBott: {
    flexDirection: "row",
  },
  input: {
    border: "25% solid"
  }
}));

export default function Home() {
  let classes = useStyles();

  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={3} className={classes.sideMenuList}>
          <div>
            <Link to="/home">
              <TwitterIcon className={classes.logo} color="secondary" />
            </Link>
            <ul className={classes.item}>
              <li className={classes.sideMenuItemLabel}>
                <Typography color="secondary" variant="h6">
                  <ExploreOutlinedIcon className={classes.sideMenuIcons} />
                  Home
                </Typography>
              </li>
              <li className={classes.sideMenuItemLabel}>
                <Typography color="secondary" variant="h6">
                  <SearchIcon className={classes.sideMenuIcons} />
                  Search
                </Typography>
              </li>
              <li className={classes.sideMenuItemLabel}>
                <Typography color="secondary" variant="h6">
                  <NotificationsNoneIcon className={classes.sideMenuIcons} />
                  Notifications
                </Typography>
              </li>
              <li className={classes.sideMenuItemLabel}>
                <Typography color="secondary" variant="h6">
                  <MailOutlineIcon className={classes.sideMenuIcons} />
                  Messages
                </Typography>
              </li>
              <li className={classes.sideMenuItemLabel}>
                <Typography color="secondary" variant="h6">
                  <BookmarkBorderIcon className={classes.sideMenuIcons} />
                  Bookmarks
                </Typography>
              </li>
              <li className={classes.sideMenuItemLabel}>
                <Typography color="secondary" variant="h6">
                  <ListAltIcon className={classes.sideMenuIcons} />
                  Lists
                </Typography>
              </li>
              <li className={classes.sideMenuItemLabel}>
                <Typography color="secondary" variant="h6">
                  <PermIdentityIcon className={classes.sideMenuIcons} />
                  Profile
                </Typography>
              </li>
              <li className={classes.sideMenuItemLabel}>
                <Typography color="secondary" variant="h6">
                  <MoreHorizIcon className={classes.sideMenuIcons} />
                  More
                </Typography>
              </li>
            </ul>
            {/* <Button
              className={classes.button}
              color="primary"
              variant="contained"
              fullWidth
            >
              Tweet
            </Button>
            <Typography
              className={classes.accountBott}
              color="secondary"
              variant="h6"
            >
              <Avatar
                style={{
                  border: "1px solid black",
                  marginTop: 100,
                  justifyContent: "flex-end",
                }}
                alt="GeeksforGeeks Pic 2"
                src="https://write.geeksforgeeks.org/static/media/Group%20210.08204759.svg"
              />
              Tom
            </Typography> */}
          </div>
        </Grid>
        <Grid item xs={6}>
          <Paper>xs=4</Paper>
        </Grid>
        <Grid style={{backgroundColor: "white"}} item xs={3}>
          <TextField
            className={classes.input}
            id="filled-search"
            label="Search field"
            type="search"
            variant="filled"
            color="secondary"
            fullWidth
          />
        </Grid>
      </Grid>
    </Container>
  );
}
