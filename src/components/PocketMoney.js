import React,{Component} from 'react';
import {connect} from 'react-redux';
class PocketMoney extends Component{

    render(){
        return(
            <div className="col-md-12 ">
                <h4 className="text-center">You have  <span className="badge badge-success">$ {this.props.pocketMoney} </span>  money to spend</h4>
                <br/>
                <br/>

            </div>

        )
    }
}
function mapStateToProps(state) {
    return {
        pocketMoney:state.pocketMoney

    }

}
export  default connect(mapStateToProps,null)(PocketMoney);