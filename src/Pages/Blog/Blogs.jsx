import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Apifetch } from '../../redux/Slice/BlogSlice';
import { Link } from 'react-router-dom';
import BlogCategory from './BlogCategory';
import BlogRecentPosts from './BlogRecentPosts';
import BlogTags from './BlogTags';
import BlogSearch from './BlogSearch';
import { Vortex } from 'react-loader-spinner'
import './Blogs.css'
import Navbar from '../../Components/Common/Navbar';
import Footer from '../../Components/Common/Footer';




const Blogs = () => {
    const { post } = useSelector((state) => state?.blog);
    const [visible, setVisible] = useState(4);
    const [totaldata, setTotaldata] = useState(12);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(Apifetch())
    }, [dispatch])


    const showMore = () => {
        setVisible((prevValue) => prevValue + 4);
    }

    return (
        <>
        <Navbar/>
        <div style={{ background: 'url(https://wallpaper.dog/large/10807522.jpg)' }}>
            <div class="container-fluid page-header" style={{ height: '400px' }}>
                <div class="container">
                    <div class="d-flex flex-column align-items-center justify-content-center" >
                        <h3 class="display-4 text-white text-uppercase" style={{ marginTop: "120px" }}>Blog</h3>
                        <div class="d-inline-flex text-white">
                            <p class="m-0 text-uppercase"><Link class="text-white" to="/">Home</Link></p>
                            <i class="fa fa-angle-double-right pt-1 px-3"></i>
                            <p class="m-0 text-uppercase">Blog</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row pb-3">
                            
                                {
                                    post?.slice(0, visible)?.map((p, k) => {
                                        return (
                                            <>
                                                <div className="col-md-6 mb-4 pb-2">
                                                    <div className="blog-item">
                                                        <div className="position-relative">
                                                            <img class="img-fluid w-100" src={p.image} alt="" style={{ height: "230px" }} />
                                                            <div className="blog-date">
                                                                <small className="text-white text-uppercase">{p.date}</small>
                                                            </div>
                                                        </div>
                                                        <div className="bg-white p-4">
                                                            <div className="d-flex mb-2">
                                                                <p>{p.body}</p>
                                                            </div>
                                                            <h5> <Link className="btn btn-outline-success " style={{marginLeft:"100px"}} to={`/blogdet/${p?.id}`}>Details</Link></h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                                {
                                    (totaldata !== visible) ? (
                                        <>
                                            <span style={{marginLeft:"120px"}} onClick={showMore}>   <Vortex
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
                        </div>


                        <div className="col-lg-4 mt-5 mt-lg-0">
                            


                            {/* <!-- Search Form --> */}
                            <div className="mb-5" style={{ paddingLeft: "80px" }}>
                                <BlogSearch />
                            </div>


                            {/* <!-- Category List --> */}
                            <div className="mb-5" style={{ paddingLeft: "80px" }}>
                                <BlogCategory />
                            </div>

                            {/* <!-- Recent Post --> */}
                            <div className="mb-5" style={{ paddingLeft: "80px" }}>
                                <BlogRecentPosts />
                            </div>


                            {/* <!-- Tag Cloud --> */}
                            <div className="mb-5" style={{ paddingLeft: "80px" }}>
                                <BlogTags />
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

export default Blogs