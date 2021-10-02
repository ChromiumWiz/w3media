export interface SNavProps {
    navData:SNavMain;
}

export interface SNavMain {
    items?:SNavBarItem[];
    home:SNavBarItemSub;
    profile:SNavBarItemSub;
    login: SNavBarItemSub;
    signup: SNavBarItemSub;
}

export interface SNavBarItem {
    name: string;
    link:string;
    subItem?:SNavBarItemSub[];
}

export interface SNavBarItemSub {
    name:string;
    link:string;
}