import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import CustomHeader from '../components/CustomHeader';
import FingerPrint from '../assets/icons/fingerprint.svg'
import Mtn from '../assets/icons/mtn.svg'
import Airtel from '../assets/icons/airtel.svg'
import NineMobile from '../assets/icons/nine-mobile.svg'
import Glo from '../assets/icons/glo.svg'

const TransactionPin = ({ navigation, route }) => {
  const receivedData = route.params;
  console.log(receivedData)
  const [icon, setIcon] = useState()

  const AIRTIME_DATA = [
    {
      icon: <Mtn />,
      footer: 'MTN',
    },
    {
      icon: <Airtel />,
      footer: 'Airtel',
    },
    {
      icon: <NineMobile />,
      footer: '9Mobile',
    },
    {
      icon: <Glo />,
      footer: 'Glo',
    }
  ];
  
  useEffect(()=>{
    for(var i = 0; i < AIRTIME_DATA.length; i++){
      if(AIRTIME_DATA[i].footer ==receivedData[0]) setIcon(AIRTIME_DATA[i].icon)
    }
  },[])
  
  return (
    <SafeAreaView style={{ backgroundColor: '#FAFAFE', flex: 1 }}>
      <CustomHeader
        onPress={() => { navigation.goBack() }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.firstView}>
        {icon}
        <Text style={styles.network}>{receivedData[0]}</Text>
        <Text style={styles.amount}>{receivedData[1]}</Text>
        <Text style={styles.desc}>Enter your transaction PIN to complete this payment</Text>

        <View style={styles.digitsView}>

          <View style={styles.digits}></View>
          <View style={styles.digits}></View>
          <View style={styles.digits}></View>
          <View style={styles.digits}></View>

        </View>

        <View style={styles.customKboardView}>
          
          <View style={styles.firstRow}>

            <TouchableOpacity style={styles.numberView}>
              <Text>1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.numberView}>
              <Text>2</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.numberView}>
              <Text>3</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.firstRow}>

            <TouchableOpacity style={styles.numberView}>
              <Text>4</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.numberView}>
              <Text>5</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.numberView}>
              <Text>6</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.firstRow}>

            <TouchableOpacity style={styles.numberView}>
              <Text>7</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.numberView}>
              <Text>8</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.numberView}>
              <Text>9</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.firstRow}>

            <TouchableOpacity style={styles.fingerPrintView}>
              <FingerPrint/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.numberView}>
              <Text>0</Text>
            </TouchableOpacity>

            <View style={styles.spaceView}>
              
            </View>
          </View>

        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default TransactionPin

const styles = StyleSheet.create({
  firstView: {
    alignItems: 'center',
    marginTop: 20,
  },
  network: {
    marginHorizontal: 15,
    marginVertical: 10,
    color: '#636363',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14.32,
    fontFamily: 'SFUIDisplay-Bold',
  },
  amount: {
    marginHorizontal: 15,
    marginTop: 30,
    marginBottom: 20,
    color: '#000000',
    fontSize: 30,
    fontWeight: '400',
    lineHeight: 30,
    fontFamily: 'SFUIDisplay-Bold',
  },
  desc: {
    alignSelf: 'center',
    marginHorizontal: 15,
    marginTop: 5,
    marginBottom: 10,
    color: '#000000',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16.71,
    fontFamily: 'SFUIDisplay-Bold',

  },
  digitsView: {
    flexDirection: 'row',
    width: '90%',
    height: 30,
    marginVertical: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  digits: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#E3EFE2',
    marginHorizontal: 27,
  },
  customKboardView: {
    height:'50%',
    width: '90%',
    marginHorizontal: 15,
  },
  firstRow: {
    flex: 1,
    flexDirection: 'row',
    alignContent:'center',
    justifyContent:'center',
    marginVertical: 10,
    
  },
  numberView: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15,
  },
  fingerPrintView:{
    width: 86,
    height: 86,
    borderRadius: 43,
    //backgroundColor: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15,
  },
  spaceView:{
    width: 86,
    height: 86,
    borderRadius: 43,
    //backgroundColor: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15,
  }
})