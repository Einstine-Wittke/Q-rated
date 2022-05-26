import React from 'react'
import dev from "../images/dev.jpg"
import { NavLink } from "react-router-dom"
function CommonCompo(props) {
    return (
        <>
            <section id='header' className='d-flex align-items-center mt-0'>
                <div className="container-fluid ">
                    <div className="row">
                        <div className='col-10 mx-auto '>
                            <div className='row '>
                                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                                    <h1>{props.desc} <strong className='brand_name'>&nbsp;Q-Rated</strong></h1>
                                    <div className='mt-3'>
                                        <NavLink to={props.visit} className='btn-get-started'>{props.btnname}</NavLink>
                                    </div>
                                </div>
                                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                                    <img src={props.imgsrc} alt="home image" className='img_animated' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CommonCompo