import React from 'react'
import dev from "../images/dev.jpg"
import { NavLink } from "react-router-dom"
import CommonCompo from './CommonCompo'
function Home() {
    return (
        <>
            <CommonCompo
                desc="Grow your business with"
                imgsrc={dev}
                visit="/service"
                btnname="Get Started"
            />
        </>
    )
}

export default Home