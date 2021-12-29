import React from 'react'
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { CarDetails } from './data.js';
import Sidebar from './Sidebar'
import Display from './Display'

import './styles.css'
const Cars = () => {
    
    const [carDetails, setcarDetails] = useState(CarDetails);

    const sortAscending = () => {
        const sorted = CarDetails.sort((first, second) => { return first.price > second.price ? 1 : -1 });
        setcarDetails(sorted)
    }
    const filterfreekm = (button) => {
        const filtered = CarDetails.filter(item => item.freekms === button)
        alert(`${button} free kms selected`)
        setcarDetails(filtered)
    }
    const filterprice = (button) => {
        const filtered = CarDetails.filter(item => item.price <= button)
        alert(`range upto ${button}  selected`)
        setcarDetails(filtered)
    }
    const filterseats = (button) => {
        const filtered = CarDetails.filter(item => item.seats === button)
        alert(`${button} seats selected`)
        setcarDetails(filtered)
    }
    const filtercartypes = (button) => {
        const filtered = CarDetails.filter(item => item.cartype === button)
        alert(`Car Type ${button} selected`)
        setcarDetails(filtered)
    }
    const filtertransmission = (button) => {
        const filtered = CarDetails.filter(item => item.transmission === button)
        alert(`Tansmission ${button} selected`)
        setcarDetails(filtered)
    }
    const filterdelivery = (button) => {
        const filtered = CarDetails.filter(item => item.DeliveryType === button)
        alert(`Delivery Type ${button} selected`)
        setcarDetails(filtered)
    }

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <div>
            <Box sx={{ flexGrow: 1 }} p="2">
                <Grid container spacing={2}>
                    <Grid item xs={4} >
                        <Item style={{ marginTop: 15, marginLeft: 5, height: '160vh' }}>
                            <Sidebar filterfreekm={filterfreekm} filterseats={filterseats} filtercartypes={filtercartypes} filterdelivery={filterdelivery} filtertransmission={filtertransmission} filterprice={filterprice} sortAscending={sortAscending} />
                        </Item>
                    </Grid>

                    <Grid item xs={8} >
                        <Item style={{marginTop: 15, marginRight: 5}}>
                            Mumbai
                        </Item>
                        <br />
                        <Item >
                        <h5>2021-12-30 T 12:28 &nbsp;&nbsp; 2021-12-31  T 19:28</h5> 
                        </Item>
                        <Item style={{ marginTop: 15, marginRight: 5, height: '98%' }}>
                            <Display carDetails={carDetails} />
                        </Item>
                    </Grid>
                </Grid>
            </Box>
            <br />
        </div>
    );
}

export default Cars;





