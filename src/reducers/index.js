const initialState = {
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
      return {
          pairs: {
            pair1: ['John','Margo'],
            pair2: ['',''],
            pair3: ['',''],
            pair4: ['','']
        }
      }
    default:
      return state
  }
}