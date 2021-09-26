export const ADD_CATEGORIES = "ADD_CATEGORIES"

// TODO: In JS we usually use camel case 
export const add_categories = (data) => {
    return { type: ADD_CATEGORIES, newCategories: data }
}