import { Image, StyleSheet, Platform, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import UserProfile from '@/app/(tabs)/profile';
import { useState } from 'react';

export default function IndexScreen() {
  const [buttonColor, setButtonColor] = useState('');
  const [count, setCount] = useState(0);
  const [direction, setDirection] = useState('inc');

  const buttonBackground = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    setButtonColor(`#${randomColor}`);
    if(direction ==='inc'){
      setCount(count + 1);
    }
    else{
      setCount(count - 1);
    }
    if (count === 4) {
      setDirection('dec');
    } else if(count === 1) {
      setDirection('inc')
    }
  }
  
  // const buttonBackground = () => {
  //   const randomColor = Math.floor(Math.random()*16777215).toString(16);
  //   setButtonColor(`#${randomColor}`);
  //   if(direction ==='inc'){
  //     setCount((ov)=> {
  //       ov++;
  //       changeDirection(ov)
  //       return ov;
  //     });
  //   }
  //   else{
  //     setCount((ov)=> {
  //       ov--;
  //       changeDirection(ov)
  //       return ov;
  //     });
  //   }

  // }
  // const changeDirection = (nbr : number) => {
  //   if (nbr === 5) {
  //     setDirection('dec');
  //   } else if(nbr === 0) {
  //     setDirection('inc')
  //   }
  // }
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Hey</ThemedText>

        <HelloWave />
        <ThemedText type="title">Counter {count}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"></ThemedText>
        <Button title="Change Color" onPress={buttonBackground} color={buttonColor} />
      </ThemedView>
     
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

