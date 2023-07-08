import React, { useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTest, test_data } from '../../../redux/Slice/TestimonialSlice';

const Tesmonials = () => {
    const dispatch = useDispatch();
    const { test_data } = useSelector((state) => state?.test);
    useEffect(() => {
        dispatch(fetchTest())
    }, [dispatch])
    console.log(test_data);
    return (
        <>
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mb-3 pb-3">
                        <h6 className="text-primary text-uppercase" style={{ letterSpacing: 5 }}>
                            Testimonial
                        </h6>
                        <h1>What Say Our Clients</h1>
                    </div>
                    <OwlCarousel className='owl-theme' center={true}  margin={20} dots={true} loop={true} autoplay={true} smartSpeed={1500}>


                        {
                            test_data && test_data?.map((info) => {
                                return (
                                    <>
                                   
                                        <div className="text-center pb-4">
                                            <img
                                                className="img-fluid mx-auto"
                                                src={info.image}
                                                style={{ width: 100, height: 100 }}
                                            />
                                            <div className="testimonial-text bg-white p-4 mt-n5">
                                                <p className="mt-5">
                                                   {info.speech}
                                                </p>
                                                <h5 className="text-truncate">{info.name}</h5>
                                                <span>{info.role}</span>
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

export default Tesmonials

