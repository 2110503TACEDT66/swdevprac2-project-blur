
import { create } from "zustand";

interface AppointmentModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useAppointmentModal = create<AppointmentModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useAppointmentModal;
