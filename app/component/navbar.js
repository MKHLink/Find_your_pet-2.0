"use client"

import React from 'react';

export default function NavBar(){
    const handleScroll=(id)=>{
        let element = document.getElementById(id);
        element.scrollIntoView({behavior:"smooth"});
    }

    return(
            <header className='navBar'>
                <div className='comName'>Find Your Pet</div>
                <div> <button onClick={() => handleScroll("adopt")}>Adopt</button></div>
                <div><button onClick={() => handleScroll("contact")}>Contact Us</button></div>
            </header>
    );
}