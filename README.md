# transcriptionApp

## Ziel
Eine React-Native-App, die Sprachgedanken **komplett offline auf dem Handy** aufnimmt, lokal transkribiert und als durchsuchbare Notizen speichert.

## Empfohlener Tech-Stack (On-Device)

### App-Basis
- **React Native (Bare Workflow, TypeScript)**
- **React Navigation** für Screen-Navigation
- **Zustand** für leichtgewichtiges State-Management

### Audio-Aufnahme
- `react-native-audio-recorder-player`
- Speichern in den App-internen Dokumentpfad (`react-native-fs`)

### Speech-to-Text (lokal)
- **Whisper.cpp** als native Engine (iOS + Android Bridge)
- Modellgröße fürs MVP: `base` oder `small` je nach Geräteklasse
- Job-Queue in JS: Aufnahme -> WAV normalisieren -> Transkription -> Persistierung

### Lokale Datenhaltung
- **SQLite** mit `react-native-sqlite-storage`
- **FTS5** (Full Text Search) auf Transkripttext für schnelle Suche

### Sicherheit / Privacy
- Optional DB-Verschlüsselung (SQLCipher-Variante)
- Schlüssel in **Keychain (iOS)** / **Keystore (Android)**
- Keine Cloud-Sync-Endpunkte im MVP

## Implementierter Stand
- React-Native Einstieg mit `App.tsx`, `index.js`, `app.json`
- Navigation mit 4 Screens: `Record`, `NotesList`, `NoteDetail`, `Settings`
- Services für Aufnahme, lokale Transkriptions-Bridge (Mock) und Export
- SQLite-Schema inkl. FTS5 + Trigger sowie Repository-Layer
- Zustand-Stores für Recording-/Notes-State

## Setup
```bash
npm install
npm run start
npm run android
# oder
npm run ios
```

## Empfohlene Projektstruktur

```text
transcriptionApp/
  src/
    app/
      navigation/
      screens/
        RecordScreen.tsx
        NotesListScreen.tsx
        NoteDetailScreen.tsx
        SettingsScreen.tsx
    features/
      recording/
      transcription/
      notes/
      search/
    db/
      schema.sql
      migrations/
      repositories/
    native/
      sttBridge.ts
    services/
      audioService.ts
      transcriptionService.ts
      exportService.ts
    state/
      useRecordingStore.ts
      useNotesStore.ts
    utils/
  android/
  ios/
```
