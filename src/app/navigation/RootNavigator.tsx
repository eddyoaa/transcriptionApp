import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import { RecordScreen } from '../screens/RecordScreen';
import { NotesListScreen } from '../screens/NotesListScreen';
import { NoteDetailScreen } from '../screens/NoteDetailScreen';
import { SettingsScreen } from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function RootNavigator(): React.JSX.Element {
  return (
    <Stack.Navigator initialRouteName="Record">
      <Stack.Screen name="Record" component={RecordScreen} options={{ title: 'Aufnehmen' }} />
      <Stack.Screen name="NotesList" component={NotesListScreen} options={{ title: 'Notizen' }} />
      <Stack.Screen name="NoteDetail" component={NoteDetailScreen} options={{ title: 'Notiz' }} />
      <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Einstellungen' }} />
    </Stack.Navigator>
  );
}
