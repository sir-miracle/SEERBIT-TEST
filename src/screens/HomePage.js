import { StyleSheet, Text, View, 
  SafeAreaView, ScrollView, ImageBackground, 
  FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Search from '../components/Search'
import DropDownIcon from '../assets/icons/drop-down.svg'
import SendMoneyIcon from '../assets/icons/send-money.svg'
import LinkAccountIcon from '../assets/icons/link-account.svg'
import RequestMoneyIcon from '../assets/icons/request-money.svg'
import PayBillsIcon from '../assets/icons/pay-bill.svg'
import CopyAcctNumIcon from '../assets/icons/Copy.svg'
import GTCOIcon from '../assets/icons/gtco.svg'
import UserIcon from '../assets/icons/user-square.svg'
import SendMoney2Icon from '../assets/icons/send-money2.svg'
import Mtn from '../assets/icons/mtn.svg'
import Airtel from '../assets/icons/airtel.svg'
import NineMobile from '../assets/icons/nine-mobile.svg'
import Glo from '../assets/icons/glo.svg'
import IKEDC from '../assets/icons/ikeja-elect.svg'
import EKEDC from '../assets/icons/ekedc.svg'
import AEDC from '../assets/icons/aedc.svg'
import Smile from '../assets/icons/smile-network.svg'
import Spectranet from '../assets/icons/spectranet.svg'
import KEDCO from '../assets/icons/kedco.svg'


const HomePage = ({ navigation }) => {

  const recentTransactionsData = [
    {
      icon: <GTCOIcon/>,
      name: 'Sambo Omotola Olarnrewaju',
      desc: 'Bank tranfer from Rasaq Agbala',
      amount: '₦ 100.00',
      type: 'credit',
    },
    {
      icon: <GTCOIcon />,
      name: 'Sambo Omotola Olarnrewaju',
      desc: 'Tranfer to Rasaq Agbala',
      amount: '₦ 100.00',
      type: 'debit',
    },
  ];

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

  const INTERNET_SERVICES_DATA = [
    {
      icon: <Smile />,
      footer: 'Smile',
    },
    {
      icon: <Spectranet />,
      footer: 'Spectranet',
    },
  ]

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
      icon: <KEDCO />,
      footer: '',
    },
    {
      icon: <AEDC />,
      footer: 'Abuja',
    }

  ];

  const horizontalRender = ({ item }) => {
    return (
      <View style={styles.horizontalRender}>
        <TouchableOpacity style={styles.flatListContainer}>
          {item.icon}
        </TouchableOpacity>
      </View>
    )
  }

  const renderRecentTransaction = ({ item }) => {
    return (
      <TouchableOpacity style={styles.renderRecentTrx}>
        
        <View style={{width: 40, height: 40, borderRadius: 16,}}>
        {item.icon}
        </View>
        <View>
          <Text style={styles.recentTxnName}>{item.name}</Text>
          <Text style={styles.recentTxndesc}>{item.desc}</Text>
        </View>
          {item.type ==='credit' ?
            <Text style={styles.recentTxnAmountCredit}>{item.amount}</Text>
            :
            <Text style={styles.recentTxnAmountDebit}>{item.amount}</Text>
          }
      </TouchableOpacity>
    )
  };

  return (
    <SafeAreaView style={styles.root}>

      <View style={{alignItems:'center', width: '100%', backgroundColor:'rgba(84, 142, 78, 0.08)'}}>
      <View style={styles.greetings}>
          <Text style={styles.greet}>Good afternoon</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.topBalance}>₦ 0.00</Text>
            <DropDownIcon style={{ marginTop: 12, marginLeft: 5 }} />
          </View>
        </View>

        <View style={[styles.greetings, { marginVertical: 1 }]}>
          <Text style={styles.greet}>Tola</Text>
          <Text style={[styles.greet, { fontFamily: 'HelveticaNeue Light' }]}>Wallet balance</Text>
        </View>

        </View>

        <ScrollView>
      <View style={styles.firstView}>

        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10, }}>
          <TouchableOpacity style={styles.optionsIconView}>
            <SendMoneyIcon />
          </TouchableOpacity>
          <Text style={styles.sendMoney}>Send money</Text>
        </View>

        <View style={{
          alignItems: 'center', justifyContent: 'space-between',
          marginTop: -20, flexDirection: 'row', marginHorizontal: 15,
        }}>
          <View>
            <TouchableOpacity style={styles.optionsIconView}>
              <LinkAccountIcon />
            </TouchableOpacity>
            <Text style={styles.sendMoney}>Link account</Text>
          </View>

          <View>
            <TouchableOpacity style={styles.optionsIconView} onPress={() => { navigation.navigate('BillPayment') }}>
              <PayBillsIcon />
            </TouchableOpacity>
            <Text style={styles.sendMoney}>Pay bills</Text>
          </View>

        </View>

        <View>
          <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: -20, }}>
            <TouchableOpacity style={styles.optionsIconView}>
              <RequestMoneyIcon />
            </TouchableOpacity>
            <Text style={styles.sendMoney}>Request money</Text>
          </View>

        </View>
        <View style={styles.accountNumberView}>
          <Text style={styles.accountNum}>Account number - </Text>
          <Text style={styles.sendMoney}>1007856777</Text>
          <CopyAcctNumIcon style={{
            marginLeft: 20,
            marginTop: 5
          }} />
        </View>

      </View>

        <View style={styles.secondView}>
          <Search
            style={{ marginTop: 20, }}
          />
          <View style={styles.recentTransaction}>
            <View style={styles.dateView}>
            <Text style={styles.recentTxn}>Recent Transaction</Text>
            <Text style={styles.date}>Saturday, 11 February 2022</Text>
            </View>
            <View style={styles.flatListView}>

              <FlatList
                data={recentTransactionsData}
                renderItem={renderRecentTransaction}
              />
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.showMore}>Show more</Text>
                <DropDownIcon
                  style={{
                    marginTop: 3,
                    marginLeft: 8
                  }}
                />
              </View>
            </View>

            <View style={styles.billPayment}>
              <Text style={styles.billPaymentText}>Bill Payment</Text>
              <View style={styles.billIcons}>
                <SendMoney2Icon />
                <UserIcon />
              </View>
              <Text>Airtime</Text>
              <FlatList
                data={AIRTIME_DATA}
                renderItem={horizontalRender}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
              />

              <Text>Electricity</Text>
              <FlatList
                data={ELECTRICITY_DATA}
                renderItem={horizontalRender}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
              />
              <Text>Internet services</Text>
              <FlatList
                data={INTERNET_SERVICES_DATA}
                renderItem={horizontalRender}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
              />
            </View>

          </View>
        </View>

        </ScrollView>

    </SafeAreaView>
  )
}

