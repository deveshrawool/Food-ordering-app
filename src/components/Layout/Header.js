import React from 'react'
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
  return (
    <>
        <header className={classes.header}>
            <h1>A-1 Meals</h1>
            <HeaderCartButton onShow={props.onShow} />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='Image with meals served on table' />
        </div>
    </>
  )
}

export default Header