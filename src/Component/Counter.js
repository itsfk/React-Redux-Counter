import React,{ Component } from "react";
import { connect } from "react-redux";
import CounterAction from '../actions/CounterAction'
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
            <MuiThemeProvider>
            <AppBar
            title="Counter Application"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
            <h1>{this.props.counter}</h1>
            <br />
            <button onClick={(e) => this.props.incrmnt()}>
              INCREMENT
              </button>
            <button onClick={(e) => this.props.decrmnt()} style={{textAlign:"center"}}>
              DECREMENT
            </button>
            </MuiThemeProvider>
            </div>
          );
    }
}
 
function mapStateToProps(state) {
    console.log('map state to props',state)
    return {
        counter: state['count']
    }

}
function mapDispatchToProps(dispatch) {
    console.log('map dispatch to props',dispatch)
    return {
        incrmnt:  function(){return dispatch(CounterAction.increment())},
        decrmnt: function(){return dispatch(CounterAction.decrement())}
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
