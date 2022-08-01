// @ts-nocheck

import React from 'react';

import TwitterIcon from '@material-ui/icons/Twitter';

import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import { Typography, Link } from "@material-ui/core";

import useStyles from "../constants";

const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
};    

export default function Dialog(props: boolean) {
    const { state, toggleFunc } = props;

    const classes = useStyles();

    const [name, setName] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    };

    return (
        <div>
            { state && <Modal
            open={state}
            // onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <TwitterIcon style={{width: 40, height: 33}} color='primary'/>
                    </div>
                    <Typography className={classes.modalTitle} variant="h6" component="h2">
                        Create an account
                    </Typography>

                    <FormControl variant="standard">
                        <InputLabel htmlFor="component-helper">Name</InputLabel>
                        <Input
                            className="inputControl"
                            value={name}
                            onChange={handleChange}
                        />
                    </FormControl>

                    <FormControl variant="standard">
                        <InputLabel htmlFor="component-helper">Phone Number</InputLabel>
                        <Input
                            className="inputControl"
                            value={name}
                            onChange={handleChange}
                        />
                    </FormControl>

                    <Link style={{margin: "10px 0"}}>Use email</Link>
                    <Button onClick={() => toggleFunc(!state)} variant='contained' color='primary' >Cancel</Button>
                </Box>
            </Modal>
            }
        </div>
    )
}
