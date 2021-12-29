import React from 'react'
import './styles.css'
import desktop from '../images/desktop.png';
import FormControl from '@mui/material/FormControl';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { useState } from 'react';

const Home = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => setOpen(false);
    
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const background = {
        backgroundImage: "url(" + desktop + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '32vh'
    }
    return (
        <div className='home' style={{ ...background }} >
            <Button onClick={handleOpen} color="inherit">Round Trip <ArrowDropDownIcon /> </Button>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography id="modal-modal-title" >
                        <h4>Schedule a Round Trip</h4>
                        <h6>Outstation Road Trips, Long Drives, Shopping Mall</h6>
                    </Typography>
                    <br /> <br /> <hr />
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <h4>One Way to nearby Cities</h4>
                        <h6>Outstation Road Trips, Long Drives, Shopping Mall</h6>
                    </Typography>
                </Box>
            </Modal>
            <br />
            <FormControl className='searchOrder'>
                <TextField InputProps={{ endAdornment: (<InputAdornment> <IconButton> <MyLocationIcon /> </IconButton> </InputAdornment>) }} label="Pick up City, Airport, Address or Hotel" style={{ width: '150%', backgroundColor: 'white' }} />
                <br />
                <Button variant="contained" color="success" type="submit" style={{ width: '150%' }}>Find Cars</Button>
                <br /> <br /> <br /><br />
            </FormControl>

        </div >
    );
}

export default Home
