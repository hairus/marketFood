import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap, Header, Select, TextInput } from '../../components'

const SignUpAddress = ({navigation}) => {
  return (
    <View style={styles.page}>
    <Header title="Address" subTitle="Make Sure It's Valid" onBack={() => { }} />
    <View style={styles.container}>
        <TextInput label="Phone No." placeholder="Type your phone number" />
        <Gap height={16} />
        <TextInput label="Address" placeholder="Type your address" />
        <Gap height={24} />
        <TextInput label="PassworHouse No." placeholder="Type your house number" />
        <Gap height={16} />
        <Select label={"City"} />
        <Gap height={24} />
        <Button text="Sign Up Now" onPress={()=> navigation.replace('SuccessSignUp')}/>
    </View>
</View>
  )
}

export default SignUpAddress

const styles = StyleSheet.create({
    page:{flex:1},
    container:{backgroundColor:'white', paddingHorizontal:24, paddingVertical:26, marginTop:24, flex:1},
})