import React from 'react'
// Redux
import { useSelector } from 'react-redux'
// Styling & Animation
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useNavigate } from "react-router-dom";
import { smallImage } from '../util'

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 200;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Detail = styled(motion.div)`
    width: 80%;
    max-width: 800px;
    height: 800px;
    overflow-y: scroll;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: #151515;
    color: #fff;
    z-index: 1000;

    &::-webkit-scrollbar {
     display: none;
    }

    img {
        width: 100%;
    }

    .stats {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .info {
        text-align: center;
    }

    .platforms {
        display: flex;
        justify-content: space-evenly;
        img {
            margin-left: 3rem;
        } 
    }

    .media {
        margin-top: 5rem;
        img {
            width: 100%;
        }
    }

    .description {
        margin: 5rem 0;
    }
`

export const GameDetail = () => {

    const pathTo = useNavigate();

    const { game, screens, isLoading } = useSelector((state) => state.details)

    const exitHandler = (e) => {
        if (e.target.classList.contains('shadow')) {
            document.body.style.overflow = "auto";
            pathTo("/");
        }
    }

    return (
        <>
            <CardShadow className='shadow' onClick={(e) => exitHandler(e)}>
                {isLoading ?
                    <div className='loading'><span className="loader"></span></div>
                    : (
                        <Detail>
                            <div className="stats">
                                <div className="rating">
                                    <h3>{game.name}</h3>
                                    <p>Rating: {game.rating}</p>
                                </div>
                                <div className="info">
                                    <h3>Platforms</h3>
                                    <div className="platforms">
                                        {game.platforms.map(data => {
                                            return (
                                                <h3 key={data.platform.id}>
                                                    {data.platform.name}
                                                </h3>
                                            )
                                        }
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="media">
                                <img src={smallImage(game.background_image, 1280)} alt="image" />
                            </div>
                            <div className="description">
                                <p>{game.description_raw}</p>
                            </div>
                            <div className="gallery">
                                {
                                    screens.results.map((img) => {
                                        return <img src={smallImage(img.image, 1280)} alt="game" key={img.image} />
                                    })
                                }
                            </div>
                        </Detail>
                    )}
            </CardShadow>
        </>
    )
}