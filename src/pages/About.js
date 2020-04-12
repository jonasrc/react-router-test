import React from 'react';
import Link from "react-router-dom/modules/Link";

export default function About() {
    return (
        <div>
            <Link to="/">Home </Link>
            <Link to="/about">About Us </Link>
            <h1>THIS IS WHAT YOU NEED TO KNOW ABOUT US</h1>
            <p>A bunch of information.</p>
        </div>
    );
}