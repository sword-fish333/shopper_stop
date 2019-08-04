import  React,{Component} from 'react';
import {connect} from 'react-redux';
import {removeGroceryById} from '../actions';
import {addPocketMoney} from '../actions';

class ShoppingBag extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    displayShoppingBag(){
        if(this.props.shoppingBag.length>0){
            return     (<ul className="list-group">
            {this.props.shoppingBag.map(item=>{
                 return  <li className="list-group-item" onClick={()=>{
                     this.props.removeGroceryById(item.id);
                     this.props.addPocketMoney(item.id);
                 }} key={item.id}><b>{item.name}</b>
                        -<span className="badge badge-info">$ {item.cost}</span>
                        -
                        <span className="badge badge-warning">{item.calories} Kcal</span>
                        -
                        <span className="badge badge-primary">{item.weight} mg </span>
                    </li>
                })}
            </ul>)
        }else{
          return  <ul className="list-group"> <li className="list-group-item bg-warning text-dark">Please add items to your shopping bag</li>
          </ul>
        }
}
    render(){
        console.log(this.props)
        return(
            <div className="col-md-4">
                <h2 className="text-center">Shopping Bag</h2>

                    {this.displayShoppingBag()}

            </div>
        )
    }

}
function mapStateToProps(state) {
    return {
        shoppingBag:state.shoppingBag
    }
}
export default connect(mapStateToProps,{removeGroceryById,addPocketMoney})(ShoppingBag);