import { create } from 'zustand';

type RecordingStore = {
  isRecording: boolean;
  setRecording: (isRecording: boolean) => void;
};

export const useRecordingStore = create<RecordingStore>((set) => ({
  isRecording: false,
  setRecording: (isRecording) => set({ isRecording }),
}));
