# Design System für die transcriptionApp

## 1) Design-Ziele

- **Klarheit zuerst:** Nutzer:innen sollen sofort verstehen, was als Nächstes zu tun ist.
- **Wenige visuelle Ebenen:** ruhige Oberfläche, wenig Ablenkung.
- **Konsequenz:** gleiche Komponenten, gleiche Abstände, gleiches Verhalten.
- **Barrierefreiheit:** hohe Kontraste, klare Fokuszustände, gute Lesbarkeit.

---

## 2) Marken- und Farbstrategie

Die App arbeitet in einem neutralen, professionellen Look mit einer klaren Primärfarbe für Aktionen.

### 2.1 Farbtokens

| Token | Hex | Verwendung |
|---|---|---|
| `--color-bg` | `#F7F8FA` | Seitenhintergrund |
| `--color-surface` | `#FFFFFF` | Karten, Panels, Modals |
| `--color-surface-alt` | `#F1F3F6` | Sekundäre Flächen (z. B. Tabellenkopf) |
| `--color-border` | `#D9DEE6` | Linien, Divider, Input-Rahmen |
| `--color-text` | `#111827` | Primärer Text |
| `--color-text-muted` | `#6B7280` | Sekundärer Text |
| `--color-primary` | `#2563EB` | Primäre Buttons, aktive Zustände |
| `--color-primary-hover` | `#1D4ED8` | Hover für Primäraktionen |
| `--color-success` | `#16A34A` | Erfolg, „Fertig“ |
| `--color-warning` | `#D97706` | Warnhinweise |
| `--color-danger` | `#DC2626` | Fehler, destruktive Aktionen |
| `--color-focus` | `#60A5FA` | Fokus-Ring (Tastatur-Navigation) |

### 2.2 Kontrastregeln

- Standardtext muss mindestens **WCAG AA (4.5:1)** erfüllen.
- Kleine UI-Labels (z. B. Input-Hints) nicht unter `--color-text-muted`.
- Primär-Button-Text immer Weiß (`#FFFFFF`) bei ausreichendem Kontrast.

---

## 3) Typografie

### 3.1 Schriftfamilie

- Primär: `Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif`
- Monospace (für Zeitstempel, Dateinamen optional): `JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace`

### 3.2 Typografische Skala

| Token | Größe | Zeilenhöhe | Gewicht | Einsatz |
|---|---:|---:|---:|---|
| `--text-xs` | 12px | 16px | 500 | Meta-Infos, Helper |
| `--text-sm` | 14px | 20px | 400/500 | Standard UI-Text |
| `--text-md` | 16px | 24px | 400/500 | Default im Content |
| `--text-lg` | 18px | 28px | 600 | Abschnittstitel |
| `--text-xl` | 24px | 32px | 700 | Seitenüberschrift |

### 3.3 Lesbarkeitsrichtlinien

- Fließtext nie kleiner als 14px.
- Lange Textblöcke auf max. 70–80 Zeichen Breite begrenzen.
- Zeilenhöhe bei Fließtext mindestens 1.5.

---

## 4) Spacing-System (8px Raster)

Das UI basiert auf einem 8px-Grid für konsistente Distanzen.

| Token | Wert | Typische Verwendung |
|---|---:|---|
| `--space-1` | 4px | Sehr kleine Abstände (Icon zu Text) |
| `--space-2` | 8px | Zwischen verwandten Elementen |
| `--space-3` | 12px | Compact Groups |
| `--space-4` | 16px | Standard-Innenabstand |
| `--space-5` | 20px | Zwischen kleineren Sektionen |
| `--space-6` | 24px | Karten-Inhalt / Abschnittsabstand |
| `--space-8` | 32px | Größere vertikale Trennung |
| `--space-10` | 40px | Seitenblöcke |
| `--space-12` | 48px | Große Hero/Top-Abstände |

### Spacing-Regeln

- **Innerhalb von Karten:** meistens `16px` oder `24px` Padding.
- **Zwischen Formularfeldern:** `16px`.
- **Zwischen Hauptsektionen:** `32px`.
- **Listenzeilenhöhe:** nicht unter `44px` (Touch- und Klickfreundlichkeit).

---

## 5) Grid und Layout

### 5.1 Seitenlayout

- Max-Breite Content: **1200px**
- Horizontal Padding:
  - Mobile: `16px`
  - Tablet: `24px`
  - Desktop: `32px`

### 5.2 Raster

- Desktop: 12-Spalten-Grid, 24px Gutter
- Tablet: 8-Spalten-Grid, 16px Gutter
- Mobile: 4-Spalten-Grid, 16px Gutter

