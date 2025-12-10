import { create } from "zustand/react";

interface MenuItem {
    id: number;
    link: string;
    text: string;
}

interface IState {
    headerMenu: MenuItem[];
}

const State: IState = {
    headerMenu: [
        {
            id: 1,
            link: "/",
            text: "Home",
        },
        {
            id: 2,
            link: "/portfolio",
            text: "Portfolio",
        },
        {
            id: 3,
            link: "/about",
            text: "About",
        },
        {
            id: 4,
            link: "/contact",
            text: "Contact",
        }
    ]
}

export const useStoreMenu = create<IState>((set) => ({
    ...State,
}))