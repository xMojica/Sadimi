import React from 'react'

function Color(Props) {
    return (
        <svg width="20px" height="20px" viewBox="0 0 16 16" fill={Props.color} xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0" />
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
            <g id="SVGRepo_iconCarrier"> <circle cx="8" cy="8" r="8" fill={Props.color} /> </g>

        </svg >
    )
}

export default Color