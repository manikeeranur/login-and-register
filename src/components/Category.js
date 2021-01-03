import React from "react";
import "./Category.css";
import location from "../images/maps-and-flags.svg";
import money from "../images/money.svg";

export default function Category(props) {
  return (
    <div className='Rectangle-81'>
      <h2 className='Executive-Chefs'>{props.name}</h2>
      <p className='Hotel-Name-will-Come-Here '>Hotel Name Will Come Here</p>
      <div className='Rectangle-85'>
        <hr />
      </div>
      <div className='location'>
        <img src={location} alt='' />
        <p className='Bengaluru'>Bengalure</p>
      </div>
      <div className='money'>
        <img src={money} alt='' />
        <p className='Rs-20000-Month '>Rs.20,000 / Month</p>
      </div>

      <a href='#' className='More-Info'>
        More Info
      </a>
      <span className='Posted-2-Days-Ago'>Posted 2 Days Ago </span>

      <button className='Rectangle-86'>
        <a className='Apply-Now'>Apply Now</a>
      </button>
    </div>
  );
}
