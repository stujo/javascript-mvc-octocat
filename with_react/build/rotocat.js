var RotoCatDiv = React.createClass({displayName: "RotoCatDiv",
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
    return (React.createElement("div", {className: "cat", style: styleValue}));
  }
});

var RotoCatStatus = React.createClass({displayName: "RotoCatStatus",
  getInitialState: function(){
    return {rotation: 0}
  },
  updateModel: function(model){
    this.setState({rotation: model.getRotation()});
  },
  render: function() {
    return (React.createElement("div", {className: "message"}, "Rotated ", this.state.rotation, " degrees"));
  }
});