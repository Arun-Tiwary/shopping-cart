import React from 'react'
import Rating from './rating';
import { useState } from 'react';

const Filters = () => {
    const[rating, setRating] = useState()
  return (
   
<div className="filters">
    <span className="title">Filter Products</span>
        <span>
            <input
                inline
                label="Ascending"
                name="group1"
                type="radio"
                id="inlin-1"
            >     
            </input>
            <label>Ascending</label>
        </span>

        <span>
            <input
                inline
                label="Descending"
                name="group1"
                type="radio"
                id="inline-2"
            >
            </input>
            <label>Descending</label>
        </span>

        <span>
            <input
                inline
                label="include-out-of-stock"
                name="group1"
                type="checkbox"
                id="inline-3"
            >
            </input>
            <label>Include out of stock</label>
        </span>

        <span>
            <input
                inline
                label="fast-delivery"
                name="group1"
                type="checkbox"
                id="inline-4"
            >
            </input>
            <label>Fast Delivery</label>
        </span>

        <span>
        <label>Rating</label>
            <Rating rating = {rating} 
            onClick = {(index)=>setRating(index + 1)} style ={{cursor:"pointer"}} 
            />
        </span>
    
    <button className = "card-button filter-button" style = {{cursor : "pointer"}}>Clear Filters</button>










</div>
  );
};

export default Filters;