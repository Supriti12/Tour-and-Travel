import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { desTdata,  } from "../../redux/Slice/DestinationSlice";
import { Link } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Navbar from "../../Components/Common/Navbar";
import Footer from "../../Components/Common/Footer";


const Destination = () => {

  const [page,setPage]=useState(1)
  const data = useSelector((state) => {
    return state?.dest?.desAllData;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(desTdata());
  }, []);
  const handleClick=(selectedpage)=>{
    if(selectedpage >=1 && selectedpage <= data?.length/3 && selectedpage !== page)
    setPage(selectedpage)
}
  
  return (
    <>
    
      <div className="container-fluid py-5" >
        <div className="container pt-5 pb-3">
          <div className="text-center mb-3 pb-3">
            <h6 className="text-primary text-uppercase">Destination</h6>
            <h1>Explore Top Destination</h1>
          </div>
          <div className="row">
          
            {
              data?.slice(page*3-3,page*3).map((e) => {
                return (
                  <>
                    <div className="col-lg-4 col-md-6 mb-4">
                      <div className="destination-item position-relative overflow-hidden mb-2">
                        <img
                          className="img-fluid"
                          src={e.img}
                          alt=""
                          style={{height:"300px",}}/>
                        <Link
                          className="destination-overlay text-white text-decoration-none"
                          to={`/corepackage/${e.destination}`}
                        >
                          <h5 className="text-white">{e.destination}</h5>
                          <span>3 Cities</span>
                        </Link>
                      </div>
                    </div>
                  </>
                );
              })}
              {
                data?.length>0 && <div style={{}}>
                <nav aria-label="Page navigation example">
          <ul class="pagination1" style={{listStyleType:"none"}}>
            <li class="page-item" ><a class="page-link" style={{margin:"10px",cursor:"pointer"}} ><span className={page>1 ? "": "pagination_disable"} onClick={()=>handleClick(page-1)} >Previous</span></a></li>
            {
                [...Array(data?.length / 3)].map((_,i)=>{
                    return <span className={page=== i+1 ?"pagination_selected" : ""} onClick={()=>handleClick(i+1)} 
                     key={i}>{(i+1)}</span>
                })
            }
            <li  style={{margin:"10px",cursor:"pointer"}}>.....more</li>
            <li class="page-item"><a class="page-link" style={{margin:"10px",cursor:"pointer"}} ><span className={page<data.length/3 ?"" : "pagination_disable"}  onClick={()=>handleClick(page+1)} >Next</span></a></li>
          </ul>
        </nav>
                </div>
        
             }


           
            
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Destination;
