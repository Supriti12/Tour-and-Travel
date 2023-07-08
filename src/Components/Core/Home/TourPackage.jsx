import React,{ useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { tourdata } from '../../../redux/Slice/TourPackageSlice';
import { Link, useNavigate } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const TourPackage = () => {
  const { pack } = useSelector((state) => state?.tour)
  const [page,setPage]=useState(1)
    const dispatch = useDispatch();
    const navigate=useNavigate()
    useEffect(() => {
        dispatch(tourdata())
    }, [dispatch])
    //console.log(pack);
    const handleSubmit=()=>{
        navigate('/booking')
    }
    // const handleClick=(selectedpage)=>{
    //     if(selectedpage >=1 && selectedpage <= pack?.length/3 && selectedpage !== page)
    //     setPage(selectedpage)
    // }
  return (
    <>
    <div>
    <div className="container-fluid py-5">
                <div className="container pt-5 pb-3">
                    <div className="text-center mb-3 pb-3">
                    <Link className="text-primary text-uppercase" to="/tour">Packages</Link>
                        <h1>Perfect Tour Packages</h1>
                    </div>
                    <OwlCarousel className='owl-theme' center={true} margin={10} dots={true} loop={true} autoplay={true} smartSpeed={1000}>
                        {
                            pack?.map((p, k) => {
                                return (
                                    <>
                                        <div className="text-center pb-4" style={{ padding: "10px" }}>
                                            <div className="package-item bg-white mb-2">
                                                <img class="img-fluid" src={p.image} alt="" style={{ height: "210px" }} />
                                                <div className="p-4">
                                                    <div className="d-flex justify-content-between mb-3">
                                                        <small className="m-0"><i class="fa fa-map-marker-alt text-primary mr-2"></i>{p.location}</small>
                                                        <small className="m-0"><i class="fa fa-calendar-alt text-primary mr-2"></i>{p.duration}</small>
                                                        <small className="m-0"><i class="fa fa-user text-primary mr-2"></i>{p.person}</small>
                                                    </div>
                                                    <div>
                                                        <Link className="h5 text-decoration-none" to="">{p.name}</Link>
                                                    </div>
                                                    <div>
                                                        <h6 className="m-0">{p.cost}</h6>
                                                    </div>

                                                    <div className="border-top mt-4 pt-4">
                                                        <div className="d-flex justify-content-between">
                                                            <h6 className="m-0"><><Link className="btn btn-outline-success mt-0" to={`/tourdet/${p?.id}`}>Details</Link></></h6>
                                                            <h6 className="m-0"><Link className="btn btn-outline-success mt-0" onClick={handleSubmit} to="/booking">Book Now</Link></h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                          {/* {
                            pack?.length>0 && <div style={{display:"flex",justifyContent:"center",marginLeft:"300px"}}>
                            <nav aria-label="Page navigation example">
                      <ul class="pagination">
                        <li class="page-item" ><a class="page-link" style={{margin:"10px",cursor:"pointer"}} href="#"><span className={page>1 ? "": "pagination_disable"} onClick={()=>handleClick(page-1)} >Previous</span></a></li>
                        {
                            [...Array(pack?.length / 3)].map((_,i)=>{
                                return <span className={page=== i+1 ?"pagination_selected" : ""} onClick={()=>handleClick(i+1)} 
                                 key={i}>{i+1}</span>
                            })
                        }
                        <li class="page-item"><a class="page-link" style={{margin:"10px",cursor:"pointer"}} href="#"><span className={page<pack.length/3 ?"" : "pagination_disable"}  onClick={()=>handleClick(page+1)} >Next</span></a></li>
                      </ul>
                    </nav>
                            </div>
                    
                         } */}

                    </OwlCarousel>
                </div>
            </div>
    </div>
    </>
  )
}

export default TourPackage