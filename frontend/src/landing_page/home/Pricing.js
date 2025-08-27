import React from 'react'

function Pricing() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-3'>Unbeatable pricing</h1>
                    <p> We pioneered the concept of discount broking and price transparency in India .flat fees andno hidden chargees.</p>
                    <a href='#' className='' style={{ textDecoration: 'none' }}>
                        See pricing <i className="fa fa-arrow-right ms-2" aria-hidden="true"></i>
                    </a>
                </div>
                
                <div className='col-2'></div> {/* fixed 'cl-2' to 'col-2' */}
                <div className='col-6'> {/* fixed 'cl-6' to 'col-6' */}
                    <div className='row  text-center'>
                        <div className='col p-2 border'>
                            <h1>₹0</h1>
                            <p>Free equity delivery and direct mutual fund</p>
                        </div>
                        <div className='col p-2 border'>
                            <h1>₹20</h1>
                            <p>Interaday and F&O</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;
