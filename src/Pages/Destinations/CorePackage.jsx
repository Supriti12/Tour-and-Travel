import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { coredata } from "../../redux/Slice/CoreSlice";
import { Link, useParams } from "react-router-dom";
import { desdata } from "../../redux/Slice/DestinationSlice";
import Navbar from "../../Components/Common/Navbar";
import Footer from "../../Components/Common/Footer";

const CorePackage = () => {
    
  const {id} = useParams()
  const data = useSelector((state) => {
   console.log (state?.dest?.desfilterData)
   return (state?.dest?.desfilterData)
})
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(desdata(id));
  }, []);
  const handelClick =(data)=>{
    console.log(data);
    localStorage.setItem('LocationData',JSON.stringify(data))
  }
  // console.log(dtls);
  return (
    <>
    <Navbar/>
      <div className="container-fluid py-5">
        <div className="container pt-5 pb-3" >
          <div className="text-center mb-3 pb-3">
            <h6 className="text-primary text-uppercase">Packages</h6>
            <h1>Explore Top Packages</h1>
          </div>
          <div className="row">
            {data &&
              data.title?.map((ele) => {
                return (
                  <>
                    <div className="col-lg-4 col-md-6 mb-4" >
                      <div className="position-relative overflow-hidden mb-2">
                        <div className="blog-item">
                          <div className="position-relative">
                            <img className="img-fluid" src={ele.image} alt="" style={{height:"300px"}}/>
                            <div className="blog-date">
                              <h6 className="font-weight-bold mb-n1">{ele.date}</h6>
                              <small className="text-white text-uppercase">
                                {ele.month}
                              </small>
                            </div>
                          </div>
                          <div className="bg-white p-4 text-center">
                            <div className="d-flex mb-2 text-center">
                              <Link
                                className="text-primary text-uppercase text-center"
                                to=""
                              >
                                {ele.pack.slice(0,25)}
                              </Link>
                              
                              
                            </div>
                            
                            <div classNameName="d-flex justify-content-between">
                              <h6 classNameName="m-0">
                                <>
                                <button className="w-100 btn btn-dark mt-3" onClick={()=>{handelClick(ele.subtitle)}}><Link classNameName="text-white" to={`/corepackagedetails`}>
                                {/* <h5 class="text-white">{ele.destination}</h5> */}
                                    Details
                                  </Link></button>                               
                                
                                </>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    
                  </>
                );
              })}
                                <div>
                     
                    </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default CorePackage;
