"use client"
import React from 'react'
// import {useCartContext} from "@/context/CartContext"
import { useFormStatus } from "react-dom";


export const AddToCartButton = () => {
  
    const formStatus = useFormStatus();
	
	// const addToCart=async ()=>{
	// 	editProduct(productName, "increase")
	// }
  
    return (
			<button disabled={formStatus.pending} type="submit" data-testid="add-to-cart-button">
				Add to cart
			</button>
		);
}