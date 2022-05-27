import React, { useState, useEffect } from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function Detail(props){

    // const name = props.route.params.name
    // const id = props.route.params.id

    const {name, id} = props.route.params
    

    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {

        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => response.json())
        .then(data => {
            setPokemon(data)
            console.log(data.types[0].type.name)
        })
    },[])
    
    const showTypes = () => {
        if (pokemon == null) {
            return <></>
        } else {
        return pokemon.types.map((elem, index) => {
            return (
                <View key={index}>
                    <Text style={styles.txt} >{elem.type.name}</Text>
                </View>
            )
        })
        }
    }
    

    return (
        
        <View style={styles.container}>
            <Image
                source={{ uri: `https://unpkg.com/pokeapi-sprites@2.0.4/sprites/pokemon/other/dream-world/${id}.svg` }}
                style={{ width: 150, height: 150 }} />
            <View style={{paddingHorizontal: 10}}>
            <Text style={styles.txt}>{name}</Text>
            {
                showTypes()
            }
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 2,
        
        },
    itens: {

    },
    txt: {
        fontSize: 30,
    }

})