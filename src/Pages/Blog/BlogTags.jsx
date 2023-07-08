import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Apifetch, filteredAction } from '../../redux/Slice/BlogSlice';

const BlogTags = () => {
  const { tagData } = useSelector((state) => state?.blog)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Apifetch())
  }, [dispatch])

  const handleClick = (tag) => {
    let filtData = [];
    filtData = tagData?.filter((item) => item?.tags === tag);
    dispatch(filteredAction(filtData))
  }

  return (
    <>
      <h5 className="text-uppercase mb-4" style={{ marginRight: "145px" }} >Tag Cloud</h5>
      <div className="d-flex flex-wrap m-n1">
        <ul style={{ listStyle: "none" }}>
          <><button onClick={() => dispatch(filteredAction(tagData))} className='btn btn-light m-1' style={{ "font-size": "18px" }}>All tags</button></>
          <><button onClick={() => handleClick("Memorial Hall")} className='btn btn-light m-1' style={{ "font-size": "15px" }}>Memorial Hall </button></>
          <><button onClick={() => handleClick("Lake")} className='btn btn-light m-1' style={{ "font-size": "15px" }}>Lake</button></>
          <><button onClick={() => handleClick("Architectural Ruins")} className='btn btn-light m-1' style={{ "font-size": "15px" }}>Architectural Ruins</button></>
          <><button onClick={() => handleClick("Beach")} className='btn btn-light m-1' style={{ "font-size": "15px" }}>Beach</button></>
          <><button onClick={() => handleClick("Tea Garden")} className='btn btn-light m-1' style={{ "font-size": "15px" }}>Tea Garden</button></>
          <><button onClick={() => handleClick("Temple")} className='btn btn-light m-1' style={{ "font-size": "15px" }}>Temple</button></>
          <><button onClick={() => handleClick("Palace")} className='btn btn-light m-1' style={{ "font-size": "15px" }}>Palace</button></>
        </ul>
      </div>
    </>
  )
}

export default BlogTags