import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { tourdata, packfilterAction } from '../../redux/Slice/TourPackageSlice'

const PackagePriceCategory = () => {
    const { priceCatagory } = useSelector((state) => state?.tour)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(tourdata())
    }, [dispatch])

    const handleClick1 = (price) => {
        let filtData1 = [];
        filtData1 = priceCatagory?.filter((item) => item?.cost <= price);
        dispatch(packfilterAction(filtData1));
    }
    const handleClick2 = (price) => {
        let filtData2 = [];
        filtData2 = priceCatagory?.filter((item) => item?.cost >= "₹ 20,000" && item?.cost <= price);
        dispatch(packfilterAction(filtData2));
    }
    const handleClick3 = (price) => {
        let filtData3 = [];
        filtData3 = priceCatagory?.filter((item) => item?.cost >= "₹ 30,000" && item?.cost <= price);
        dispatch(packfilterAction(filtData3));
    }
    const handleClick4 = (price) => {
        let filtData4 = [];
        filtData4 = priceCatagory?.filter((item) => item?.cost >= "₹ 40,000" && item?.cost <= price);
        dispatch(packfilterAction(filtData4));
    }

    return (
        <>
            <h5 className="text-uppercase mb-4" style={{ paddingLeft: "70px" }}>Filter By Price</h5>
            <div className="d-flex flex-wrap m-n1" style={{ paddingLeft: "50px" }}>
                <ul style={{listStyle:"none"}}>
                    <li><button onClick={() => dispatch(packfilterAction(priceCatagory))} className='btn btn-light m-1' style={{ "font-size": "20px" }}>All Package</button></li>
                    <li> <button onClick={() => handleClick1("₹ 20,000")} className='btn btn-light m-1' style={{ "font-size": "17px" }}>₹10,000 - ₹20,000 </button></li>
                    <li><button onClick={() => handleClick2("₹ 30,000")} className='btn btn-light m-1' style={{ "font-size": "17px" }}>₹20,000 - ₹30,000 </button></li>
                    <li><button onClick={() => handleClick3("₹ 40,000")} className='btn btn-light m-1' style={{ "font-size": "17px" }}>₹30,000 - ₹40,000 </button></li>
                    <li><button onClick={() => handleClick4("₹ 50,000")} className='btn btn-light m-1' style={{ "font-size": "17px" }}>₹40,000 - ₹50,000 </button></li>
                </ul>
            </div>
        </>
    )
}

export default PackagePriceCategory