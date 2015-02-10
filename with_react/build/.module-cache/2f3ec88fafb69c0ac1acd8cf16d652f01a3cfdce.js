var RotoCat = React.createClass({displayName: "RotoCat",
  render: function() {
    React.render(
      React.createElement("h1", null, "Hello, world!"),
      document.getElementById('cat')
    );
  }
});