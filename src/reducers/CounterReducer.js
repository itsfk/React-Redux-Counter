import CounterAction from "../actions/CounterAction";
 
let initialState={
    count:0
}
export default function CounterReducer(state=initialState,action){
   console.log(action)
   switch(action.type){
    case CounterAction.INCREMENT:
    console.log("increment::Reducer")
    return Object.assign({}, state, { count: state.count + 1 });
    break;
    case CounterAction.DECREMENT:
    console.log("decrement::Reducer")
    return Object.assign({}, state, { count: state.count - 1 });
    break;
default:
    console.log("default::Reducer")
return state;
   }



}