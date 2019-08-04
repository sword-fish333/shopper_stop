import grocery from './grocery_reducer';
import shoppingBag from './shoppingBag_reducer';
import {combineReducers} from 'redux';
import pocketMoney from './spending_reducer';
const  rootReducer =combineReducers({
    grocery,shoppingBag,pocketMoney
});

export default rootReducer;