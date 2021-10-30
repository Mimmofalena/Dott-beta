import React from 'react'
import classes from '../Carousel/Carousel.module.css'

const CarouselItem = (props) => {


    

    return (
      
            <img className={classes.imgClass} src={props.src} alt={props.alt}  />
        
    )
}

export default CarouselItem
