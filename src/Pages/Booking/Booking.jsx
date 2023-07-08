import {  useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import "./Booking.css"
import { Addbooking } from '../../redux/Slice/BookSlice';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Navbar from '../../Components/Common/Navbar';
import Footer from '../../Components/Common/Footer';


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



export const Booking = () => {
  const [user, setuser] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    member: "",
    startdate: "",
    returndate: "",
    address:""
  })
  const { Logouttoggle } = useSelector((state) => state?.auth)
  const [modalIsopen, setModalIsopen] = useState(false)
  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const validation = () => {
    let error = {}

    if (!user.name) {
      error.name = "Name is Required"
    }

    if (!user.email) {
      error.email = "Email is Required"
    } else if (
      !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(user.email)
    ) {
      error.email = "Enter a valid Email"
    }

    if (!user.phone) {
      error.phone = "Phone is Required"
    }
    if (!user.destination) {
      error.destination = "Destination is Required"
    }
    if (!user.member) {
      error.member = "Member is Required"
    }
    if (!user.startdate) {
      error.startdate = "Startdate is Required"
    }
    if (!user.returndate) {
      error.returndate = "Returndate is Required"
    }
    if (!user.address) {
      error.address = "Address is Required"
    }

    return error
  }

  let name, value
  const postuserData = (e) => {
    name = e.target.name
    value = e.target.value
    setuser({ ...user, [name]: value })


    if (name === "name") {
      if (value.length === 0) {
        setError({ ...error, name: "@Name is Required" })
        setuser({ ...user, name: "" })
      } else {
        setError({ ...error, name: "" })
        setuser({ ...user, name: value })
      }
    }
    if (name === "email") {
      if (value.length === 0) {
        setError({ ...error, email: "Email is required" })
        setuser({ ...user, email: "" })
      } else {
        setError({ ...error, email: "" })
        setuser({ ...user, email: value })
      }
    }
    if (name === "phone") {
      if (value.length === 0) {
        setError({ ...error, phone: "@Phone is Required" })
        setuser({ ...user, phone: "" })
      } else {
        setError({ ...error, phone: "" })
        setuser({ ...user, phone: value })
      }
    }
    if (name === "destination") {
      if (value.length === 0) {
        setError({ ...error, destination: "@Destination is Required" })
        setuser({ ...user, destination: "" })
      } else {
        setError({ ...error, destination: "" })
        setuser({ ...user, destination: value })
      }
    }
    if (name === "member") {
      if (value.length === 0) {
        setError({ ...error, member: "Member is required" })
        setuser({ ...user, member: "" })
      } else {
        setError({ ...error, member: "" })
        setuser({ ...user, member: value })
      }
    }
    if (name === "startdate") {
      if (value.length === 0) {
        setError({ ...error, startdate: "Startdate is Required" })
        setuser({ ...user, startdate: "" })
      } else {
        setError({ ...error, startdate: "" })
        setuser({ ...user, startdate: value })
      }
    }
    if (name === "enddate") {
      if (value.length === 0) {
        setError({ ...error, enddate: "Enddate is Required" })
        setuser({ ...user, enddate: "" })
      } else {
        setError({ ...error, enddate: "" })
        setuser({ ...user, enddate: value })
      }
    }
    if (name === "address") {
        if (value.length === 0) {
          setError({ ...error, address: "Address is Required" })
          setuser({ ...user, address: "" })
        } else {
          setError({ ...error, address: "" })
          setuser({ ...user, address: value })
        }
      }
  }
  const SubmitInfo = async (e) => {
    e.preventDefault();
    let ErrorList = validation()
    setError(validation())
    
    if (Logouttoggle === true) {
      setModalIsopen(false)
    }

    if (Object.keys(ErrorList).length === 0) {
      if(Logouttoggle===true){

        await Addbooking(user)
  
        toast.success("Booking successfully done we will contact you soon...")
  
      }       else {
        toast.error("invalid")
  }
}
      

    }

  return (
    <>
    <Navbar/>
      <div className='main_bg'>
      
      <div className='form'>
      <div className='form-text'>
      <h1 style={{color:"black"}}>Book Now</h1>
      <h5 style={{color:"black"}}>
                  We look forward to welcoming you to our golden wings and creating a truly unforgettable experience for you.
                </h5>
      </div>
      
      <div className='main-form'>
      <form onSubmit={SubmitInfo}>
      <span>
      <div>
         <span>Name<span style={{color:"red"}}>*</span></span>
          <input type='text' name='name' 
          value={user.name} onChange={e=>postuserData(e)}/>
          <span style={{ color: "red",fontSize:"15px" }}> {error.name} </span> 
      </div>
      <div>
      <span>Email<span style={{color:"red"}}>*</span></span>
       <input type='email' name='email' 
       value={user.email} onChange={e=>postuserData(e)}/> 
       <span style={{ color: "red",fontSize:"15px" }}> {error.email} </span>
   </div>
   <div>
   <span>Phone<span style={{color:"red"}}>*</span></span>
    <input type='text' name='phone'
    value={user.phone} onChange={e=>postuserData(e)}/>
    <span style={{ color: "red",fontSize:"15px" }}> {error.phone} </span> 
</div>
<div>
<span>Destination<span style={{color:"red"}}>*</span></span>
 <input type='text' name='destination' 
 value={user.destination} onChange={e=>postuserData(e)}/> 
 <span style={{ color: "red",fontSize:"15px" }}> {error.destination} </span>
 
</div>
<div>
<span>Member<span style={{color:"red"}}>*</span></span>
 <input type='number' name='member' 
 value={user.member} onChange={e=>postuserData(e)}/> 
 <span style={{ color: "red",fontSize:"15px" }}> {error.member} </span>
</div>
<div>
<span>Start Date<span style={{color:"red"}}>*</span></span>
 <input type='date' name='startdate' 
 value={user.startdate} onChange={e=>postuserData(e)}/> 
 <span style={{ color: "red",fontSize:"15px" }}> {error.startdate} </span>
</div>     
 <div>
<span>Return Date<span style={{color:"red"}}>*</span></span>
 <input type='date' name='returndate'
 value={user.returndate} onChange={e=>postuserData(e)}/> 
 <span style={{ color: "red",fontSize:"15px" }}> {error.returndate} </span>
</div>
<div>
<span>Address<span style={{color:"red"}}>*</span></span>
 <input type='address' name='address' 
 value={user.address} onChange={e=>postuserData(e)}/> 
 <span style={{ color: "red",fontSize:"15px" }}> {error.address} </span>
</div>
</span>
<button type='submit' onClick={()=>setModalIsopen(true)} className='submit btn btn-warning '>Submit</button>

<Modal

                      keepMounted
                      open={modalIsopen}
                      onRequestClose={() => setModalIsopen(false)}
                      aria-labelledby="keep-mounted-modal-title"
                      aria-describedby="keep-mounted-modal-description"
                    >
                      <Box sx={style}>
                        <Typography id="keep-mounted-modal-title" variant="h5" color="green" component="h2">
                          <h2>Alert Message!</h2>
                        </Typography><hr />
                        <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                          <h3> Please login for Booking</h3>
                        </Typography>


                        <div className='mt-3 d-flex justify-content-center'>
                          <button className='btn btn-secondary m-2' onClick={() => setModalIsopen(false)}>close</button>

                          <button className='btn btn-success m-2' onClick={() => navigate("/login")}>Login</button>
                        </div>

                      </Box>
                    </Modal>

      </form>
      </div>
      </div>
      </div>
      
<Footer/>

    </>
  )
}
