// rnfe
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import AactionCard from './components/AactionCard'
import ContactList from './components/ContactList'

const AppPro = () => {
  return (
    <SafeAreaView>
        <ScrollView>
            <FlatCards/>
            <ElevatedCards/>
            <FancyCard/>
            <AactionCard/>
            <ContactList/>
        </ScrollView>
    </SafeAreaView>
  )
}

export default AppPro