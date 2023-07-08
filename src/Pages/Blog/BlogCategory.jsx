import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Apifetch, filteredAction } from '../../redux/Slice/BlogSlice';

const BlogCategory = () => {
    const { post, filteredData, catagoryData } = useSelector((state) => state?.blog)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(Apifetch())
    }, [dispatch])

    const handleClick = (catagory) => {
        let filtData = [];
        filtData = catagoryData?.filter((item) => item?.catagories === catagory);
        dispatch(filteredAction(filtData))
    }

    const CatagoryNumber = (catagory) => {
        let filtData = [];
        filtData = catagoryData?.filter((item) => item?.catagories === catagory);
        return filtData?.length
    }

    return (
        <>
            <h5 className="text-uppercase mb-4" style={{marginRight:"145px"}}>Categories</h5>
            <div className="d-flex flex-wrap m-n1">
                <>
                <ul style={{listStyle:"none"}}>
                   <li> <button onClick={() => dispatch(filteredAction(catagoryData))} className='btn btn-light m-1' style={{ "font-size": "18px" }}>All Catagory <span> ({post?.length}) </span></button></li>
                   <li> <button onClick={() => handleClick("North India")} className='btn btn-light m-1' style={{ "font-size": "15px" }}>North India <span>({CatagoryNumber('North India')})</span></button></li>
                   <li> <button onClick={() => handleClick("South India")} className='btn btn-light m-1' style={{ "font-size": "15px" }}>South India<span>({CatagoryNumber('South India')})</span></button></li>
                   <li> <button onClick={() => handleClick("East India")} className='btn btn-light m-1' style={{ "font-size": "15px" }}>East India<span>({CatagoryNumber('East India')})</span></button></li>
                    <li><button onClick={() => handleClick("West India")} className='btn btn-light m-1' style={{ "font-size": "15px" }}>West India<span>({CatagoryNumber('West India')})</span></button></li>
                    <li><button onClick={() => handleClick("Central India")} className='btn btn-light m-1' style={{ "font-size": "15px" }}>Central India<span>({CatagoryNumber('Central India')})</span></button></li>
                   <li> <button onClick={() => handleClick("North-East India")} className='btn btn-light m-1' style={{ "font-size": "15px" }}>North-East India<span>({CatagoryNumber('North-East India')})</span></button></li>
                    </ul>
                </>
            </div>
        </>
    )
}

export default BlogCategory