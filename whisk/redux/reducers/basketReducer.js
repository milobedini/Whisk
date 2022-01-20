let defaultState = {
  selectedItems: { items: [], restaurantName: '' },
  user: null,
}

let basketReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET': {
      let newState = { ...state }
      if (action.payload.checkboxValue) {
        console.log('Added to cart')

        newState.selectedItems = {
          items: [...newState.selectedItems.items, action.payload],
          restaurantName: action.payload.restaurantName,
        }
      } else {
        console.log('Removed from cart')
        newState.selectedItems = {
          items: [
            ...newState.selectedItems.items.filter(
              (item) => item.title != action.payload.title
            ),
          ],
          restaurantName: action.payload.restaurantName,
        }
      }
      return newState
    }
    case 'EMPTY_BASKET': {
      console.log('Basket emptied')
      return defaultState
    }
    case 'SET_USER':
      return { ...state, user: action.user }
    default:
      return state
  }
}

export default basketReducer
