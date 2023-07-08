import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { tourdata } from '../../redux/Slice/TourPackageSlice';
import { Link, useNavigate } from 'react-router-dom';
import PackagePriceCategory from './PackagePriceCategory';
import PackageDayCategory from './PackageDayCategory';
import { Vortex } from 'react-loader-spinner'
import Navbar from '../../Components/Common/Navbar';
import Footer from '../../Components/Common/Footer';

const Package = () => {
    const { pack } = useSelector((state) => state?.tour)
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const [visible, setVisible] = useState(6);
    const [totaldata, setTotaldata] = useState(12);

    useEffect(() => {
        dispatch(tourdata())
    }, [dispatch])
    //console.log(pack);
    const handleSubmit=()=>{
      navigate('/booking')
    }

    const showMore = () => {
        setVisible((prevValue) => prevValue + 3);
    }
   
    return (
        <>
        <Navbar/>
        <div style={{ background: 'url(https://wallpaper.dog/large/10807522.jpg)' }}>
            <div class="container-fluid page-header" style={{ height: '400px' }}>
                <div className="container">
                    <div className="d-flex flex-column align-items-center justify-content-center" >
                        <h3 className="display-4 text-white text-uppercase" style={{ marginTop: "120px" }}>Tour Packages</h3>
                        <div className="d-inline-flex text-white">
                            <p className="m-0 text-uppercase"><Link class="text-white" to="/">Home</Link></p>
                            <i className="fa fa-angle-double-right pt-1 px-3"></i>
                            <p className="m-0 text-uppercase">Tour Packages</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5" >
                <div className="container pt-5 pb-2" >
                    <div className="text-center mb-3 pb-3" style={{marginRight:"300px"}}>
                        <h6 className="text-primary text-uppercase">Packages</h6>
                        <h1>Perfect Tour Packages</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="row pb-2">
                                {
                                    pack?.slice(0, visible)?.map((p, k) => {
                                        return (
                                            <>
                                                <div className="col-lg-4 col-md-6 mb-4" >
                                                    <div className="package-item bg-white mb-2">
                                                        <img class="img-fluid" src={p.image} alt="" style={{ height: "170px",width:"600px" }} />
                                                        <div className="p-4">
                                                            <div className="d-flex justify-content-between mb-3">
                                                                <small className="m-0"><i class="fa fa-map-marker-alt text-primary mr-2"></i>{p.location}</small>
                                                                <small className="m-0"><i class="fa fa-calendar-alt text-primary mr-2"></i>{p.duration}</small>
                                                                <small className="m-0"><i class="fa fa-user text-primary mr-2"></i>{p.person}</small>
                                                            </div>
                                                            <div>
                                                              <h6>{p.name}</h6> 
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
                            </div>
                            {
                                    (totaldata !== visible) ? (
                                        <>
                                            <span style={{marginLeft:"100px"}} className='btn' onClick={showMore}>   <Vortex
                                                visible={true}
                                                height="50"
                                                width="600"
                                                ariaLabel="vortex-loading"
                                                align='center'
                                                wrapperStyle={{}}
                                                wrapperclassName="vortex-wrapper"
                                                colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                                            /></span>
                                        </>
                                    ) : (
                                        <>
                                            
                                        </>
                                    )
                                }
                        </div>
                        <div className="col-lg-3">
                            <PackagePriceCategory />
                            <br/>
                            <PackageDayCategory/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<Footer/>
        </>
    )
}

export default Package