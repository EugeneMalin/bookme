import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../core/theme';
import { LOGO_TITLE, LOGO_SUBTITLE } from '../core/const';

const Logo = () => (
  <View>
    <Text style={styles.title}>{LOGO_TITLE}</Text>
    <Text style={styles.subtitle}>{LOGO_SUBTITLE}</Text>
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontSize: theme.sizes.huge,
    color: theme.colors.primary,
    fontWeight: 'bold',
    paddingTop: 14,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: theme.sizes.medium,
    color: theme.colors.primary,
    paddingBottom: 14,
    textAlign: 'right'
  }
});

export default memo(Logo);
