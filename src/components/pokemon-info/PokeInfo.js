import "./PokeInfo.css";
import React from "react";
import {Link} from "react-router-dom";


function PokeInfo({ data }) {
    console.log(data);


    return(
        <div className="main-pokemon-info-container">
            {

                (!data) ? <h2>"Want to get to know your pokemon? Click on one on the left side of the screen to see how cool they are!..."</h2> : (

                    <>
                        <Link
                            to={`/single-pokemon-page/${data.name}`}
                            style={{textDecoration: 'none', color: 'lightblue'}}
                        >
                            <h1 className="transition">{data.name}</h1>

                            <span
                                className="poke-image-container"
                            >
                            <img
                                src={data.sprites.other.home.front_default}
                                alt="image-pokemon-front"
                                className="transition"
                            />
                        </span>
                        </Link>

                        <div className="abilities">
                            {data.abilities && data.abilities.map((ability) => {
                                return(
                                    <>
                                        <div className="group">
                                            <h2 className="transition">{ability.ability.name}</h2>
                                        </div>

                                    </>
                                )
                            })}
                        </div>

                            <div className="base-stat">
                                {data.stats && data.stats.map((stat) => {
                                    return(
                                        <>
                                            <h3>{stat.stat.name} : {stat.base_stat}</h3>

                                        </>
                                    )
                                })}

                            </div>

                    </>





                )
            }


        </div>
    )
}

export default PokeInfo;