import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Apifetch } from '../../../redux/Slice/BlogSlice';
import { Link } from 'react-router-dom';


const Blog = () => {
    const { post } = useSelector((state) => state?.blog);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(Apifetch())
    }, [dispatch])

    return (
        <>
            <div className="container-fluid py-5">
                <div className="container py-5">
                <div className="text-center mb-3 pb-3">
                    <Link className="text-primary text-uppercase" to="/blog">Blogs</Link>
                        <h1>Latest Blog</h1>
                    </div>
                    <OwlCarousel className='owl-theme' center={true} margin={10} dots={true} loop={true} autoplay={true} smartSpeed={1000}>
                        {
                            post?.map((p, k) => {
                                return (
                                    <>
                                        <div className="text-center pb-4" style={{ padding: "10px" }}>
                                            <div className="package-item">
                                                <div className="position-relative">
                                                    <img class="img-fluid w-100" src={p.image} alt="" style={{ height: "200px", width: "200px" }} />
                                                    <div className="blog-date">
                                                        <small className="text-white text-uppercase">{p.date}</small>
                                                    </div>
                                                </div>
                                                <div className="bg-white p-4">
                                                    <div className="d-flex mb-2">
                                                        <p>{p.body}</p>
                                                    </div>
                                                    <h5> <Link className="w-100 btn btn-primary mt-2" to={`/blogdet/${p?.id}`}>Details</Link></h5>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </OwlCarousel>
                </div>
            </div>
        </>
    )
}

export default Blog