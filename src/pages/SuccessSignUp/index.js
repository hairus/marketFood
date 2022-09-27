import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { IlSuccessSignUp } from '../../assets';
import { Button, Gap } from '../../components';

const SuccessSignUp = () => {
  return (
    <View style={styles.page}>
      <IlSuccessSignUp />
      <Gap height={30} />
      <Text style={styles.tittle}> Yeay! Completed </Text>
      <Gap height={6} />
      <Text style={styles.subTitile}> Now you are able to order </Text>
      <Text style={styles.subTitile}> some foods as a self-reward </Text>
      <Gap height={30} />
      <View style={styles.buttonContainer}>
      <Button text={"Find Foods"} />
      </View>
    </View>
  );
};

export default SuccessSignUp;

const styles = StyleSheet.create({
  page:{flex: 1, justifyContent:"center", alignItems:"center"},
  tittle:{color:"#020202", fontFamily:"Poppins-Regular", fontSize:20},
  subTitile:{color:"#8D92A3", fontSize:14, fontFamily:"Poppins-Regular"},
  buttonContainer:{width:"100%", paddingHorizontal:80}
});
