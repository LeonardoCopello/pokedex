import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Item from '../components/Item';

export default function Home() {

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

    const renderItem = ({ item }) => {
        const idNumber = item.url.split('/')[6]
        return (
            <Item name={item.name} id={idNumber}/>
        )
    }

    return (
        <View>
            <FlatList
                data={pokemonList}
                renderItem={renderItem}
                keyExtractor={(item) => item.name}
            />
        </View>
    )
}