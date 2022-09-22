import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap, Header, TextInput } from '../../components'

const SignUp = () => {
    return (
        <View style={styles.page}>
            <Header title="Sign Up" subTitle="Register and Eat" onBack={() => { }} />
            <View style={styles.container}>
                <View style={styles.photo}>
                    <View style={styles.borderPhoto}>
                        <View style={styles.photoContainer}>
                            <Text style={styles.addPhoto}>Add Photo</Text>
                        </View>
                    </View>
                </View>
                <TextInput label="Full Name" placeholder="Type your full name" />
                <Gap height={16} />
                <TextInput label="Email Address" placeholder="Type your email address" />
                <Gap height={24} />
                <TextInput label="Password" placeholder="Type your password" />
                <Gap height={24} />
                <Button text="Continue" />
            </View>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    page: { flex: 1 },
    container: { backgroundColor: 'white', paddingHorizontal: 24, paddingVertical: 26, marginTop: 24, flex: 1 },
    photoContainer: { backgroundColor: "#F0F0F0", padding: 24, width: 90, height: 90, borderRadius: 90 },
    addPhoto: { color: "#8D92A3", fontFamily: "Poppins-Light", fontSize: 14, textAlign: "center" },
    photo: { alignItems: "center", marginTop: 26, marginBottom: 16 },
    borderPhoto: { borderWidth: 1, borderColor: "#8D92A3", width: 110, height: 110, borderRadius: 110, borderStyle: "dashed", justifyContent: "center", alignItems: "center" },
})