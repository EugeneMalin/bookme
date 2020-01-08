import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { theme } from '../core/theme';
import { IUser } from '../store';
import { Avatar, Text } from 'react-native-paper';

type Props = {
    user?: IUser
};

const UserInfo = ({ user }: Props) => 
    user ? (<View style={styles.container} >
        <Avatar.Text size={theme.sizes.huge} label={user.username.slice(0, 2)}></Avatar.Text>
        <View style={styles.info}>
            <Text style={styles.username}>{user.username}</Text>
            <Text style={styles.email}>{user.email}</Text>
        </View>
    </View>) : <View></View>;

const styles = StyleSheet.create({
  container: {
      display: "flex",
      flexDirection: 'row',
      marginVertical: theme.offsets.s,
      marginHorizontal: theme.offsets.xs
  },
  info: {
      display: 'flex',
      marginLeft: theme.offsets.m
  },
  username: {
      color: theme.colors.primary,
      fontSize: theme.sizes.big
  },
  email: {
      color: theme.colors.secondary,
      fontSize: theme.sizes.medium
  }
});

export default memo(UserInfo);
