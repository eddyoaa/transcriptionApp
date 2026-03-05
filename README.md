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

## Lokales Datenmodell (MVP)

### Tabelle `notes`
- `id TEXT PRIMARY KEY`
- `title TEXT NOT NULL`
- `body TEXT NOT NULL`
- `language TEXT NOT NULL DEFAULT 'de'`
- `audio_path TEXT NOT NULL`
- `duration_sec INTEGER NOT NULL`
- `created_at INTEGER NOT NULL`
- `updated_at INTEGER NOT NULL`

### Virtuelle Tabelle `notes_fts`
- FTS5-Index auf `title`, `body`
- Trigger zum Aktualisieren bei Insert/Update/Delete

## End-to-End Ablauf (Offline)
1. User tippt auf „Aufnahme starten“.
2. Audio wird lokal als WAV/M4A gespeichert.
3. Nach Stop startet lokaler Transkriptions-Job.
4. Ergebnistext wird in SQLite gespeichert und in FTS indexiert.
5. User kann Text bearbeiten, suchen und als `.txt/.md` teilen.

## 14-Tage-Plan (praktisch)

### Woche 1
1. React-Native-Basis + Navigation + Screen-Scaffold
2. Audioaufnahme zuverlässig auf iOS/Android
3. SQLite + Migrations + Note CRUD
4. Whisper.cpp Bridge-Prototyp mit statischem Testaudio

### Woche 2
1. Aufnahme -> Transkription -> Speichern Pipeline
2. Notizliste + Detail + Editor
3. Volltextsuche mit FTS5
4. Export (Share Sheet)
5. Hardening: Fehlerszenarien, Abbruch, Retry, Low-Storage

## Definition of Done (MVP)
- Funktioniert komplett im Flugmodus
- Keine Netzwerkcalls in Kernpfaden
- 5-10 Minuten Audio stabil transkribierbar
- Suche liefert in <200 ms Ergebnisse auf typischem Midrange-Gerät
- Export von Notizen als Text möglich

## Nächster Schritt
Wenn du willst, kann ich als Nächstes direkt die initiale Codebasis anlegen:
- React-Native-Projekt mit TypeScript
- 4 Screens + Navigation
- SQLite-Schema + Repository-Layer
- Mock-Transkriptionsservice als Platzhalter für Whisper.cpp
