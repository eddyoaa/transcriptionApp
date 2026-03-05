# Feature Backlog – Offline Transkriptions-App

## 1) Extrahierte Funktionen aus der bestehenden App-Beschreibung

### Kernfunktionen (bereits vorhanden in der Referenz-App)
- **100 % Offline-Transkription** direkt auf dem Gerät (iPhone/Mac), ohne Cloud.
- **Audio aufnehmen** in der App (Meetings, Vorlesungen, Ideen).
- **Audio-/Videodateien importieren** aus anderen Apps (z. B. Fotos, Sprachmemos, WhatsApp).
- **Untertitel aus Videos extrahieren** über Transkription importierter Videos.
- **Sperrbildschirm-Widget** für schnellen Aufnahme-Start.
- **Automatische Spracherkennung** mit Unterstützung für **100+ Sprachen**.
- **Export mit Zeitstempeln** in **SRT, VTT, TXT**.
- **Keine Nutzungs-/Aufnahmelimits**.
- **On-device Datenschutz**: keine Cloud-Uploads, kein Internet nötig.
- **Plattformmodell**: Einmalkauf für iOS + Mac.

### Produkt- und Betriebsmerkmale
- Fokus auf **Datenschutz-Positionierung** (keine KI-Cloud-Zusammenfassung).
- **Performance-Kommunikation** (Transkriptionsgeschwindigkeit als Erwartungsmanagement).
- Transparente Einschränkung: iOS-GPU-Limits im Hintergrund können Transkription pausieren.
- Datenhaltung ausschließlich lokal (inkl. Hinweis auf Datenverlust bei App-Löschung).

---

## 2) Feature-Gaps & Brainstorming nützlicher Erweiterungen

> Ziel: Mehr Nutzen für professionelle Workflows, ohne den Offline-/Privacy-Kern zu verlieren.

## P0 – Hoher Impact / zeitnah umsetzen

### 2.1 Projekte, Ordner, Tags, Suche
**Warum:** Bei vielen Transkripten wird Organisation schnell zum Schmerzpunkt.
- Ordner/Workspaces (z. B. „Interviews“, „Kunden“, „Uni“).
- Frei definierbare Tags.
- Volltextsuche über alle Transkripte.
- Filter: Sprache, Datum, Dauer, Quelle (Import/Aufnahme).

### 2.2 Sprechertrennung (Diarization) + Sprecherlabels
**Warum:** Meetings/Interviews sind mit „Speaker 1/2“ deutlich besser nutzbar.
- Automatische Sprecherwechsel-Erkennung.
- Manuelles Umbenennen („Interviewer“, „Gast“, „Kunde“).
- Export mit Sprecherlabels.

### 2.3 Transkript-Editor mit Audio-Sync
**Warum:** Korrekturen sind Kernworkflow nach der Transkription.
- Wort-/Segmentgenaue Navigation (Tippen auf Text springt zur Stelle im Audio).
- Korrigieren, splitten/mergen von Segmenten.
- Anpassbare Zeitstempel-Dichte im Export.

### 2.4 Wort-für-Wort-Timestamps + Confidence Highlighting
**Warum:** Qualitätssicherung und präzisere Untertitel.
- Optionales Word-Level-Timing.
- Unsichere Wörter visuell markieren (Confidence Score).
- Schnelles „zu prüfen“-Review.

### 2.5 Lokales Backup/Restore
**Warum:** Großer Vertrauensgewinn bei lokalem-only Ansatz.
- Verschlüsseltes Backup in Dateien-App / externer Speicher.
- Geplanter Backup-Reminder.
- Restore-Assistent bei Gerätewechsel.

---

## P1 – Mittlerer Impact

### 2.6 Batch-Import & Batch-Transkription
- Mehrere Dateien auf einmal importieren.
- Warteschlange mit Priorisierung.
- Fortschritt je Datei + Gesamtfortschritt.

### 2.7 Erweiterte Export-Optionen
- DOCX / Markdown / JSON (inkl. Metadaten, Sprecher, Confidence).
- Template-basierte Exportformate (z. B. Interview-Protokoll).
- Direkter Export-Shortcut in Zielapps (Notion, Obsidian, Files).

### 2.8 Untertitel-Workflow-Profi-Features
- SRT/VTT Feintuning: maximale Zeilenlänge, CPS, Segmentdauer.
- Untertitel-Preview mit Video.
- Burn-in Export (wenn technisch machbar).

### 2.9 Benutzerdefinierte Fachwortlisten
- Lokales Glossar (Namen, Firmen, Fachbegriffe).
- Domänenspezifische Profile (Medizin, Recht, Technik).
- Verbesserte Erkennung für Eigennamen.

### 2.10 On-device Zusammenfassungen (optional, lokal)
**Wichtig:** Nur wenn komplett lokal möglich.
- Kapitel-/Themen-Zusammenfassung offline.
- Action Items / To-dos extrahieren.
- Entscheidungsprotokoll für Meetings.

---

## P2 – Nice-to-have / Differenzierung

### 2.11 Live-Ansicht während Aufnahme (technisch eingeschränkt)
- „Best effort“-Partial-Transkript während Recording (wenn HW erlaubt).
- Klare UX-Hinweise bei Geräten ohne Support.

### 2.12 Kollaboration ohne Cloud-Zwang
- Lokales Freigabeformat (Projektpaket export/import).
- Versionsvergleich zwischen Transkriptständen.

### 2.13 Qualitätsmetriken & Analytics (lokal)
- WER-Schätzung pro Datei (heuristisch).
- Erkennungsqualität nach Sprache/Akzent als lokaler Report.

### 2.14 Shortcuts/Automationen
- Siri/Shortcuts: „Starte Aufnahme & tagge als Meeting“.
- Automatischer Import aus bestimmten Ordnern.

---

## 3) Nicht-funktionale Anforderungen (für den Backlog ergänzen)

- **Privacy by default:** Keine externen Requests ohne explizite Zustimmung.
- **Performanceziele:** z. B. x-fache Echtzeit je Gerätekategorie.
- **Akkuschonung & Thermik:** längere Jobs stabil verarbeiten.
- **Zuverlässigkeit:** Absturzsichere Warteschlange, Wiederaufnahme nach App-Neustart.
- **Barrierefreiheit:** Dynamic Type, VoiceOver, Kontrastmodi.
- **Internationalisierung:** UI-Sprachen passend zu Transkriptionssprachen.

---

## 4) Konkrete Backlog-Tickets (Startpaket, 2 Sprints)

### Sprint 1 (Fokus: Kernworkflow)
1. Projekt-/Ordnerstruktur + Tagging anlegen.
2. Volltextsuche mit Filtern implementieren.
3. Transkript-Editor mit Audio-Sync MVP.
4. Export um DOCX/Markdown erweitern.
5. Batch-Queue MVP (mehrere Dateien nacheinander).

### Sprint 2 (Fokus: Professionalisierung)
1. Sprechertrennung + manuelle Sprechernamen.
2. Confidence-Markierung + Review-Ansicht.
3. Lokales Backup/Restore MVP.
4. Untertitel-Feintuning (CPS/Zeilenlänge).
5. Shortcuts-Integration für Aufnahme-Start.
