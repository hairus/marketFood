import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Gap, Header, TextInput } from '../../components'

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
        <Header title="SIGN IN" subTitle="Find your Best ever Meal" />
        <View style={styles.container}>
            <TextInput label="Email" placeholder="enter your Email" />
            <Gap height={16} />
            <TextInput label="Password" placeholder="enter your password here" />
            <Gap height={24} />
            <Button text="SIGN IN"/>
            <Gap height={12} />
            <Button text="Create New Account" color="#8D92A3" textColor="white" onPress={()=> navigation.navigate('SignUp')} />
        </View>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
    page:{flex:1},
    container:{backgroundColor:'white', paddingHorizontal:24, paddingVertical:26, marginTop:24, flex:1},
})