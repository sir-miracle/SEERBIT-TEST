import { StyleSheet, View, TextInput } from 'react-native'
import React from 'react'
import SearchIcon from '../assets/icons/search-normal.svg'

const Search = ({placeholder = 'Search', value, onChangeText =()=>{}, }) => {
    return (
        <View style={styles.searchView}>
            <SearchIcon style={{marginHorizontal: 10}}/>
            <TextInput 
            style={styles.text}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    searchView: {
        flexDirection:'row',
        width:'90%',
        height: 50,
        backgroundColor: '#F1F1F1',
        borderRadius: 5,
        marginHorizontal: 15,
        marginVertical: 5,
        alignItems:'center',  
    },
    text:{
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 14.32,
        fontFamily:'SFUIDisplay-Bold'
    }
})