export const sttBridge = {
  async transcribeFromFile(audioPath: string): Promise<string> {
    return `Mock-Transkript für Datei: ${audioPath}`;
  },
};
