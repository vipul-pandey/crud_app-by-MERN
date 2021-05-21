import React from 'react';
import './css/form.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import BasicTable from './BasicTable';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';

const Showdata = () => {
  const [inputField, setInputField] = useState("");
  const [render, setRender] = useState(false);

  useEffect(() => {
    getAllinputField();
  }, [render]);

  const getAllinputField = () => {
    axios.get('http://localhost:5000/api/student', inputField)
      .then((res) => setInputField(res.data))
      .catch((err) => { console.log(err.message) });
  }
  // console.log(inputField)
  const handleDelete = (id, e) => {
    e.preventDefault();
    axios.delete(`http://localhost:5000/api/student/${id}`)
    .then(() => {
      setRender(prev => !prev)
      alert('Data deleted successfully');
    }).catch((error) => console.log(error.message));
  };

  let history = useHistory();
  function handleClick() {
    history.push("/");
  }


  return (
    <>
      <div className='table_header'>
        <h1 className='header'>TOTAL USERS</h1>
        <br />
      </div>
      {inputField && <BasicTable field={inputField} handleDelete={handleDelete} {...{ render }} />}
      <Button variant='contained' color='secondary' onClick={handleClick} style={{ marginTop: '20px' }}>FILL FORM </Button>
    </>
  )
  }
export default Showdata;