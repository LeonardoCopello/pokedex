import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Item from '../components/Item';

export default function Home({ navigation }) {

    const [pokemonList, setPokemonList] = useState([]);

    const FetchPokemon = () => {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(response => response.json())
            .then(data => {
                setPokemonList([...data.results])
            });
    }

    useEffect(() => {
        FetchPokemon();
    }, []);


    return (
        <View>

            <FlatList
                data={pokemonList}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />


            <Item name="Bulbasaur" id="1" />
            <Item name="Charmander" id="4" />
            <Item name="Pikachu" id="25" />
        </View>
    )
}