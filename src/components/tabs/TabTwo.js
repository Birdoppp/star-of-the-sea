import "./TabTwo.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import PokemonAbility from "../pokemon-ability/PokemonAbility";

function TabTwo({singlePokemon}) {

    const [tabTwoInfo, setTabTwoInfo] = useState({});

    async function fetchGeneralData() {

        try {
            const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${singlePokemon.id}/`);
            console.log(result.data);
            setTabTwoInfo(result.data);

        } catch (e) {
            console.error(e)
        }
    }



    useEffect(() => {
        fetchGeneralData();
    }, []);



    return(
        <div className="second-tab">

            {/*Second tab content will go here*/}
            <h2>{singlePokemon.name} 's abilities:</h2>

            {tabTwoInfo
                && tabTwoInfo.abilities

                ?

                tabTwoInfo.abilities.map((ability) => {
                    return(
                        <>
                            {ability &&

                                <>
                                    <h3>{ability.ability.name}</h3>

                                    <PokemonAbility
                                        ability={ability.ability.url}
                                    />

                                </>

                            }

                        </>

                    )
                })

                :

                <p>Information is loading. Thank you for waiting.</p>
            }




        </div>
    )
}

export default TabTwo;