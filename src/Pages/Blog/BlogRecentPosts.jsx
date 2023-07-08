import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const BlogRecentPosts = () => {
    const { latestData } = useSelector(state => state?.blog);
    const filterData = latestData?.filter((e) => {
        return (
            e.date >= "18-06-2023"
        )
    })
    console.log(filterData);

    return (
        <>
            <div className="mb-5">
                <h5 className="text-uppercase mb-4" style={{marginRight:"140px"}} >Recent Post</h5>
                {
                    filterData && filterData?.slice(0, 3)?.map((item) =>
                        <Link className="d-flex align-items-center text-decoration-none bg-white mb-3" to="">

                            <img className="img-fluid" src={item.image} style={{ height: "70px" }} alt="" />
                            <div className="pl-3" key={item.id}>
                                <h6 className="m-1"><Link to={`/blogdet/${item.id}`}>{item.title}</Link></h6>
                                <time dateTime="15-06-2023">{item.date}</time>
                            </div>
                        </Link>
                    )
                }
            </div>
        </>
    )
}

export default BlogRecentPosts
