import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import RNFS from 'react-native-fs';

const recorder = new AudioRecorderPlayer();
let currentPath = '';

export const audioService = {
  async startRecording(): Promise<void> {
    currentPath = `${RNFS.DocumentDirectoryPath}/recording-${Date.now()}.m4a`;
    await recorder.startRecorder(currentPath);
  },

  async stopRecording(): Promise<string> {
    await recorder.stopRecorder();
    return currentPath;
  },
};
