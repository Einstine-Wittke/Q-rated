import React from 'react'
import { NavLink } from 'react-router-dom'

function Card(props) {
    return (
        <>
            <div className='col-md-4 col-10 mx-auto'>
                <div className="card" >
                    <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                    <div className="card-body text-center">
                        <h5 className="card-title">{props.title}</h5>
                        <NavLink to="/service/web-dev" className="badge bg-secondary">Explore More</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card