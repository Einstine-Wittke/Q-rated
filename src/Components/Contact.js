import React, { useState } from 'react'
import Privacy from "./Sub Component/Privacy"
function Contact() {

  const [data, setData] = useState({
    fullname: '',
    phone: '',
    email: '',
    msg: ''
  })

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }


  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `Form Submitted`
    )
  }

  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'>Contact Us</h1>
      </div>
      <div className='container contact_div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Full Name<sup>*</sup></label>
                <input required={true} type="text" className="form-control" id="exampleFormControlInput1" name='fullname' value={data.fullname} onChange={InputEvent} placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Phone no.<sup>*</sup></label>
                <input required={true} type="number" className="form-control" id="exampleFormControlInput1" name='phone' value={data.phone} onChange={InputEvent} placeholder="Enter your mobile no." />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address<sup>*</sup></label>
                <input required={true} type="email" className="form-control" id="exampleFormControlInput1" name='email' value={data.email} onChange={InputEvent} placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label" >Message<sup>*</sup> </label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='msg' value={data.msg} onChange={InputEvent}></textarea>
              </div>
              <div className="col-12 text-align-center text-center ">
                <button className="btn btn-outline-primary btn-sm" type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <Privacy/> */}
    </>
  )
}

export default Contact