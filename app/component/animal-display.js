"use client"

import React from "react";
import { getAnimals } from "../api/routes";
import { useState, useEffect } from "react";
import Image from 'next/image';

export default function DisplayAnimals(){
    const [zipcode, setZipcode] = useState('');
    const [animals, setAnimals] = useState([]);
    const [storedAnimals, setStoredAnimals] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages,setTotalPages] = useState(1);

    //loads the previous animals from local storage
    useEffect(() => {
        let storedAnimals = localStorage.getItem('storedAnimals');
        if (storedAnimals && storedAnimals !== 'undefined') {
            try {
                const parsedAnimals = JSON.parse(storedAnimals);
                if (Array.isArray(parsedAnimals) && parsedAnimals.length > 0) {
                    setStoredAnimals(parsedAnimals);
                }
            } catch (error) {
                console.error("Error parsing stored animals:", error);
            }
        }
    }, []);

    //calls getAnimal api and sets the animals to local storage
    const fetchAnimals=(page)=>{
        getAnimals(zipcode,page)
        .then((data)=>{
            console.log(data);
            localStorage.setItem('storedAnimals',JSON.stringify(data.animals));
            setAnimals(data.animals);
            setCurrentPage(data.pagination.current_page);
            setTotalPages(data.pagination.total_pages);
        }).catch((e)=>{
            console.log(e.message);
        })
    }
    
    //middle function that takes in the zipcode and calls the fetchAnimals
    const handleZipcode=()=>{
        fetchAnimals(1);
    }

    //handles page scroll to top when next button is clicked
    const handlePageChange=(page)=>{
        if(page>0 && page<totalPages){
            fetchAnimals(page);
            document.getElementById('adopt').scrollIntoView({behavior:'smooth'});
        }
    }

    return(
        <div>
            <div className="userInput" id="adopt">
                <p><strong>Rescue, love, care and repeat</strong></p>
                <div>
                    <p>Enter Your Zipcode Here:</p>
                    <input id='zipcode' placeholder="zipcode" value={zipcode} onChange={(e)=>setZipcode(e.target.value)}></input>
                    <button onClick={handleZipcode}>Submit</button>
                </div>
            </div>
            <div className="cardContainer">
                {(animals.length > 0 || storedAnimals.length > 0) ? (
                    (animals.length > 0 ? animals : storedAnimals).map((animal, index) => (
                        <div className="animalCard" key={index}>
                            <img 
                                src={animal.primary_photo_cropped?.medium || 'images/stock.jpg'} 
                                alt="Animal Photo" 
                            />
                            <p>Name: {animal.name}</p>
                            <p>Species: {animal.species}</p>
                            <p>Breed: {animal.breeds.primary}</p>
                            <p>City: {animal.contact.address.city}</p>
                            <p>Contact: {animal.contact.email}<br />{animal.contact.phone}</p>
                            <p>Status: {animal.status}</p>
                        </div>
                    ))
                ):(
                    <p>No Animals Found in your area</p>
                )}
            </div>
            {animals.length>0&&(
                <div className="pagination">
                    <button onClick={()=>handlePageChange(currentPage-1)} disabled={currentPage === 1}>Previous</button>
                    <span>Current Page: {currentPage}</span>
                    <button onClick={()=>handlePageChange(currentPage+1)} disabled={currentPage === totalPages}>Next</button>
                </div>
            )}
        </div>
    );
}