import React from 'react';

//displays hero image
export default function HeroSection(){
    return(
        <div className='hero'>
             <img
              src="https://images.unsplash.com/photo-1601758003122-53c40e686a19"
              alt="Couple on a bed with a dog"
            />
            <div className='heroText'>
                <h1><strong>Let's find your</strong></h1>
                <h1><strong>Forever Friend</strong></h1>
                <p>Search adoptable pets from shelters all over the country</p>
            </div>
        </div>
    );
}