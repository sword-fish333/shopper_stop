import {ADD_POCKET_MONEY,REMOVE_POCKET_MONEY} from '../actions';
import  groceryItemsList from '../data/groceryItems.json';
import {addToBag} from './helper';

export default  function pocketMoney(state=50,action){
    switch(action.type){
        case ADD_POCKET_MONEY:
          let item=addToBag(action.id);
          let price=state+item.cost;
            return price;
        case REMOVE_POCKET_MONEY:
            let item2=addToBag(action.id);
            let price2=state-item2.cost;
            return price2;
        default:
            return state;
    }
}