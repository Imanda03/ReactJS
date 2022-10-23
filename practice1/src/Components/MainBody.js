import React from 'react'
import "../App.css"

const MainBody = () => {
  return (
    <main id='main' >
        <h1 className='main-h1'>Fun Facts About Reacts</h1>
        <ul className='main-ul'>
            <li className='li'>Was first release in 2003</li>
            <li className='li'>Was originally created by Jordan Waggle</li>
            <li className='li'>Has well over 100K starts on Github</li>
            <li className='li'>Is maintained by facebook</li>
            <li className='li'>Powers thousands of enterprise apps, including monile apps</li>
        </ul>
    </main>
  )
}

export default MainBody