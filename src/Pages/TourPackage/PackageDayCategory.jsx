import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { tourdata,packfilterAction } from '../../redux/Slice/TourPackageSlice'

function PackageDayCategory() {
    const {dayCatagory}=useSelector((state)=>state?.tour)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(tourdata())
    },[dispatch])

    const handleClick1 = (days) => {
        let filtData1 = [];
        filtData1 = dayCatagory?.filter((item) => item?.duration <= days);
        dispatch(packfilterAction(filtData1));
    }
    const handleClick2 = (days) => {
        let filtData2 = [];
        filtData2 = dayCatagory?.filter((item) => item?.duration >= "3 days" && item?.duration <= days);
        dispatch(packfilterAction(filtData2));
    }
    const handleClick3 = (days) => {
        let filtData3 = [];
        filtData3 = dayCatagory?.filter((item) => item?.duration >= "4 days" && item?.duration <= days);
        dispatch(packfilterAction(filtData3));
    }
    const handleClick4 = (days) => {
        let filtData4 = [];
        filtData4 = dayCatagory?.filter((item) => item?.duration >= "5 days" && item?.duration <= days);
        dispatch(packfilterAction(filtData4));
    }
    const handleClick5 = (days) => {
        let filtData5 = [];
        filtData5 = dayCatagory?.filter((item) => item?.duration >= "6 days" && item?.duration <= days);
        dispatch(packfilterAction(filtData5));
    }

  return (
    <>
     <h5 className="text-uppercase mb-4" style={{ paddingLeft: "60px" }}>Filter By Days</h5>
            <div className="d-flex flex-wrap m-n1" style={{ paddingLeft: "50px" }}>
                <ul style={{listStyle:"none"}}>
                    <li><button onClick={() => dispatch(packfilterAction(dayCatagory))} className='btn btn-light m-1' style={{ "font-size": "20px" }}>All Package</button></li>
                    <li> <button onClick={() => handleClick1("3 days")} className='btn btn-light m-1' style={{ "font-size": "17px" }}>2 - 3 days </button></li>
                    <li><button onClick={() => handleClick2("4 days")} className='btn btn-light m-1' style={{ "font-size": "17px" }}>3 - 4 days </button></li>
                    <li><button onClick={() => handleClick3("5 days")} className='btn btn-light m-1' style={{ "font-size": "17px" }}>4 - 5 days </button></li>
                    <li><button onClick={() => handleClick4("6 days")} className='btn btn-light m-1' style={{ "font-size": "17px" }}>5 - 6 days </button></li>
                    <li><button onClick={() => handleClick5("7 days")} className='btn btn-light m-1' style={{ "font-size": "17px" }}>6 - 7 days </button></li>
                </ul>
            </div>
    </>
  )
}

export default PackageDayCategory