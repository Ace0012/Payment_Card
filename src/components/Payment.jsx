import React from 'react'
import styles from '../styles/payment.css'
import Apple from './Apple.jsx'
import Amazon from './Amazon.jsx'


const Payment = () => {
const data = {
date:"17/03/2020",
subHeading1:"Case Study",
Heading: "Amazon Gift Pay",
subHeading2:"Desktop - Mobile",



};
const data1 = {
date:"12/03/2022",
subHeading1:"Case Study",
Heading: "Apple Gift Payment",
subHeading2:"Desktop - Mobile",



};

let logo= <i class="fa-brands fa-amazon"></i>
let logo1 = <i class="fa-brands fa-apple"></i>
let righ = <i class="fa-solid fa-arrow-right"></i>

  return (
    <div className='container'>
<Amazon logo = {logo} heading = {data.Heading} date = {data.date} sub1 = {data.subHeading1} sub2 = {data.subHeading2}  r = {righ}/>
<Apple logo = {logo1} heading = {data1.Heading} date = {data1.date} sub1 = {data1.subHeading1} sub2 = {data1.subHeading2} r = {righ}/>




    </div>

  )
}

export default Payment

