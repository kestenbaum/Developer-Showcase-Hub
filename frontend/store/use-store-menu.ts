import {create} from "zustand/react";

interface MenuItem {
    id: number;
    link: string;
    text: string;
}

interface IState {
    headerMenu: MenuItem[];
    open: boolean;
    toggle?: () => void,
    close?: () => void,
}

const State: IState = {
    headerMenu: [
        {
            id: 1,
            link: "hero",
            text: "Home",
        },
        {
            id: 2,
            link: "projects",
            text: "Portfolio",
        },
        {
            id: 3,
            link: "about",
            text: "About",
        },
        {
            id: 4,
            link: "contact",
            text: "Contact",
        }
    ],
    open: false,
}

export const useStoreMenu = create<IState>((set) => ({
    ...State,
    open: false,
    toggle: () => set((state) => ({open: !state.open})),
    close: () => set({open: false}),
}))