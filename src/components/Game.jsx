import React from 'react'
import { Link } from 'react-router-dom'
import { smallImage } from '../util'
// Icons
import { FaSteam, FaPlaystation, FaGamepad, FaXbox } from 'react-icons/fa'
import { TiPlus } from 'react-icons/ti'
// Styling & Animation
import styled from 'styled-components'
import { motion } from 'framer-motion'
// Redux
import { useDispatch } from 'react-redux'
import { loadDetail } from '../redux/actions/detailActions'

//--------------------------------------------------|
// Styles

const GameContainer = styled(motion.div)`
    height: 450px;
    background: rgba(0,0,0,0.3);
    box-shadow: 0px 5px 50px rgba(23, 23, 23, 0.2);
    border-radius: 1rem;
    overflow: hidden;
    transition: all 0.5s ease;
    position: relative;

    img {
        width: 100%;
        height: 60%;
        object-fit: cover;
        transition: all 0.5s ease;
    }

    .game-details {
        margin-top: 1.5rem;
        padding: 0 1rem;
        height: 135px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;

        .platform-icons {
            color: #fff;
            display: flex;
            gap: 0.5rem;
        }

        h3 {
            font-size: 1.1rem;
            &:hover {
                color: rgba(0,0,0,0.3);
            }
        }

        button {
            margin-top: auto;
            cursor: pointer;
            font-size: 20px;
            color: #fff;
            background: rgba(41, 41, 41, 0.3);
            border: none;
            border-radius: 5px;
            padding: 5px 0;
            width: 50px;
            display: flex;
            justify-content: center;
            align-items: center;

            &:hover {
                background: rgba(105, 105, 105, 0.3);
            }
        }
    }

    &:hover {
        background: #3B3B3B;
    }

    &:hover .game-dp {
        transform: scale(1.1);
    }
`

//--------------------------------------------------|

export const Game = ({ name, image, id, platforms }) => {

    // Load Details
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        document.body.style.overflow = "hidden";
        dispatch(loadDetail(id));
    }

    function getPlatform(platform, key) {
        switch(platform){
            case "PC":
                return <FaSteam key={key}/>
            case "Playstaion" || "Playstaion 4" || "Playstaion 5":
                return <FaPlaystation key={key}/>
            case "Xbox" || "Xbox X" || "Xbox S":
                return <FaXbox key={key} />
            default:
                return <FaGamepad key={key}/>  
        }
    }

    return (
        <GameContainer onClick={loadDetailHandler}>
            <Link to={`/games/${id.toString()}`}>
                <img src={smallImage(image, 640)} alt={name} className="game-dp" />
                <div className='game-details'>
                    <div className='platform-icons'>
                        {platforms.map(data => {
                             return (
                                     getPlatform(data.platform.name, data.platform.id)
                                    )
                            }
                        )}
                    </div>
                    <h3>{name}</h3>
                    <button><TiPlus /></button>
                </div>
            </Link>
        </GameContainer>
    )
}