import React from 'react'
import './courses.css'
import { online } from '../../dummydata'
import Header from '../common/heading/Header'

const OnlineCourses = () => {
    return (
        <>
            <section className='online'>
                <div className='container'>
                    <Header subtitle='COURSES' title='Browse Our Online Courses' />
                    <div className='content grid3'>
                        {online.map((val) => (
                            <div className='box'>
                                <div className='img'>
                                    <img src={val.cover} />
                                    <img src={val.hoverCover} alt='gg' className='show' />
                                </div>
                                <h1>{val.courseName}</h1>
                                <span>{val.course}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default OnlineCourses
