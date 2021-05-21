import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Avatar, Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import UpdateIcon from '@material-ui/icons/Update';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const paperStyle = {
    padding: '30px 20px',
    width: '400px',
    margin: '90px auto',
    borderRadius: '20px'
}
const avatarStyle = { color: 'red' }
const textStyle={marginBottom:'10px'}

const UpdateData = () => {
    const [inputField, setInputField] = useState("")

    useEffect(() => {
        getAllinputField();
    }, []);

    let { id } = useParams();
    const getAllinputField = () => {
        axios.get(`http://localhost:5000/api/student/${id}`)
            .then((res) => {setInputField(res.data)})
            .catch((err) => { console.log(err.message) });
    }
 console.log(inputField.gender)
    const handleChange = (e) => {
        setInputField(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:5000/api/student/${id}`, inputField)
            .then(() => alert('Data updated successfully'))
            .catch((error) => console.log(error.message));
    };

    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={{ fontSize: 'large' }} style={avatarStyle}>
                        <UpdateIcon />
                    </Avatar>
                    <h2>Update User</h2>
                    <Typography variant='caption'>Please fill all the fields</Typography>
                </Grid>
                <form onSubmit={handleSubmit}>
                    <TextField fullWidth placeholder='Enter your Name' name='name' value={inputField.name} onChange={handleChange} required style={textStyle} style={textStyle}></TextField>

                    <TextField fullWidth placeholder='Enter your Email' name="email" value={inputField.email} onChange={handleChange} required style={textStyle}></TextField>

                    <TextField fullWidth placeholder='Enter your Phone' name='phone' minLength='10' value={inputField.phone} onChange={handleChange} required style={textStyle}></TextField>

                    <FormControl component="fieldset" style={{ marginTop: '20px' }}>
                        <FormLabel component="legend" >Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" value={inputField.gender} onChange={handleChange} required style={textStyle} style={{ display: 'initial' }} >
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                        </RadioGroup>
                    </FormControl>

                    <TextField fullWidth placeholder='Enter your Password' name='password' value={inputField.password} onChange={handleChange} required style={textStyle} gutterBottom></TextField>

                    <Button variant="outlined" color="secondary" type='submit' value='submit' style={{ marginTop: '20px' }}>Submit</Button><br />

                </form>
                <Button variant="outlined" fullWidth color="primary" href="/showdata" style={{ marginTop: '20px' }}>All USER</Button>
            </Paper>
        </Grid>
    )
}

export default UpdateData;
