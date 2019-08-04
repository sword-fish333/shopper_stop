import  React,{Component} from 'react';
import {connect} from 'react-redux';

class Stats extends Component {
    constructor(props){
        super(props);
        this.state={
            totalCost:'',
            totalCalories:'',
            totalWeight:''
        }
    }


    cost(){
        let totalCost=0;


        this.props.shoppingBag.forEach(item=>{
            totalCost+=item.cost;
        });

        return totalCost;
    }

    weight(){
        let totalWeight=0;


        this.props.shoppingBag.forEach(item=>{
            totalWeight+=item.weight;
        });

        return totalWeight;
    }

    calories(){
        let totalCalories=0;


        this.props.shoppingBag.forEach(item=>{
            totalCalories+=item.calories;
        });

        return totalCalories;
    }

    render(){

        return(
            <div className="col-md-4">
                <h2 className="text-center">Stats</h2>
                <ul className="list-group">
                    <li className="list-group-item">Cost: ${this.cost()}</li>
                    <li className="list-group-item">Calories: {this.calories()}Kcal</li>
                    <li className="list-group-item">Weight: {this.weight()} mg</li>

                </ul>
            </div>
        )
    }

}
function mapStateToProps(state) {
    return {
        shoppingBag:state.shoppingBag
    }
}
export default connect(mapStateToProps,null)(Stats);