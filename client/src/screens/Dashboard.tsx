import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import { Navigation } from '../types';
import { connect } from 'react-redux';
import UserInfo from '../components/UserInfo';
import { IUser } from '../store';

type Props = {
  navigation: Navigation;
  user: IUser;
};

const Dashboard = ({ navigation, user }: Props) => (
  <Background>
    <Logo />
    <Header>Let’s start</Header>
    <UserInfo user={user}/>
    <Paragraph>
      Your amazing app starts here. Open you favourite code editor and start
      editing this project.
    </Paragraph>
    <Button mode="outlined" onPress={() => navigation.navigate('HomeScreen')}>
      Logout
    </Button>
  </Background>
);

const state = (state) => ({
  user: state.user
})

export default connect(state)(memo(Dashboard));
