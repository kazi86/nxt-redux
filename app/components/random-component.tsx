"use client"

import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {buyCake, buyIceCream, store} from "@/app/redux/store";

 function RandomComponent (){

     const dispatch = useDispatch();

     // to reflect state change in ui
     const numOfCakes = useSelector(state =>state.cake?.numOfCakes);
     const numOfIceCream = useSelector(state=>state.iceCream?.numOfIceCreams);

     useEffect(()=>{

         const subscription = store.subscribe(()=>{
             console.log("State updated" , store.getState());
         });

         return ()=>{subscription();}


     },[])

    return <>

        <div>

            <p>Number of Cakes: {numOfCakes}</p>

            <p>Number of Ice Creams: {numOfIceCream}</p>

            <button className="btn border border-red-500 me-5" onClick={()=>dispatch(buyCake())}>Buy Cake</button>

            <button  className="btn border border-green-500 ms-5" onClick={()=>dispatch(buyIceCream())}>Buy Ice Cream</button>

        </div>

    </>
 }

export default RandomComponent;
