let defaultState = {
  selectedItems: { items: [], restaurantName: '' },
}

let basketReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET': {
      let newState = { ...state }
      newState.selectedItems = {
        items: [...newState.selectedItems.items, action.payload],
        restaurantName: action.payload.restaurantName,
      }

      console.log('->', newState)
      return newState
    }
    default:
      return state
  }
}

export default basketReducer
