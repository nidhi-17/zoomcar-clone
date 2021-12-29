import { Link } from "react-router-dom";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import React from 'react'
import './styles.css'
const Navigation = () => {
    const styles={ textDecoration: 'none',backgroundColor:'lightblue' ,padding:'10px',border:'1px solid grey'}
  return (
    <div className="links">
      <ChevronLeftIcon/>
      <Link to='/' style={styles}>1</Link>
      <Link to='/cars' style={styles}>2</Link>
      <ChevronRightIcon/>
    </div>
  )
}

export default Navigation;


