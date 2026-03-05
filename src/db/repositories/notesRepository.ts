import { getDb } from '../database';
import { Note } from '@/features/notes/types';

type CreateNoteInput = {
  title: string;
  body: string;
  language: string;
  audioPath: string;
  durationSec: number;
};

function mapRow(row: any): Note {
  return {
    id: row.id,
    title: row.title,
    body: row.body,
    language: row.language,
    audioPath: row.audio_path,
    durationSec: row.duration_sec,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export const notesRepository = {
  async list(): Promise<Note[]> {
    const db = await getDb();
    const [result] = await db.executeSql('SELECT * FROM notes ORDER BY updated_at DESC');
    const notes: Note[] = [];
    for (let i = 0; i < result.rows.length; i += 1) {
      notes.push(mapRow(result.rows.item(i)));
    }
    return notes;
  },

  async getById(id: string): Promise<Note | null> {
    const db = await getDb();
    const [result] = await db.executeSql('SELECT * FROM notes WHERE id = ?', [id]);
    if (result.rows.length === 0) {
      return null;
    }
    return mapRow(result.rows.item(0));
  },

  async createFromTranscript(input: CreateNoteInput): Promise<void> {
    const db = await getDb();
    const now = Date.now();
    const id = `${now}`;
    await db.executeSql(
      `INSERT INTO notes (id, title, body, language, audio_path, duration_sec, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [id, input.title, input.body, input.language, input.audioPath, input.durationSec, now, now],
    );
  },

  async updateBody(id: string, body: string): Promise<void> {
    const db = await getDb();
    await db.executeSql('UPDATE notes SET body = ?, updated_at = ? WHERE id = ?', [body, Date.now(), id]);
  },

  async search(query: string): Promise<Note[]> {
    const db = await getDb();
    const [result] = await db.executeSql(
      `SELECT n.*
       FROM notes_fts f
       JOIN notes n ON n.rowid = f.rowid
       WHERE notes_fts MATCH ?
       ORDER BY rank`,
      [query],
    );
    const notes: Note[] = [];
    for (let i = 0; i < result.rows.length; i += 1) {
      notes.push(mapRow(result.rows.item(i)));
    }
    return notes;
  },
};
