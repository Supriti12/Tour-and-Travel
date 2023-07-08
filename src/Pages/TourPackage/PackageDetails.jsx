import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../../Components/Common/Navbar';
import Footer from '../../Components/Common/Footer';

const PackageDetails = () => {
  const [moreData, setMoreData] = useState([]);
  const { id } = useParams();

  const getMoreData = async () => {
    const res = await axios.get(`http://127.0.0.1:3009/tourPackage/${id}`);
    setMoreData(await res?.data);
  }

  useEffect(() => {
    getMoreData();
  }, []);
  return (
    <>
    <Navbar/>
     <div style={{ background: 'url(https://wallpaper.dog/large/10807522.jpg)' }}>
      <div class="container-fluid page-header" style={{ height: '400px' }}>
        <div className="container">
          <div className="d-flex flex-column align-items-center justify-content-center" >
            <h3 className="display-4 text-white text-uppercase" style={{ marginTop: "120px" }}>Tour Package Details</h3>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase"><Link class="text-white" to="/">Home</Link></p>
              <i className="fa fa-angle-double-right pt-1 px-3"></i>
              <p className="m-0 text-uppercase"><Link class="text-white" to="/tour">Tour Packages</Link></p>
            </div>
          </div>
        </div>
      </div>
      <div className="about" style={{paddingTop:"70px"}}>
        <div className="container_width">
          <div className="row d_flex grig">
            <div className="col-md-6">
              <div className="about_img">
                <figure><img src={moreData.image} alt=" " style={{ height: "350px" }} />
                </figure>
              </div>
            </div>
            <div className="col-md-6 order">
              <div className="titlepage text_align_left">
                <h2>{moreData.name}</h2>
                <div className="p-4">
                  <div className="d-flex justify-content-between mb-3">
                    <small className="m-0"><i class="fa fa-map-marker-alt text-primary mr-2"></i>{moreData.location}</small>
                    <small className="m-0"><i class="fa fa-calendar-alt text-primary mr-2"></i>{moreData.duration}</small>
                    <small className="m-0"><i class="fa fa-user text-primary mr-2"></i>{moreData.person}</small>
                  </div>

                  <p>{moreData.Subtitle}</p>
                  <h7>Price : {moreData.cost}</h7>
                  </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </>
  )
}

export default PackageDetails