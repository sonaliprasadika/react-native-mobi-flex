import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contracts =[
        {
            uid: 1,
            name: 'Hitesh Choudhary',
            status: 'Just an extra ordinary teacher',
            imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
          },
          {
            uid: 2,
            name: 'Anurag Tiwari',
            status: 'I ❤️ To Code and Teach!',
            imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
          },
          {
            uid: 3,
            name: 'Sanket Singh',
            status: 'Making your GPay smooth',
            imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
          },
          {
            uid: 4,
            name: 'Anirudh Jwala',
            status: 'Building secure Digital banks',
            imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
          },
    ];
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView
      style={styles.container}
      scrollEnabled={false}
      >
        {contracts.map(({uid,name,status,imageUrl}) => (
            <View key={uid} style={styles.userCards}>
                <Image
                 source={{
                    uri:imageUrl
                 }}
                 style={styles.userImage}
                />
                <View>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    container:{
        paddingHorizontal:16,
        marginBottom:3
    },
    userCards:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:3,
        backgroundColor:'#686de0',
        borderRadius: 14,
        padding:4
    },
    userImage:{
        width:60,
        height:60,
        borderRadius:30, //half the width
        marginRight:14
    },
    userName:{
        fontSize:16,
        fontWeight:'600',
        color:'#000'
    },
    userStatus:{
        fontSize:12
    }

})