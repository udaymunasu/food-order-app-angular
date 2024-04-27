export interface megaMenuItem {
    label?: string;
    icon?: string;
    command?: (event?: any) => void;
    url?: string;
    routerLink?: any;
    queryParams?: { [k: string]: any };
    items: Array<megaMenuItem>;
    expanded?: boolean;
    disabled?: boolean
    visible?: boolean;
    target?: string;
    routerLinkActiveOptions?: any
    separator?: boolean
    badge?: string;
    badgeStyleClass?: string;
    style?: any;
    styleClass?: string;
    title?: string;
    id?: string;
    automationId?: any;
    prospect?: boolean;
    pilot?:
    | {
        appId: string;
        featureId: string;
        ur1?: string;
        routerLink?: any;
        queryParams?: { [k: string]: any };
    }
    | {
    appId: string;
    featureId: string;
    url?: string;
    routerLink?: any;
    queryParams?: { [k: string]: any };
}[];


}

