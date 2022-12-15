import React from 'react'
import Rating from './rating';
import { useCart } from '../../Context/context';

const Filters = () => {
    
    const { filterState : { bySort, byStock, byFastDelivery, byRating, bySearch }, filterDispatch } = useCart();
  console.log("bySort", bySort,  "byRating",byRating, "byStock",byStock, "byFastDelivery", byFastDelivery, "byRating",byRating, bySearch);
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
                onChange={ () => { filterDispatch({type: "SORT_BY_PRICE", payload: "lowToHigh" }) } }
                checked = { bySort ===  "lowToHigh" ? true : false }
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
                onChange={ () => { filterDispatch({ type: "SORT_BY_PRICE", payload: "highToLow" }) } }
                checked = { bySort ==="highToLow" ? true : false }
            >
            </input>
            <label>Descending</label>
        </span>

        {/* <span>
            <input
                inline
                label="include-out-of-stock"
                name="group1"
                type="checkbox"
                id="inline-3"
                onChange={ () => { filterDispatch({ type:"FILTER_BY_STOCK", }) } }
                checked = {byStock}
            >
            </input>
            <label>Include out of stock</label>
        </span> */}

        {/* <span>
            <input
                inline
                label="fast-delivery"
                name="group1"
                type="checkbox"
                id="inline-4"
                onChange={ () => { filterDispatch({type:"FILTER_BY_FAST_DELIVERY", }) } }
                checked = {byFastDelivery}
            >
            </input> 
            <label>Fast Delivery</label>
        </span> */}

        <span>
        <label>Rating</label>
            <Rating rating = {byRating} 
            onClick = { (i) => filterDispatch({
                type: "FILTER_BY_RATING",
                payload: i+1
            })} style ={ { cursor:"pointer" } } 
            />
        </span>
    
    <button  onClick={()=>filterDispatch({type:"CLEAR_FILTERS", })}
    className = "card-button filter-button" style = {{cursor : "pointer"}}>Clear Filters</button>


</div>
  );
};

export default Filters;