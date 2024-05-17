import React from 'react'
import "./hero.css"
import Title from '../../common/title/Title'

const Hero = () => {
    return (
        <>
            <section className='hero'>
                <div className='container'>
                    <div className='row'>
                        <Title subtitle='WELCOME TO ACADEMIA' title='Best online education'/>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, eaque. Voluptatum reiciendis expedita tempora nam similique. Error voluptatem inventore nisi?</p>
                        <div className='button'>
                            <button className='primary-btn' >
                                get started now<i className='fa fa-long-arrow-alt-right'></i>
                            </button>
                            <button>
                                view course <i className='fa fa-long-arrow-alt-right'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <div className='margin'></div>
        </>
    )
}

export default Hero