export default HomePage;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
  firstView: {
    // flex: 1,
    backgroundColor: 'rgba(84, 142, 78, 0.08)',
    width: '100%',
    paddingVertical: 20,
  },
  secondView: {
    //flex: 1,
    backgroundColor: '#ffffff',
    width: '100%',
    paddingTop: 20
  },
  greetings: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,

  },
  recentTransaction: {
    width: '100%',
    paddingHorizontal: 15,
    marginVertical: 15,
    paddingBottom: 5

  },
  renderRecentTrx: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    borderBottomColor: '#F1F1F1',
    borderBottomWidth: 1,
    paddingBottom: 15,
    paddingHorizontal: 15,
    marginVertical: 15,
  },
  showMore: {
    color: '#548E4E',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 17,
    fontFamily: 'SFUIDisplay-Bold',

  },
  billPayment: {
    marginVertical: 10,
  },
  billIcons: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    width: '50%',
    height: 60,
    marginHorizontal: 60,
    marginVertical: 10,
    borderRadius: 26,
    alignSelf: 'center',
    elevation: 20,
    shadowOpacity: 1,
    alignItems: 'center',
    paddingHorizontal: 40,
    justifyContent: 'space-between'

  },
  horizontalRender: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 10,
    borderBottomColor:'#BDD9BA',
    borderBottomWidth: 0.4,
    //width: '100%'

  },
  flatListContainer: {
    marginHorizontal: 15,
    marginVertical: 15,
  },
  optionsIconView: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#BDD9BA',
    alignItems: 'center',
    justifyContent: 'center'
  },
  accountNumberView: {
    flexDirection: 'row',
    backgroundColor: '#BDD9BA',
    width: '60%',
    height: 30,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 70,
    marginVertical: 30,
  },
  greet: {
    color: '#424242',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 30,
    fontFamily: 'SFUIDisplay-Bold',
  },
  topBalance: {
    color: '#212121',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 30,
    fontFamily: 'SFUIDisplay-Bold',
  },
  sendMoney: {
    color: '#548E4E',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14.32,
    fontFamily: 'SFUIDisplay-Bold',
    marginTop: 5,
    alignSelf:'center'
  },
  accountNum:{
    color: '#636363',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14.32,
    fontFamily: 'SFUIDisplay-Bold',
    marginTop: 5,
    alignSelf:'center'
  },
  recentTxn:{
    color: '#000000',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 17,
    fontFamily: 'SFUIDisplay-Bold',
    marginTop: 10,
    marginBottom: 15,
  },
  date:{
    color: '#636363',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14.32,
    fontFamily: 'SFUIDisplay-Bold',
    marginVertical: 10,
    
  },
  dateView:{
    borderBottomColor: '#F1F1F1',
    borderBottomWidth: 1,
    paddingBottom: 5,
    marginBottom: 10,

  },
  recentTxnName:{
    color: '#212121',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 17,
    fontFamily: 'SFUIDisplay-Bold',
   // marginVertical: 10,
  },
  recentTxndesc:{
    color: '#636363',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14.32,
    fontFamily: 'SFUIDisplay-Bold',
    //marginVertical: 2,
  },
  recentTxnAmountCredit:{
    color: '#548E4E',
    fontSize: 17,
    fontWeight: '500',
    lineHeight: 30,
    fontFamily: 'SFUIDisplay-Bold',
  },
  recentTxnAmountDebit:{
    color: '#FF0000',
    fontSize: 17,
    fontWeight: '500',
    lineHeight: 30,
    fontFamily: 'SFUIDisplay-Bold',
  },
  billPaymentText:{
    color: '#000000',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 17,
    fontFamily: 'SFUIDisplay-Bold',
  },

})