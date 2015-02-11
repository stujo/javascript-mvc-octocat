var RotoCat = React.createClass({displayName: "RotoCat",

  stateHelper: function() {
    return {rotation: this.props.catModel.getRotation()}
  },
  getInitialState: function(){
    return this.stateHelper();
  },    
  rotate: function(){
    this.props.catModel.turn();
    this.setState(this.stateHelper());
  },
  render: function() {
    return (React.createElement("div", null, 
              React.createElement("div", {className: "picture_frame", id: "cat_container"}, 
                React.createElement(RotoCatDiv, {rotation: this.state.rotation})
              ), 
              React.createElement("div", {className: "picture_frame", id: "message_container"}, 
                React.createElement(RotoCatStatus, {rotation: this.state.rotation, rotate: this.rotate})
              )
            ));
  }
});

var RotoCatDiv = React.createClass({displayName: "RotoCatDiv",
  render: function() {
    var styleValue = {
      transform: 'rotate(' + this.props.rotation + 'deg)',
      webkitTransform: 'rotate(' + this.props.rotation + 'deg)'
    }; 
    return (React.createElement("div", {className: "cat", style: styleValue}));
  }
});

var RotoCatStatus = React.createClass({displayName: "RotoCatStatus",
  render: function() {
    return (React.createElement("div", null, 
      React.createElement("button", {className: "pure-button", onClick: this.props.rotate}, "Clockwise"), 
      React.createElement("div", {className: "message"}, "Rotated ", this.props.rotation, " degrees")
      ));
  }
});