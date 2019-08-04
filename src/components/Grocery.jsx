import  React,{Component} from 'react';
import  {connect} from 'react-redux';
import {addGroceryById} from '../actions';
import {removePocketMoney} from '../actions';
class Grocery extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){

        return(
            <div className="col-md-4">
            <h2 className="text-center">Grocery Items</h2>
                <ul className="list-group">
                    {this.props.grocery.map((item)=>{
                        return   <li className="list-group-item" onClick={()=>{
                            this.props.addGroceryById(item.id);
                            this.props.removePocketMoney(item.id);

                        }} key={item.id}><b>{item.name}</b>
                        -<span className="badge badge-info">$ {item.cost}</span>
                            -
                            <span className="badge badge-warning">{item.calories} Kcal</span>
                            -
                            <span className="badge badge-primary">{item.weight} mg </span>
                        </li>
                    })}

                </ul>
            </div>
        )
    }

}
function  mapStateToProps(state) {

return {
    grocery:state.grocery
};
}
export default connect(mapStateToProps,{addGroceryById,removePocketMoney})(Grocery);