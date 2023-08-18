import axios  from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {Box, FormLabel, TextField, FormControlLabel,Checkbox} from "@mui/material"

const BoookDetail = () => {
    const [inputs, setInputs] = useState({})
    const [checked, setChecked] =useState(false)
    const navigate = useNavigate();
    const id = useParams().id
    useEffect(()=>{
        const fetchHandler = async () =>{
            await axios.get(`http://localhost:3001/books/${id}`).then(res=>res.data).then(data=>setInputs(data.book))
        }
        fetchHandler()
    },[id])


    const sendRequest = async()=>{
      await axios.put(`http://localhost:3001/books/${id}`, {
        name:String(inputs.name),
      author:String(inputs.author),
      description:String(inputs.description),
      price:Number(inputs.price),
      image:String(inputs.image),
      available:Boolean(checked)
      }).then(res=>res.data)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        sendRequest().then(()=>navigate("/books"))

    }
    const handleChange = (e)=>{
      e.preventDefault()
      setInputs((prev)=>({
        ...prev,
        [e.target.name]:e.target.value
      }))
    }
    
  return (
    <div>
      { inputs &&  (
        <form onSubmit={handleSubmit}> 
      <Box display="flex" 
      flexDirection="column" justifyContent={"center"}
       maxWidth={700} alignContent={'center'} alignSelf={'center'}
       marginLeft={'auto'} marginRight={'auto'} marginTop={10}>
      <FormLabel>Name</FormLabel> 
      <TextField value={inputs.name} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='name'/>
      <FormLabel>Author</FormLabel> 
      <TextField value={inputs.author} onChange={handleChange}  margin='normal' fullWidth variant='outlined' name='author'/>
      <FormLabel>Description</FormLabel> 
      <TextField value={inputs.description} onChange={handleChange}  margin='normal' fullWidth variant='outlined' name='description'/>
      <FormLabel>Image url</FormLabel> 
      <TextField value={inputs.image} onChange={handleChange}  margin='normal' fullWidth variant='outlined' name='image'/>
      <FormLabel>price</FormLabel> 
      <TextField value={inputs.price} onChange={handleChange}  type='number' margin='normal' fullWidth variant='outlined' name='price'/>
      <FormControlLabel control={<Checkbox checked={checked} onChange={()=>setChecked(!checked)} />} label="available" />
      <button variant="contained" type='submit'>Update Book</button>
      </Box>
    </form>
    )
    }
    </div>
  )
}

export default BoookDetail