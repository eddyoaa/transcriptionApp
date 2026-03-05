import { sttBridge } from '@/native/sttBridge';

export const transcriptionService = {
  async transcribe(audioPath: string): Promise<string> {
    return sttBridge.transcribeFromFile(audioPath);
  },
};
