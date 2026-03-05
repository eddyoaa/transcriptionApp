import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { notesRepository } from '@/db/repositories/notesRepository';

export function NoteDetailScreen({ route, navigation }: NativeStackScreenProps<RootStackParamList, 'NoteDetail'>): React.JSX.Element {
  const [body, setBody] = useState('');

  useEffect(() => {
    notesRepository.getById(route.params.noteId).then((note) => setBody(note?.body ?? ''));
  }, [route.params.noteId]);

  return (
    <View style={styles.container}>
      <TextInput style={styles.editor} multiline value={body} onChangeText={setBody} placeholder="Notiz bearbeiten" />
      <Button
        title="Speichern"
        onPress={async () => {
          await notesRepository.updateBody(route.params.noteId, body);
          navigation.goBack();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  editor: { flex: 1, textAlignVertical: 'top', borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginBottom: 12 },
});
