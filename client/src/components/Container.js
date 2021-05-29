import React,{useState} from 'react'
import WhiteBoard from './WhiteBoard'
import "./container.css";
import {Grid,Button } from '@material-ui/core'

import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import eraser from './eraser.svg'
const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

function Container() {
    const classes = useStyles();
    const [color,setColor] = useState("#000000")
    const [brushsize,setBrushsize] = useState(5) 
    const [lastColor,setLastColor] = useState('white')
    const [lastSize,setLastSize] = useState(30);
    const [clearScreenTrue, setclearScreenTrue] = useState(false)
    console.log(color,brushsize,"CB");
    const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
    return (
        <div className="container">

            {/* <div className="color-picker-container">
                <input type="color" value={color} onChange={(e)=>setColor(e.target.value)}/>
            </div>
            <div className="size-picker-container">
                select size
                <select value={brushsize} onChange={(e)=>{setBrushsize(e.target.value)}}>
                    <option>5</option>
                    <option>10</option>
                    <option>20</option>
                    <option>30</option>
                </select>
            </div> */}
            <Grid container direction="row" spacing={5} justify="center" alignItems="center">
                <Grid item>
                    <input type="color" value={color} onChange={(e)=>setColor(e.target.value)}/>
                </Grid>
                {/* <Grid item style={{fontWeight:500}}>
                    BRUSH SIZE:
                </Grid> */}
                
                <Grid item container xs={4} alignItems="center" justify="right">
                    <Grid item>
                    <div style={{fontWeight:500}}>BRUSH SIZE:</div>
                    </Grid>
                    <Grid item>
                    
                        <FormControl variant="outlined" className={classes.margin} >
                        {/* <InputLabel id="demo-customized-select-label"></InputLabel> */}
                        
                        <Select
                        style={{height:"30px"}}
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        value={brushsize}
                        onChange={(e)=>{setBrushsize(e.target.value)}}
                        // input={<BootstrapInput />}
                        >
                        <MenuItem value={5}>
                            <em>5</em>
                        </MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                        </Select>
                    </FormControl>
                    
                    </Grid>
                    
                
                </Grid>
                
                <Grid item >
                    <Button 
                    variant="contained" 
                    // color="primary"
                    style={
                        color==='white'?{backgroundColor:`${"grey"}`}
                                 :{}   
                    }
                    onClick={(e)=>{
                        var tempColor=color;
                        var tempSize=brushsize;
                        setColor(lastColor);
                        setBrushsize(lastSize);
                        setLastColor(tempColor);
                        setLastSize(tempSize);
                        // setBrushsize(20);

                    }}>
                        {/* <i class="fas fa-eraser" style={{height:"20px"}}></i> */}
                        <img src={eraser} alt="" style={{height:"18px",widht:"18px"}} />
                    </Button>
                </Grid>
                <Grid item>
                    <Button 
                    variant="contained"
                    
                    onClick={()=>setclearScreenTrue(true)}>
                        Clear Screen
                    </Button>
                </Grid>
            </Grid>

            <div className="board-container">
                <WhiteBoard color={color} size={brushsize} clearScreenTrue={clearScreenTrue} setclearScreenTrue={setclearScreenTrue}/>
            </div>
        </div>
    )
}

export default Container
