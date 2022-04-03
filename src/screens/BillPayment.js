import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import Search from '../components/Search'
import CustomHeader from '../components/CustomHeader'
import Mtn from '../assets/icons/mtn.svg'
import Airtel from '../assets/icons/airtel.svg'
import Glo from '../assets/icons/glo.svg'
import NineMobile from '../assets/icons/nine-mobile.svg'
import IKEDC from '../assets/icons/ikeja-elect.svg'
import EKEDC from '../assets/icons/ekedc.svg'
import AEDC from '../assets/icons/aedc.svg'
import Dstv from '../assets/icons/dstv.svg.svg'
import Gotv from '../assets/icons/gotv.svg.svg'
import Smile from '../assets/icons/smile-network.svg'
import Spectranet from '../assets/icons/spectranet.svg'


const BillPayment = ({navigation}) => {

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

  const ELECTRICITY_DATA = [
    {
      icon: <IKEDC />,
      footer: 'IKEDC',
    },
    {
      icon: <EKEDC />,
      footer: 'EKEDC',
    },
    {
      icon: <AEDC />,
      footer: 'Abuja',
    },
    {
      icon: <AEDC />,
      footer: 'Abuja',
    }

  ];

  const TV_BILLS_DATA = [
    {
      icon: <Dstv />,
      footer: 'DSTV',
    },
    {
      icon: <Gotv />,
      footer: 'GOTV',
    },
    {
      icon: <Dstv />,
      footer: 'DSTV',
    },
    {
      icon: <Dstv />,
      footer: 'DSTV',
    },

  ];

  const INTERNET_SERVICES_DATA = [
    {
      icon: <Smile />,
      footer: 'Smile',
    },
    {
      icon: <Spectranet />,
      footer: 'Spectranet',
    },
    {
      icon: <Spectranet />,
      footer: 'Spectranet',
    },
    {
      icon: <Spectranet />,
      footer: 'Spectranet',
    },

  ]

  const airtimePurchase = (item) => {
    if (item.footer === 'MTN'
      || item.footer === 'Airtel'
      || item.footer === '9Mobile'
      || item.footer === 'Glo') {
        navigation.navigate('BillPaymentAirtime' , AIRTIME_DATA)
    }
  }

  const horizontalRender = ({ item }) => {
    return (
      <View style={styles.horizontalRender}>
        <TouchableOpacity style={styles.flatListContainer} onPress={() => { airtimePurchase(item) }}>
          {item.icon}
          <Text style={{ alignSelf: 'center' }}>{item.footer}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.root}>
        <View style={styles.firstView}>
          <CustomHeader title='Bill Payment' onPress={()=> {navigation.goBack()}}/>
          <Search />
        </View>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>

        <View style={styles.secondView}>
          <Text style={styles.airtime}>Airtime</Text>
          <FlatList
            data={AIRTIME_DATA}
            renderItem={horizontalRender}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={styles.thirdView}>
          <Text style={styles.airtime}>Electricity</Text>
          <FlatList
            data={ELECTRICITY_DATA}
            renderItem={horizontalRender}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
          <Text style={styles.viewAll}>View all</Text>
        </View>

        <View style={styles.fourthView}>
          <Text style={styles.airtime}>TV Bills</Text>
          <FlatList
            data={TV_BILLS_DATA}
            renderItem={horizontalRender}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
          <Text style={styles.viewAll}>View all</Text>
        </View>

        <View style={styles.fifthView}>
          <Text style={styles.airtime}>Internet Services</Text>
          <FlatList
            data={INTERNET_SERVICES_DATA}
            renderItem={horizontalRender}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
          <Text style={styles.viewAll}>View all</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
};

export default BillPayment

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FAFAFE',
    padding: 2
  },
  firstView: {
    width: '100%',
    backgroundColor: '#ffffff',
    marginBottom: 15,
    padding: 10,
  },
  secondView: {
    flex: 1,
    backgroundColor: '#ffffff',
    width: '100%',
    marginBottom: 15,
    padding: 10,
  },
  thirdView: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginBottom: 15,
    padding: 10,
  },
  fourthView: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginBottom: 15,
    padding: 10,
    height: 100,
    justifyContent: 'center'
  },
  fifthView: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginBottom: 15,
    padding: 10,
  },
  airtime: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14.32,
    fontFamily: 'SFUIDisplay-Bold',
  },
  horizontalRender: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 10,
    //width: '100%'

  },
  flatListContainer: {
    marginHorizontal: 20,
    marginVertical: 15,
  },
  viewAll: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    color: '#548E4E',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14.32,
    fontFamily: 'SFUIDisplay-Bold',
  },

})