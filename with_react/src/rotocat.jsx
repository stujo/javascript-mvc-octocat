
var RotoCatDiv = React.createClass({
  getInitialState: function(){
    return {rotation: 0}
  },
  updateModel: function(model){
    this.setState({rotation: model.getRotation()});
  },
  render: function() {
    var styleValue = {
      transform: 'rotate(' + this.state.rotation + 'deg)',
      webkitTransform: 'rotate(' + this.state.rotation + 'deg)'
    }; 
    return (<div className="cat" style={styleValue}></div>);
  }
});

var RotoCatStatus = React.createClass({
  getInitialState: function(){
    return {rotation: 0}
  },
  updateModel: function(model){
    this.setState({rotation: model.getRotation()});
  },
  render: function() {
    return (<div>
      <button class="pure-button" onClick={this.props.rotate}>Clockwise</button>
      <div className="message">Rotated {this.state.rotation} degrees</div>
      </div>);
  }
});