import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { useRecordingStore } from '@/state/useRecordingStore';
import { audioService } from '@/services/audioService';
import { transcriptionService } from '@/services/transcriptionService';
import { notesRepository } from '@/db/repositories/notesRepository';

export function RecordScreen({ navigation }: NativeStackScreenProps<RootStackParamList, 'Record'>): React.JSX.Element {
  const { isRecording, setRecording } = useRecordingStore();

  const toggleRecording = async (): Promise<void> => {
    if (!isRecording) {
      await audioService.startRecording();
      setRecording(true);
      return;
    }

    const audioPath = await audioService.stopRecording();
    setRecording(false);

    const body = await transcriptionService.transcribe(audioPath);
    await notesRepository.createFromTranscript({
      title: body.slice(0, 40) || 'Neue Notiz',
      body,
      audioPath,
      language: 'de',
      durationSec: 0,
    });

    Alert.alert('Fertig', 'Transkription lokal gespeichert.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Offline Sprach-Notizen</Text>
      <Button title={isRecording ? 'Aufnahme stoppen' : 'Aufnahme starten'} onPress={toggleRecording} />
      <View style={styles.spacer} />
      <Button title="Notizen anzeigen" onPress={() => navigation.navigate('NotesList')} />
      <View style={styles.spacer} />
      <Button title="Einstellungen" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16, gap: 8 },
  title: { fontSize: 22, fontWeight: '600', marginBottom: 16, textAlign: 'center' },
  spacer: { height: 8 },
});
