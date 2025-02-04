// components/ui/text.tsx
import React from 'react';
import { Text as RNText, TextProps, StyleSheet } from 'react-native';

const Text: React.FC<TextProps> = ({ style, ...props }) => {
  return <RNText style={[styles.defaultText, style]} {...props} />;
};

const styles = StyleSheet.create({
  defaultText: {
    fontSize: 16,
    color: '#000',
  },
});

export default Text;
