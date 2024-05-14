import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './src/components/Button/button.component';
import { useState } from 'react';

export default function App() {
  const [loadingPrimary, setLoadingPrimay] = useState(false);
  return (
    <View style={styles.container}>
     <Button
        loading={loadingPrimary}
        onPress={() => setLoadingPrimay(!loadingPrimary)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
