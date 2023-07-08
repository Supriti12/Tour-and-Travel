import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../../Components/Common/Navbar';
import Footer from '../../Components/Common/Footer';

const BlogDetails = () => {
    const [moreData, setMoreData] = useState([]);
    const { id } = useParams();

    const getMoreData = async () => {
        const res = await axios.get(`http://127.0.0.1:3009/blogdata/${id}`);
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
                            <h3 className="display-4 text-white text-uppercase" style={{ marginTop: "120px" }}>Blog Details</h3>
                            <div className="d-inline-flex text-white">
                                <p className="m-0 text-uppercase"><Link className="text-white" to="/">Home</Link></p>
                                <i className="fa fa-angle-double-right pt-1 px-3"></i>
                                <p className="m-0 text-uppercase"><Link className="text-white" to="/blog">Blogs</Link></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about" style={{paddingTop:"70px"}}>
                    <div className="container_width">
                        <div className="row d_flex grig">
                            <div className="col-md-6">
                                <div className="about_img">
                                    <figure><img src={moreData.image} alt=" " style={{ height: "400px" }} />
                                    </figure>
                                </div>
                            </div>
                            <div className="col-md-6 order">
                                <div className="titlepage text_align_left">
                                    <h2>{moreData.title}</h2>
                                    <p>Posted by {moreData.date}</p>
                                    <p>{moreData.body}</p>
                                    <p>{moreData.ReadMore}</p>

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

export default BlogDetails
