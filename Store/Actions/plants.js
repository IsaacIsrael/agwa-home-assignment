export const ADD_PLANTS = "ADD_PLANTS"

// TODO: In JS we usually use camel case 
export const add_plants = (data) => {
    return { type: ADD_PLANTS, plants: data }
}