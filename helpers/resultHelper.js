export const mostRecentResultInMonth = (data, sortDate) => {
    for (const value of data) {
        const tempDate = new Date(value['sortDate'])
        if (
            tempDate.getMonth() === sortDate.getMonth() &&
            tempDate.getFullYear() === sortDate.getFullYear() &&
            tempDate - sortDate > 0
        ) {
            return false
        }
    }
    return true
}
