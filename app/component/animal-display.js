"use client"

import React from "react";
import { getAnimals } from "../api/routes";
import { useState } from "react";

export default function DisplayAnimals(){
    const [zipcode, setZipcode] = useState('');
    const [animals, setAnimals] = useState([]);

    const handleZipcode=()=>{
        console.log("Zipcode: "+zipcode);

        getAnimals(zipcode)
        .then((data)=>{
            console.log(data);
            setAnimals(data.animals);
        }).catch((e)=>{
            console.log(e.message);
        })
    }

    return(
        <div>
            <div className="userInput">
                <p><strong>Rescue, love, care and repeat</strong></p>
                <div>
                    <p>Enter Your Zipcode Here:</p>
                    <input id='zipcode' placeholder="zipcode" value={zipcode} onChange={(e)=>setZipcode(e.target.value)}></input>
                    <button onClick={handleZipcode}>Submit</button>
                </div>
            </div>
            <div className="cardContainer">
                {animals.length>0?(
                    animals.map((animal,index)=>(
                        <div className="animalCard" key={index}>
                            <img src={animal.primary_photo_cropped?.medium || '../images/stock.jpg'} alt="Animal Photo"></img>
                            <p>Name: {animal.name}</p>
                            <p>Species: {animal.species}</p>
                            <p>Breed: {animal.breeds.primary}</p>
                            <p>City: {animal.contact.address.city}</p>
                            <p>Contact: {animal.contact.email}<br /> {animal.contact.phone}</p>
                            <p>Status: {animal.status}</p>
                        </div>
                    ))
                ):(
                    <p>No Animals Found in your area</p>
                )}
            </div>
        </div>
    );
}