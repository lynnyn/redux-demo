const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

//an action is an object with a type property, 
//action creater is a function returns an action
function buyCake(){
    return{
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

function buyIceCream(){
    return{
        type: BUY_ICECREAM
    }
}

//reducer is a function takes state and aciton returns a new state
//(previousState,action) => newState 
// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20
// }

const initialCakeState = {
    numOfCakes : 10
}

const intialIceCreamState = {
    numOfIceCreams:20
}

const cakeReducer = (state = initialCakeState, action) => {
      switch (action.type) {
        case BUY_CAKE: return {
          ...state,
          numOfCakes: state.numOfCakes - 1
        }

        default: return state
      }
    }

    const iceCreamReducer = (state = intialIceCreamState, action) => {
        switch (action.type) {
          case BUY_ICECREAM: return{
              ...state,
              numOfIceCreams:state.numOfIceCreams - 1
          }
  
          default: return state
        }
      }

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const store = createStore(rootReducer)
console.log('initial state', store.getState())
const unsubscribe = store.subscribe(()=>console.log('updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()