### 5.3 Informationshierarchie

- Primäre Aktion im sichtbaren Bereich oben rechts oder direkt in Kontextnähe.
- Sekundäraktionen visuell zurücknehmen (Outline/Ghost).
- Komplexe Seiten in klare Bereiche aufteilen: **Navigation → Arbeitsbereich → Details**.

---

## 6) Radius, Schatten, Rahmen

| Token | Wert | Einsatz |
|---|---|---|
| `--radius-sm` | 6px | Inputs, kleine Buttons |
| `--radius-md` | 10px | Karten, Dropdowns |
| `--radius-lg` | 14px | Modals, große Panels |

| Token | Wert | Einsatz |
|---|---|---|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,.06)` | Inputs, leichte Trennung |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,.10)` | Dropdowns/Karten im Fokus |
| `--shadow-lg` | `0 12px 30px rgba(0,0,0,.14)` | Modals/Overlays |

- Standard-Border: `1px solid var(--color-border)`
- Aktiver Zustand: Border wechselt auf `--color-primary`

---

## 7) Kernkomponenten

### 7.1 Buttons

**Varianten**
1. **Primary:** wichtige, nächste Aktion
2. **Secondary (Outline):** unterstützende Aktion
3. **Ghost:** unauffällige Aktionen (z. B. Toolbar)
4. **Danger:** destruktive Aktion

**Größen**
- Sm: Höhe 32px
- Md: Höhe 40px (Default)
- Lg: Höhe 48px

**Interaktionszustände**
- Hover: leichte Abdunklung / Hintergrundwechsel
- Active: minimal dunkler + leichter Inset-Effekt
- Disabled: reduzierte Opazität, kein Shadow, kein Pointer
- Focus: klarer Ring (`2px`)

### 7.2 Inputs

- Höhe: 40px (Default)
- Label immer sichtbar oberhalb des Feldes
- Placeholder nur als Beispiel, nie als Ersatz für Label
- Fehlertext direkt unter Feld, rot + präzise Handlungsempfehlung

### 7.3 Cards

- Padding 24px, Radius md, Border + optional Shadow sm
- Klarer Titelbereich, dann Inhalt, dann optionale Aktionen

### 7.4 Tabellen / Listen

- Zeilenhöhe 44–52px
- Kopfzeile mit `--color-surface-alt`
- Zeilenhover sehr dezent (z. B. `#F9FAFB`)
- Wichtige Status visuell über Badges

### 7.5 Badges / Status Chips

- Neutral, Success, Warning, Danger
- Klein, gut lesbar, keine extrem gesättigten Hintergründe

---

## 8) UX-Prinzipien für hohe Benutzerfreundlichkeit

1. **Weniger Entscheidungen pro Schritt**
   - Große Workflows (Upload → Transkription → Review → Export) in klare Schritte teilen.
2. **Schnelles Feedback**
   - Upload/Verarbeitung immer mit Progress und Restzeit-Schätzung.
3. **Fehlervermeidung statt Fehlerbehandlung**
   - Dateiformat, Länge, Spracheingaben früh validieren.
4. **Sichtbare Systemzustände**
   - „Wird verarbeitet“, „Abgeschlossen“, „Fehlgeschlagen“ eindeutig und konsistent.
5. **Kurze, klare Sprache**
   - Keine technischen Begriffe ohne Nutzen. Buttons mit Verben („Transkription starten“).
6. **Tastatur- und Screenreader-Fokus**
   - Saubere Tab-Reihenfolge, verständliche ARIA-Labels, sichtbarer Fokus.

---

## 9) Beispiel: Token als CSS-Variablen

```css
:root {
  --color-bg: #F7F8FA;
  --color-surface: #FFFFFF;
  --color-surface-alt: #F1F3F6;
  --color-border: #D9DEE6;
  --color-text: #111827;
  --color-text-muted: #6B7280;
  --color-primary: #2563EB;
  --color-primary-hover: #1D4ED8;
  --color-success: #16A34A;
  --color-warning: #D97706;
  --color-danger: #DC2626;
  --color-focus: #60A5FA;

  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;

  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 14px;
}
```

---

## 10) Design-Checkliste (vor jeder UI-Änderung)

- Ist die **primäre Aktion** klar sichtbar?
- Sind Abstände konsistent mit dem 8px-System?
- Ist die Seite auch ohne Farbe (nur Struktur) verständlich?
- Haben alle interaktiven Elemente Hover-, Focus- und Disabled-States?
- Sind Texte kurz, handlungsorientiert und verständlich?
- Ist das Layout auf Mobile genauso nutzbar wie auf Desktop?

