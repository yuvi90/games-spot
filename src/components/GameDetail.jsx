import React from 'react'
// Redux
import { useSelector } from 'react-redux'
// Styling & Animation
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
import { smallImage } from '../util'
import { FaSteam, FaPlaystation, FaGamepad, FaXbox } from 'react-icons/fa'

//--------------------------------------------------|

const CardShadow = styled.div`
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

const Detail = styled.div`
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
        justify-content: center;
        gap: 0.8rem;
        font-size: 1.5rem;
        margin-top: 0.2rem;
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

//--------------------------------------------------|

export const GameDetail = () => {

    const pathTo = useNavigate();

    const { game, screens, isLoading } = useSelector((state) => state.details)

    const exitHandler = (e) => {
        if (e.target.classList.contains('shadow')) {
            document.body.style.overflow = "auto";
            pathTo(-1);
        }
    }

    function getPlatform(platform, key) {
        const platformName = platform.toLowerCase();
        if (platformName.includes("pc")) {
            return <FaSteam key={key} />
        }
        if (platformName.includes("playstation")) {
            return <FaPlaystation key={key} />
        }
        if (platformName.includes("xbox")) {
            return <FaXbox key={key} />
        }
        return <FaGamepad key={key} />
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
                                                getPlatform(data.platform.name, data.platform.id)
                                            )
                                        }
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="media">
                                <img src={game.background_image && smallImage(game.background_image, 1280)} alt="image" />
                            </div>
                            <div className="description">
                                <p>{game.description_raw}</p>
                            </div>
                            <div className="gallery">
                                {
                                    screens.results.map((img) => {
                                        return img.image && <img src={smallImage(img.image, 1280)} alt="game" key={img.image} />
                                    })
                                }
                            </div>
                        </Detail>
                    )}
            </CardShadow>
        </>
    )
}