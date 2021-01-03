import React from "react";
import Category from "./Category";
import "../components/Category.css";
export default function Selectlevel() {
  return (
    <div className='categoryAdd'>
      <div className='Home-Select-Category-Level'>
        <ul>
          <li>Home /</li>
          <li>Select Category /</li>
          <li>level</li>
        </ul>
      </div>
      <h2 className='Select-Level'>Select Level</h2>
      <div className='category'>
        <Category name='Executive Chefs' />
        <Category name='Sous Chef' color='white' />
        <Category name='Chef De Partie' />
        <Category name='Commis' />
        <Category name='Executive Chefs' />
        <Category name='Sous Chef' />
        <Category name='Chef De Partie' />
        <Category name='Commis' />
      </div>
    </div>
  );
}
