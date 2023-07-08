import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { Vortex } from 'react-loader-spinner'
import { Deletebooking, Fetchdata } from '../../redux/Slice/BookSlice';


export const BookingDetails = () => {
    const dispatch = useDispatch();
    const navigate=useNavigate()

    const {A_data} = useSelector((state) => state?.booking);

    useEffect(() => {
        dispatch(Fetchdata());
    }, [dispatch]);

    const deleteAppointmentData = async id => {
        await Deletebooking(id)
        dispatch(Fetchdata());
    }
    
    return (
        <>
            <div className='container-fluid'>
                <table className="table mt-2">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            {/* <th scope="col">Email</th> */}
                            <th scope="col">Phone</th>
                            <th scope="col">Destination</th>
                            <th scope="col">Member</th>
                            <th scope="col">StartDate</th>
                            <th scope="col">ReturnDate</th>
                            <th scope="col">Address</th>
                            <th colSpan={2}>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {A_data !== null ? (
                            <>
                                {A_data?.map((student, key) => {
                                    return (
                                        <tr key={key}>
                                            <th>{student.name}</th>
                                            {/* <td>{student.email}</td> */}
                                            <td>{student.phone}</td>
                                            <td>{student.destination}</td>
                                            <th>{student.member}</th>
                                            <td>{student.startdate}</td>
                                            <th>{student.returndate}</th>
                                            <th>{student.address}</th>
                                            <td><Link to={`/bookingedit/${student.id}`} className='btn btn-warning'>Edit</Link></td>
                                            <td><button onClick={() => deleteAppointmentData(student.id)} className='btn btn-danger'>Delete</button></td>
                                        </tr>
                                    );
                                })}
                            </>
                        ) : (
                            <>
                                <Vortex
                                    visible={true}
                                    height="80"
                                    width="80"
                                    ariaLabel="blocks-loading"
                                    wrapperStyle={{}}
                                    wrapperClass="blocks-wrapper"
                                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                                />
                            </>

                        )}



                    </tbody>
                </table>
            </div>

        </>
    )
}

