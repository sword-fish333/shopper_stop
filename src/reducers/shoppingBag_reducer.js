import {ADD_GROCERY} from '../actions';
import {addToBag} from './helper';
import {REMOVE_GROCERY} from '../actions';

export default function shoppingBag(state=[],action){
    let shoppingBag=[];
    switch (action.type){
        case ADD_GROCERY:

             shoppingBag=[...state,addToBag(action.id)];
            return shoppingBag;
        case REMOVE_GROCERY:
                shoppingBag=state.filter(item=>item.id!==action.id);
                return shoppingBag;
        default:
            return state;
    }
}

