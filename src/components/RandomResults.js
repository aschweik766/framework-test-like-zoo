import React, { useState } from 'react'

const RandomResults = (props) => {

    const FavComponent = props.favComponent

    if (!props.animals.length) {
        return <h2> No images found! </h2>
    }
    return (
        <div> {props.animals.map(image => (
            <div key={image.id} className='image-container '>
                <div class="row">
                     <div class="col-3">
                        <img className='random-animals-image' src={image.image_link} width='375' height='355' alt={image.name} />
                        <h4 style={{fontFamily: 'Rubik Moonrocks', fontSize: '40px'}}>{image.name}</h4>
                     </div>
                 </div>
                    <div 
                        onClick={() => props.handleFavClick(image)}
                        className='overlay d-flex align-items-center justify-content-center'>
                            <FavComponent />
                    </div>
                </div>
            ))}
        </div>
    )
    }

export default RandomResults;