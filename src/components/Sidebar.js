import React from 'react'
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import SortTwoToneIcon from '@mui/icons-material/SortTwoTone';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const Sidebar = ({ filterfreekm, filterseats, filtercartypes, filterdelivery, filtertransmission,filterprice,sortAscending }) => {
    return (
        <>
            <div className='sidebar'>
                <Button onClick={() => sortAscending()}><SortTwoToneIcon sx={{ width: 80, height: 30 }} />Sort</Button>
            </div>
            <div className="sidebar">
                <h3>Price</h3>
                <FormGroup style={{marginLeft: '34%',marginTop:'3%',color:'blue'}}>
                    <FormControlLabel control={<Checkbox onChange={()=>filterprice(2000)} />} label="1000-2000" />
                    <FormControlLabel control={<Checkbox onChange={()=>filterprice(3000)}/>} label="2000-3000"  />
                    <FormControlLabel control={<Checkbox onChange={()=>filterprice(4000)}/>} label="3000-4000"  />
                    <FormControlLabel control={<Checkbox onChange={()=>filterprice(6000)}/>} label="Upto 6000"  />
                </FormGroup>
            </div>
            <div className="sidebar">
                <h3>Free kms</h3>
                <Button value={60} onClick={() => filterfreekm(60)} style={{ marginTop: '3%' }} >60</Button>
                <Button value={120} onClick={() => filterfreekm(120)} style={{ marginRight: '2%', marginTop: '3%' }} >120</Button>
            </div>
            <div className="sidebar">
                <h3>Fuel Cost</h3>
                <FormGroup style={{marginLeft: '34%',marginTop:'3%',color:'blue'}}>
                    <FormControlLabel disabled control={<Checkbox defaultChecked />} label="Not Included" />
                </FormGroup>
            </div>
            <div className="sidebar">
                <h3>Seats</h3>
                <Button value={2} onClick={() => filterseats(2)} style={{ marginLeft: '8%', marginTop: '3%' }}>2</Button>
                <Button value={5} onClick={() => filterseats(5)} style={{ marginTop: '3%' }}>5</Button>
                <Button value={7} onClick={() => filterseats(7)} style={{ marginTop: '3%' }}>7</Button>
            </div>
            <div className="sidebar">
                <h3>Car Types</h3>
                < Button value="SUV" onClick={() => filtercartypes('SUV')} style={{ marginLeft: '6%', marginTop: '3%' }}>SUV</Button>
                < Button value="Hatchback" onClick={() => filtercartypes('Hatchback')} style={{ marginTop: '3%' }}>Hatchback</Button>
                < Button value="Sedan" onClick={() => filtercartypes('Sedan')} style={{ marginTop: '3%' }}>Sedan</Button>
            </div>
            <div className="sidebar">
                <h3>Transmission</h3>
                < Button label="Manual" value="Manual" onClick={() => filtertransmission('Manual')} style={{ marginLeft: '8%', marginTop: '3%' }}>Manual</Button>
                < Button label="Automatic" value="Automatic" onClick={() => filtertransmission('Automatic')} style={{ marginTop: '3%' }}>Automatic</Button>

            </div>
            <div className="sidebar">
                <h3>Delivery Type</h3>
                < Button label="Home Delivery" value="Home Delivery" onClick={() => filterdelivery('Home Delivery')} style={{ marginLeft: '10%', marginTop: '3%' }} >Home Delivery</Button>
                < Button label="Airport" value="Airport" onClick={() => filterdelivery('Airport')} style={{ marginTop: '3%' }} >Airport</Button>

            </div>
        </>
    )
}

export default Sidebar
