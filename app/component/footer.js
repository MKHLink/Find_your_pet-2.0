import React from 'react';

//foother with helpful links
export default function Footer(){
    return(
        <div className='footer' id='contact'>
            <div>
                <p>AVAILABLE ANIMALS</p>
                <ul>
                    <li><a href="https://en.wikipedia.org/wiki/Dog" target="_blank">Dog</a></li>
                    <li><a href="https://en.wikipedia.org/wiki/Cat" target="_blank">Cat</a></li>
                    <li><a href="https://en.wikipedia.org/wiki/Hamster" target="_blank">Hamster</a></li>
                </ul>
            </div>
            <div>
                <p>USEFUL LINKS</p>
                    <ul>
                        <li><a href="https://aspca.org" target="_blank">ASPCA.org</a></li>
                        <li><a href="https://petfinder.com" target="_blank">Petfinder.com</a></li>
                        <li><a href="https://dogster.com" target="_blank">Dogster.com</a></li>
                    </ul>
            </div>
            <div>
                <p>CONTACT</p>
                    <ul>
                        <li>New York, NY 10025, US</li>
                        <li>info@example.com</li>
                        <li>+ 212 123 4567</li>
                    </ul>
            </div>
        </div>
    )
}