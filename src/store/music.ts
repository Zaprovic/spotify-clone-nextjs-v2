import { create } from "zustand";

interface props {
    isOn: boolean;
    setIsOn: (isOn: boolean) => void;
}

export const useMusicStore = create<props>((set) => ({
    isOn: false,
    setIsOn: (isOn: boolean) => set({ isOn }),
}));
