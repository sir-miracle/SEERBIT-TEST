import {
  StyleSheet, Text, View, SafeAreaView,
  ScrollView, TouchableOpacity, TextInput, Platform, Alert
} from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import CustomHeader from '../components/CustomHeader'
import ContactsIcon from '../assets/icons/contact-book.svg'
import WalletIcon from '../assets/icons/empty-wallet.svg'
import FCMBIcon from '../assets/icons/fcmb.svg'
import GTCOIcon from '../assets/icons/gtco.svg'
import ActiveRadio from '../assets/icons/active-radio.svg'
import Inactiveradio from '../assets/icons/inactive-radio.svg'

const BillPaymentAirtime = ({ navigation, route }) => {
  const [price, setPrice] = useState()
  const receivedData = route.params;
  const [sendData, setSendData] = useState()
  const [isdataBundle, setIsDataBundle] = useState(false)
  const [is9PSB, setIs9PSB] = useState(true)
  const [isFCMB, setIsFCMB] = useState(false)
  const [isGTCO, setIsGTCO] = useState(false)
  const [network, setNetwork] = useState("MTN");


  const goToTransaction = () => {
    let isnum = /^\d+$/.test(price);
    if(isnum){
      navigation.navigate('TransactionPin', [network, price])
    }else{
      alert('Amount must contain only digits')
      return
    }
  }

  const mobileTopUpClicked = () => {
    setIsDataBundle(false)
  }

  const dataBundleClicked = () => {
    setIsDataBundle(true)
  }

  const Wallet9PSB = () => {
    setIs9PSB(true)
    setIsFCMB(false)
    setIsGTCO(false)
  }

  const useFCMB = () => {
    setIsFCMB(true)
    setIs9PSB(false)
    setIsGTCO(false)
  }

  const useGTCO = () => {
    setIsGTCO(true)
    setIs9PSB(false)
    setIsFCMB(false)
  }

  return (
    <SafeAreaView style={styles.root}>

      <CustomHeader title='Airtime' onPress={() => { navigation.goBack() }} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.firstGroupView}>
          <Text style={styles.networkProvider}>Network provider</Text>

          {Platform.OS === 'ios' ?

            <Picker
              style={{ marginHorizontal: 15, }}
              selectedValue={network}
              mode={'dropdown'}
              onValueChange={(itemValue, itemIndex) => {
                setNetwork(itemValue),
                  setNetwork(itemValue)
              }
              }>
              <Picker.Item label="MTN" value="MTN" />
              <Picker.Item label="Airtel" value="Airtel" />
              <Picker.Item label="9Mobile" value="9Mobile" />
              <Picker.Item label="Glo" value="Glo" />
            </Picker>
            :
            <Picker
              style={styles.networkProviderView}
              selectedValue={network}
              mode={'dropdown'}
              onValueChange={(itemValue, itemIndex) => {
                setNetwork(itemValue)
                setNetwork(itemValue)
              }
              }>
              <Picker.Item label="MTN" value="MTN" />
              <Picker.Item label="Airtel" value="Airtel" />
              <Picker.Item label="9Mobile" value="9Mobile" />
              <Picker.Item label="Glo" value="Glo" />
            </Picker>
          }

          <Text style={styles.category}>Category</Text>

          <View style={styles.networkProviderView}>
            {isdataBundle ?
              <TouchableOpacity style={styles.topUpView} onPress={mobileTopUpClicked}>
                <Text>Mobile topup</Text>
              </TouchableOpacity>
              :

              <TouchableOpacity style={styles.chosenCatgory} onPress={mobileTopUpClicked}>
                <Text style={styles.chosenCatgoryText}>Mobile topup</Text>
              </TouchableOpacity>
            }

            {isdataBundle ?
              <TouchableOpacity style={styles.chosenCatgory} onPress={dataBundleClicked}>
                <Text style={styles.chosenCatgoryText}>Data bundle</Text>
              </TouchableOpacity>
              :

              <TouchableOpacity style={styles.bundleView} onPress={dataBundleClicked}>
                <Text>Data bundle</Text>
              </TouchableOpacity>
            }


          </View>
          <Text style={styles.category}>Amount</Text>

          <TextInput
            style={styles.networkProviderView}
            placeholder='Enter amount'
            value={price}
            onChangeText={(text) => { setPrice(text) }}
            keyboardType='number-pad'
          />
          <Text style={styles.category}>Phone number</Text>

          <View style={styles.phoneNumberViewView}>
            <TextInput
              placeholder='Enter phone number'
              keyboardType='phone-pad'
              style={{
                flex: 2
              }}
            />
            <TouchableOpacity style={styles.contactsView}>
              <ContactsIcon />
              <Text style={styles.contacts}>Contacts</Text>

            </TouchableOpacity>

          </View>

        </View>
        <View style={styles.dividerView}>
          <View style={styles.divide}></View>
          <Text style={styles.payWith}>Pay with</Text>
          <View style={styles.divide}></View>
        </View>

        <View style={styles.secondgroupView}>

          <TouchableOpacity style={styles.paymentOptionsView} onPress={Wallet9PSB}>
            <WalletIcon />
            <Text style={styles.walletName}>9PSB Wallet</Text>
            <View style={styles.balanceView}>
              <Text style={styles.balance}>Balance: </Text>
              <Text style={styles.balanceFigure}>434,533,000</Text>
            </View>

            {is9PSB ?
              <ActiveRadio style={{
                position: 'absolute',
                right: 10,
                top: 20
              }} />
              :
              <Inactiveradio style={{
                position: 'absolute',
                right: 10,
                top: 20
              }} />
            }

          </TouchableOpacity>

          <TouchableOpacity style={styles.paymentOptionsView} onPress={useFCMB}>
            <FCMBIcon />
            <Text style={styles.walletName}>Bank</Text>
            <View style={styles.balanceView}>
              <Text style={styles.balance}>Balance: </Text>
              <Text style={styles.balanceFigure}>23,000</Text>
            </View>

            {isFCMB ?
              <ActiveRadio style={{
                position: 'absolute',
                right: 10,
                top: 20
              }} />
              :
              <Inactiveradio style={{
                position: 'absolute',
                right: 10,
                top: 20
              }} />
            }
          </TouchableOpacity>

          <TouchableOpacity style={styles.paymentOptionsView} onPress={useGTCO}>
            <GTCOIcon />
            <Text style={styles.walletName}>Bank</Text>
            <View style={styles.balanceView}>
              <Text style={styles.balance}>Balance: </Text>
              <Text style={styles.balanceFigure}>23,000</Text>
            </View>

            {isGTCO ?
              <ActiveRadio style={{
                position: 'absolute',
                right: 10,
                top: 20
              }} />
              :
              <Inactiveradio style={{
                position: 'absolute',
                right: 10,
                top: 20
              }} />
            }

          </TouchableOpacity>

          <TouchableOpacity style={styles.purchaseView}
            onPress={goToTransaction}>
            <Text style={styles.purchase}>Purchase</Text>
          </TouchableOpacity>

        </View>

      </ScrollView>

    </SafeAreaView>
  )
};

