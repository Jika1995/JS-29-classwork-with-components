import React from 'react';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import twitter from '../images/twitter.png'

const Footer = () => {
    return (
        <>
            <footer style={{backgroundColor: 'grey', width: '100%'}}>
                <div className='d-flex justify-content-between align-items-center py-4 flex-wrap' style={{margin: 'auto', width: '90%'}}>
                    <h1>Company Logo</h1>
                    <p>&copy; Company Name, 2023. All rights reserved.</p>
                    <div className='d-flex justify-content-between w-15'>
                        <img src={facebook} alt="error" width='30px' height='30px'/>
                        <img src={instagram} alt="error" width='30px' height='30px'/>
                        <img src={twitter} alt="error" width='30px' height='30px'/>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;