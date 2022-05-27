import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

export default function Item(props){

    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={ () => navigation.navigate('Detail', {name: props.name, id: props.id})} >
            <Image
                source={{ uri: `https://unpkg.com/pokeapi-sprites@2.0.4/sprites/pokemon/other/dream-world/${props.id}.svg` }}
                style={{ width: 150, height: 150 }} />
            <Text>{props.name}</Text> 
        </TouchableOpacity>
    )
}