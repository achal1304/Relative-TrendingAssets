import React from 'react'
import '../assets/styles/Card.css'


function Card({currency, price, percentage, tvl, imageIcon, pupularPairs}) {

    const color = (percentage > 0) ? '#00FFA3' : '#FF4D4D'

    return (
        <div className='icon_card_wrapper'>
            <div className='icon_wrapper'>
                <div></div>
                <img src={imageIcon} />
            </div>
            <div className='card_wrapper'>
                <div className='content_wrapper'>
                    <h4>{currency}</h4>
                    <div className='amount_container'>
                        <span>{price}</span>
                        <span style={{color: color}}>{percentage}%</span>
                    </div>
                    <h4>Price</h4>
                    <div className='amount_container'>{tvl}</div>
                    <h4>TVL</h4>
                    <div className='amount_container_popularpoints'>
                        {pupularPairs.map((image, index) =>{
                            return <img key={index} src={image} className='popular_points_images'/>
                        })}
                    </div>
                    <h4>Popular Points</h4>
                </div>
            </div>
        </div>
    )
}

export default Card