import React, { useState } from 'react';
import { Redirect, useHistory } from "react-router-dom";
import { Avatar, Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import axios from 'axios';

const paperStyle = {
    padding: '30px 20px',
    width: '400px',
    margin: '90px auto',
    borderRadius: '20px'
}
const avatarStyle = { color: 'red' }
const Create = () => {
    const [inputField, setInputField] = useState({
        name: "",
        email: "",
        phone: "",
        gender: "",
        password: "",
    })

    const handleChange = (e) => {
        console.log(e)
        setInputField(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('cliecked')
        axios.post('http://localhost:5000/api/student', inputField).then(() => alert('Data submitted successfully')).catch((error) => console.log(error.message));
    };

    let history = useHistory();

    function handleClick() {
      history.push("/showdata");
    }
    return (
        <>
            <Grid>
                <Paper elevation={20} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={{ fontSize: 'large' }} style={avatarStyle}>
                            <AddCircleOutlinedIcon />
                        </Avatar>
                        <h2>Sign Up</h2>
                        <Typography variant='caption'>Please fill all the fields</Typography>
                    </Grid>
                    <form onSubmit={handleSubmit}>
                        <TextField fullWidth label='Name' placeholder='Enter your Name' name='name' value={inputField.name} onChange={handleChange} required></TextField>

                        <TextField fullWidth label='Email' placeholder='Enter your Email' name="email" value={inputField.email} onChange={handleChange} required></TextField>
                        
                        <TextField fullWidth label='Phone' placeholder='Enter your Phone' name='phone' minLength='10' value={inputField.phone} onChange={handleChange} required></TextField>

                        <FormControl component="fieldset" style={{ marginTop: '20px' }}>
                            <FormLabel component="legend" >Gender</FormLabel>
                            <RadioGroup aria-label="gender" name="gender" value={inputField.gender} onChange={handleChange} required style={{ display: 'initial' }} >
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                            </RadioGroup>
                        </FormControl>

                        <TextField fullWidth label='Password' placeholder='Enter your Password' name='password' value={inputField.password} onChange={handleChange} required gutterBottom></TextField>
                        <Button variant="outlined" color="secondary" type='submit' value='submit' style={{ marginTop: '20px' }}>Submit</Button><br/>
                        
                    </form>
                    <Button variant="outlined" fullWidth color="primary"  onClick={handleClick} style={{ marginTop: '20px' }}>All Data</Button>
                </Paper>
            </Grid>
        </>
    )
}

export default Create
