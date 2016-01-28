var React = require('react');
var ReactDOM = require('react-dom');

var Portfolio = require('./components/Portfolio'); 

var App = React.createClass({
  getInitialState: function(){
    return null;
  },
  render: function(){
    return (
      <div className="container-fluid body-container">
        <Portfolio />
      </div>
    );
  }
});


ReactDOM.render(
    <App />,
    document.getElementById('app')
)
