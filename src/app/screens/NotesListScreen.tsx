import React, { useEffect } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { useNotesStore } from '@/state/useNotesStore';
import { notesRepository } from '@/db/repositories/notesRepository';

export function NotesListScreen({ navigation }: NativeStackScreenProps<RootStackParamList, 'NotesList'>): React.JSX.Element {
  const { notes, setNotes } = useNotesStore();

  useEffect(() => {
    notesRepository.list().then(setNotes).catch(() => setNotes([]));
  }, [setNotes]);

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable style={styles.item} onPress={() => navigation.navigate('NoteDetail', { noteId: item.id })}>
            <Text style={styles.title}>{item.title}</Text>
            <Text numberOfLines={2}>{item.body}</Text>
          </Pressable>
        )}
        ListEmptyComponent={<Text>Noch keine Notizen vorhanden.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  item: { paddingVertical: 12, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#aaa' },
  title: { fontWeight: '700', marginBottom: 4 },
});
