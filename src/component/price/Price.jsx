import React from 'react'
import PriceCard from './PriceCard'
import Back from '../common/back/Back'
import './price.css'

const Price = () => {
    return (
        <>
            <Back title='Choose The Right Plan' />
            <section className='price padding'>
                <div className='container grid'>
                    <PriceCard/>
                </div>
            </section>
        </>
    )
}

export default Price
