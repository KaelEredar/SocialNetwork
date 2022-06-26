export const updateObjectInArray = (items, itemId, objPropertyName, newObjProps) => {
    return items.map(u => {
        if (u[objPropertyName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u;
    })
}