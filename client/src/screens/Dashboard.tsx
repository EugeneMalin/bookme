import React, { memo, useState } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import { Navigation } from '../types';
import { connect } from 'react-redux';
import TextInput from '../components/TextInput';
import UserInfo from '../components/UserInfo';
import { IUser, emit } from '../store';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { theme } from '../core/theme';

type Props = {
  navigation: Navigation;
  user: IUser;
};

const Dashboard = ({ navigation, user }: Props) => {
  const [code, setCode] = useState({ value: '', error: '' });
  return (
    <Background>
      <Logo />
      <Header>Just a little thing...</Header>
      <UserInfo user={user}/>
      <Paragraph>
        You can start when you verify your email. If you has code fill it.
        If you havn't recived confirmation you can ask to 
        <TouchableOpacity onPress={() => {
          emit('updateConfirm', {user})
        }}>
            <Text style={styles.link}>recive confirm message again</Text>
          </TouchableOpacity> :)
      </Paragraph>
      <TextInput
        label="Code"
        value={code.value}
        onChangeText={text => setCode({ value: text, error: '' })}
        error={!!code.error}
        errorText={code.error}
        autoCapitalize="none"
      />

      <Button mode="contained" onPress={() => {
        emit('confirm', {user, code: code.value}).then(({success}) => {
          
        })
      }}>
        Confirm
      </Button>
      <Button mode="outlined" onPress={() => navigation.navigate('HomeScreen')}>
        Logout
      </Button>
    </Background>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

const state = (state) => ({
  user: state.user
})

export default connect(state)(memo(Dashboard));
