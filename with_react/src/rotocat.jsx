var RotoCat = React.createClass({

  stateHelper: function() {
    return {rotation: this.props.catModel.getRotation()}
  },
  getInitialState: function(){
    return this.stateHelper();
  },    
  rotate: function(){
    this.props.catModel.turn();
    this.setState({rotation: this.stateHelper()})
  },
  render: function() {
    return (<div>
              <div className="picture_frame" id="cat_container">
                <RotoCatDiv rotation={this.state.rotation} />
              </div>
              <div className="picture_frame" id="message_container">
                <RotoCatStatus rotation={this.state.rotation} rotate={this.rotate} />
              </div>
            </div>);
  }
});

var RotoCatDiv = React.createClass({
  render: function() {
    var styleValue = {
      transform: 'rotate(' + this.props.rotation + 'deg)',
      webkitTransform: 'rotate(' + this.props.rotation + 'deg)'
    }; 
    return (<div className="cat" style={styleValue}></div>);
  }
});

var RotoCatStatus = React.createClass({
  render: function() {
    return (<div>
      <button className="pure-button" onClick={this.props.rotate}>Clockwise</button>
      <div className="message">Rotated {this.props.rotation} degrees</div>
      </div>);
  }
});