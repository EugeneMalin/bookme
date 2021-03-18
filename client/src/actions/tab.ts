export enum TabAction {
    Change = 'tab_change'
}

export interface ITabAction {
    type: TabAction,
    value: string
}

export const change = (tabId: string) => {
    return {
        type: TabAction.Change,
        value: tabId
    }
}

export const actions = {
    change
}