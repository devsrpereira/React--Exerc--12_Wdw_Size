import React from 'react'

export default function Window_Tracker(){

    const[windowWidth, setWindowWidth] = React.useState(window.innerWidth)


    React.useEffect(() =>{
        function watchWidth(){
            console.log('Setting up..')
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', watchWidth)
        
        return function(){
            console.log('Cleaning up...')
            window.removeEventListener('resize', watchWidth)
        }
    },[])


    return(
        <h1 className='tracker_title'>Window width: {windowWidth}px</h1>
    )
}