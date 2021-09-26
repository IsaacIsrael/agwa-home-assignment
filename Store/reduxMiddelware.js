import { Store } from 'redux'
const reduxMiddelware = Store => next => action => {
    //TODO: I am a little confuse about this code . I dont believe that we should 
    // be here.  maybe we should put this logic in the action.
    if (typeof action === 'function') {
        if ((action.name === 'incCart') || (action.name === 'decCart')) {
            const itemId = Store.getState().itemId.currItemId
            return action(Store.dispatch, Store.getState, itemId)
        } else {
            return action(Store.dispatch, Store.getState)
        }
    }

    //its normal execution
    return next(action)
}

export default reduxMiddelware