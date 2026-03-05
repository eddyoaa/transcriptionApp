import RNFS from 'react-native-fs';
import { Note } from '@/features/notes/types';

export const exportService = {
  async exportAsMarkdown(note: Note): Promise<string> {
    const filename = `${RNFS.DocumentDirectoryPath}/note-${note.id}.md`;
    const content = `# ${note.title}\n\n${note.body}\n`;
    await RNFS.writeFile(filename, content, 'utf8');
    return filename;
  },
};
