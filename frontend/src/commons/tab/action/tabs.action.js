export function selectTab(tabId) {
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}
export function showTabs(...tabId) {
    const tabToShow = {}
    tabId.forEach(e => tabToShow[e] = true)

    return {
        type: 'TAB_SHOWED',
        payload: tabToShow
    }

}