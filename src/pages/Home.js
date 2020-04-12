import React from 'react';
import Link from "react-router-dom/modules/Link";

export default function Home() {
    return (
        <div>
            <Link to="/">Home </Link>
            <Link to="/about">About Us </Link>
            <h1>THIS IS MY HOME PAGE</h1>
            <p>This is the tests page</p>
        </div>
    );
}