import React, { useContext } from 'react'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import CartContext from '../../../store/CartContext'
const MealItem = (props) => {

    const cartCtx = useContext(CartContext)
    const price =props.price.toFixed(2)
    const{name,description}= props

    const addItemToCartHandler=(amount)=>{
        cartCtx.addItem(
            {
                id:props.id,
                name:props.name,
                amount,
                price:props.price
            }
        )
    }
  return (
    <li className={classes.meal}>
        <div >
            <h3>{name}</h3>
            <div className={classes.description}>{description}</div>
            <div className={classes.price}>&#x20B9; {price}</div>
        </div>
        <div>
            <MealItemForm onAddItemToCart={addItemToCartHandler} />
        </div>
    </li>
  )
}

export default MealItem