import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import BackIcon from '../assets/icons/back-arrow.svg'

const CustomHeader = ({onPress =()=>{}, title, showTitle = true, ...props}) => {
    return (
        <View style={styles.headerView} > 
            <TouchableOpacity onPress={onPress} >
                <BackIcon />
            </TouchableOpacity>
            <Text style={styles.title}>{ showTitle && title}</Text>
        </View>
    )
}

export default CustomHeader

const styles = StyleSheet.create({
    headerView:{
        flexDirection:'row',
        width:'90%',
        height: 30,
        borderRadius: 5,
        marginHorizontal: 15,
        marginVertical: 5,
        alignItems:'center',
        
        
    },

    title:{
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 30,
        fontFamily:'SFUIDisplay-Bold', 
        position:'absolute',
        left: 120
    },
})