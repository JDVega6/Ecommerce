import React from 'react'
import accounting from 'accounting'
import {Button} from '@material-ui/core'
import { makeStyles } from '@mui/styles'
import { styled } from '@mui/material/styles';
const useStyle = makeStyles((theme)=>({
    root: {
        display:"flex",
        flexDirection:"column",
        justifycontent:"center",
        alignItems:"center",
        height: "20vh",
    }


}))
const Total = () => {
    const classes = useStyle()  
    return (
        <div className={classes.root} >
            <h5>Total items: 3</h5>
            <h5>{accounting.formatMoney(50)}</h5>
            
            <Button variant="contained" color="secondary" >Check out</Button>
        </div>
    )
}

export default Total
