import React from 'react'
// Redux
import { useSelector } from 'react-redux'
// Styling & Animation
import styled from 'styled-components'
import { motion } from 'framer-motion'

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
`

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: #fff;
    position: absolute;
    left: 10%;
    color: #000;

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
    const { game, screens } = useSelector((state) => state.details)

    return (
        <>
            <CardShadow>
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
                        <img src={game.background_image} alt="image" />
                    </div>
                    <div className="description">
                        <p>{game.description_raw}</p>
                    </div>
                    <div className="gallery">
                        {
                            screens.results.map((img) => {
                                return <img src={img.image} alt="game" key={img.image} />
                            })
                        }
                    </div>
                </Detail>
            </CardShadow>
        </>
    )
}