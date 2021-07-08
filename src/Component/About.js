import React from 'react'
import {Link} from 'react-router-dom'

function About() {

    return (
        <div className='container text-center my-3'>
            <h1>About Page</h1>
            <div>
                <h3 className='pt-2'>Shaharuk Ahamad</h3>
                <h4 className='py-2'>Student Of DIU </h4>
                <h4 className='py-2'>shaharuk.ahamad.cse@gmail.com</h4>
                <Link target='_blank' className='btn btn-info pt-2' location='https://sonnet16.github.io/RESUME'>Learn More</Link>
            </div>
            
        </div>
    )
}

export default About