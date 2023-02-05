import React from 'react'
import { FaSteam, FaPlaystation, FaWindows } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { smallImage } from '../util'
// Styling & Animation
import styled from 'styled-components'
import { motion } from 'framer-motion'
// Redux
import { useDispatch } from 'react-redux'
import { loadDetail } from '../redux/actions/detailActions'

//--------------------------------------------------|
// Styles

const GameContainer = styled(motion.div)`
    height: 40vh;
    box-shadow: 0px 5px 30px rgba(0,0,0,0.2);
    text-align: left;
    border-radius: 1rem;
    overflow: hidden;

    h3 {
        margin:  0 1rem;
    }

    img {
        width: 100%;
        height: 60%;
        object-fit: cover;
    }
    
    &:hover {
        background: rgba(0,0,0,0.3);
    }
    
    .platform-icons {
        color: #fff;

        svg {
            margin-left: 1rem;
        }
    }
`

//--------------------------------------------------|

export const Game = ({ name, released, image, id }) => {

    const gameId = id.toString();

    // Load Details
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        document.body.style.overflow = "hidden";
        dispatch(loadDetail(id));
    }

    return (
        <GameContainer layoutId={gameId} onClick={loadDetailHandler}>
            <Link to={`/games/${id.toString()}`}>
                <motion.img layoutId={`image ${gameId}`} src={smallImage(image, 640)} alt={name} />
                <div className='platform-icons'>
                    <FaWindows />
                    <FaPlaystation />
                    <FaSteam />
                </div>
                <motion.h3 layoutId={`title ${gameId}`}>{name}</motion.h3>
                {/* <p>{released}</p> */}
            </Link>
        </GameContainer>
    )
}
