import React, { useContext } from 'react'
import Arrow from '../../../assets/back.svg'
import { useNavigate } from 'react-router-dom';

function Atras() {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(-1)
    }

    return (
        <div className='rounded-[50%] hover:scale-110 hover:cursor-pointer hover:bg-segundo' onClick={handleClick}>
            <img src={Arrow} alt="atras" />
        </div>
    )
}

export default Atras