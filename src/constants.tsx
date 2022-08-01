import React from 'react';
import { makeStyles } from "@material-ui/core";


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
        flex: "0 0 50%"
    },
    loginSide: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: "0 0 50%"
    },
    loginWrapper: {
        width: 380
    },
    loginSideTitle: {
        fontSize: 32,
        fontWeight: 700,
        marginTop: 15,
        marginBottom: 40
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

{/* <Button style={{borderRadius: 20, textTransform: "none"}} color="primary" variant="contained" >Tweet</Button> */}

export default useStyles;