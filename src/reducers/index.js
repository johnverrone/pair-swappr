const initialState = {
    developers: ['John', 'Neil', 'Omie', 'Sheen', 'Margo', 'Yuriy', 'Chip', 'Sydney', 'Anushka'],
    pairs: {
        pair1: ['',''],
        pair2: ['',''],
        pair3: ['',''],
        pair4: ['','']
    }
}


export default (state = initialState, action) => {
  switch (action.type) {
    case 'SWAP_PAIRS':
        const randomDeveloper = () => {
            return state.developers[Math.floor(Math.random() * state.developers.length)]
        }
        return {
            ...state,
            pairs: {
                pair1: [randomDeveloper(), randomDeveloper()],
                pair2: [randomDeveloper(), randomDeveloper()],
                pair3: [randomDeveloper(), randomDeveloper()],
                pair4: [randomDeveloper(), randomDeveloper()]
            }
        }
    default:
      return state
  }
}