export default BillPaymentAirtime

const styles = StyleSheet.create({
  root: {
    flex: 1,
    margin: 5,
    backgroundColor: '#FAFAFE'
  },
  firstGroupView: {
    flex: 1,
  },
  secondgroupView: {
    flex: 1
  },
  networkProviderView: {
    flexDirection: "row",
    width: '90%',
    backgroundColor: '#FDFDFD',
    height: 50,
    marginHorizontal: 15,
    borderRadius: 5,
    borderColor: '#EAEAEA',
    borderWidth: 1,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  networkProvider: {

    marginHorizontal: 15,
    marginVertical: 10,
    color: '#000000',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14.32,
    fontFamily: 'SFUIDisplay-Bold',
  },
  category: {
    marginHorizontal: 15,
    marginVertical: 10,
    color: '#000000',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14.32,
    fontFamily: 'SFUIDisplay-Bold',
  },
  topUpView: {
    flex: 1,
    backgroundColor: '#ffff',
    height: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  bundleView: {
    flex: 1,
    backgroundColor: '#ffffff',
    height: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  phoneNumberViewView: {
    flexDirection: "row",
    width: '90%',
    backgroundColor: '#FDFDFD',
    height: 50,
    marginHorizontal: 15,
    borderRadius: 5,
    borderColor: '#EAEAEA',
    borderWidth: 1,
    paddingHorizontal: 10,
    alignItems: "center",

  },
  contactsView: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    borderColor: '#EAEAEA',
    borderStartWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contacts: {
    marginHorizontal: 10,
    color: '#9C9C9C',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14.32,
    fontFamily: 'SFUIDisplay-Bold',

  },
  dividerView: {
    flexDirection: "row",
    width: '90%',
    height: 50,
    marginHorizontal: 15,
    marginVertical: 30,
    alignItems: 'center',
    justifyContent: 'center'

  },
  divide: {
    width: '30%',
    height: 0.5,
    borderColor: '#C4C4C4',
    borderWidth: 1
  },
  payWith: {
    marginHorizontal: 40,
  },
  paymentOptionsView: {
    flexDirection: "row",
    width: '90%',
    backgroundColor: '#FDFDFD',
    height: 60,
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 5,
    borderColor: '#EAEAEA',
    borderWidth: 1,
    paddingHorizontal: 10,
    alignItems: "center",

  },
  purchaseView: {
    backgroundColor: '#C0D73E',
    height: 60,
    width: '90%',
    marginHorizontal: 15,
    marginVertical: 30,
    borderRadius: 15,
    padding: 18,
    alignItems: 'center',
    justifyContent: 'center'
  },
  purchase: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 19.54,
    fontFamily: 'HelveticaNeue Light',
  },
  chosenCatgory: {
    flex: 1,
    backgroundColor: '#E3EFE2',
    height: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  chosenCatgoryText: {
    color: '#548E4E',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 16.71,
    fontFamily: 'SFUIDisplay-Bold',
  },
  walletName: {
    marginHorizontal: 10,
    color: '#424242',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14.32,
    fontFamily: 'SFUIDisplay-Bold',
  },
  balanceView: {
    flexDirection: 'row',
    position: 'absolute',
    right: 45
  }
})