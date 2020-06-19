const redux = require('redux')
const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'

//an action is an object with a type property, 
//action creater is a function returns an action
function buyCake(){
    return{
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

//reducer is a function takes state and aciton returns a new state
//(previousState,action) => newState 
const initialState = {
    numOfCakes: 10
}
const reducer = (state = initialState, action) => {
      switch (action.type) {
        case BUY_CAKE: return {
          ...state,
          numOfCakes: state.numOfCakes - 1
        }
        default: return state
      }
    }
    
const store = createStore(reducer)
console.log('initial state', store.getState())
const unsubscribe = store.subscribe(()=>console.log('updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()