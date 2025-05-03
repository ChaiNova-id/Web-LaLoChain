import { create } from "zustand";

type ModalState = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  isOpenAddProperty: boolean;
  openModalAddProperty: () => void;
};

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false, isOpenAddProperty: false }),
  isOpenAddProperty: false,
  openModalAddProperty: () => set({ isOpenAddProperty: true }),
}));
