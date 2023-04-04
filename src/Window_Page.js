import React from 'react'
import Window_Tracker from './Window_Tracker'

export default function Window_Page(){

    const [show, setShow] = React.useState([true])

    function toggleShow(){
         setShow(prevShow => !prevShow)
    }

    return(
        <section className='tracker_body'>
            <div className='tracker_page'>
                <button className='tracker_btn' onClick={toggleShow}>Toggle Window Tracker</button>
                {show && <Window_Tracker />}
            </div>
        </section>
    )
}