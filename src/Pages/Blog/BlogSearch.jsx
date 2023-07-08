import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Apifetch, filteredAction } from '../../redux/Slice/BlogSlice';

const BlogSearch = () => {
    const { post } = useSelector((state) => state?.blog)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(Apifetch())
    }, [dispatch])


    const handleChange = (e) => {
        let filtData = [];
        filtData = post.filter((item) => {
            const lowerData = item.title.toLowerCase();
            if (e.target.value === '') {
                return true;
            } else {
                return lowerData.includes(e.target.value);
            }
        });

        dispatch(filteredAction(filtData))
    }

    return (
        <>
            <div className="md-5">
                <div className="input-group">
                    <form action="">
                        <div className="input-group-append">
                            <input onChange={handleChange} type="text" className="form-control p-4" placeHolder="Enter your Keyword" />
                            <span className="input-group-text bg-primary border-primary text-white"><i className="fa fa-search"></i></span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default BlogSearch