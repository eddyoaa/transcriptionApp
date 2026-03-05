import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function SettingsScreen(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Einstellungen</Text>
      <Text>Modell: Whisper.cpp (Platzhalter)</Text>
      <Text>Sprache: Deutsch</Text>
      <Text>Cloud Sync: deaktiviert</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 8 },
  title: { fontSize: 20, fontWeight: '700' },
});
