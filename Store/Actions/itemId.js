export const SET_ITEM_ID = "SET_ITEM_ID"

// TODO: In JS we usually use camel case 
export const set_item_id = (data) => {
    return { type: SET_ITEM_ID, itemId: data }
}