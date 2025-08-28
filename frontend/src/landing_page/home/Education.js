import React from 'react';

function Education() {
    return ( 
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-6'>
                    <img 
                        src='media/images/education.svg' 
                        alt='Education illustration' 
                        style={{width:"70%"}} 
                    />
                </div>
               
                <div className='col-6'>
                    <h1 className='mb-3 fs-2'>Free and open market education</h1>
                    <p>
                        Varsity, the largest online stock market education book in the world 
                        covering everything from the basics to advanced trading.
                    </p>
                    <a 
                        href='https://zerodha.com/varsity/' 
                        style={{ textDecoration: 'none' }}
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Varsity <i className="fa fa-arrow-right ms-2" aria-hidden="true"></i>
                    </a>
                   
                    <p className='mt-5'>
                        Trading Q&A, the most active trading and investment community in India 
                        for all our market-related queries.
                    </p>
                    <a 
                        href='https://tradingqna.com/' 
                        style={{ textDecoration: 'none' }}
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Trading Q&A <i className="fa fa-arrow-right ms-2" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>   
    );
}

export default Education;
