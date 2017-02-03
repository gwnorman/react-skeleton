var React = require('react');
var ListItem = require('./ListItem.jsx');

var ingredients = [ {"id":1, "text":"ham"}, {"id":2, "text": "cheese"}, {"id":3, "text": "potatos"}, {"id":4, "text": "monkey farts"}, {"id":5, "text": "hairy pits"}];

var List = React.createClass({
   render: function () {
       var listItems = ingredients.map(function (item) {
          return <ListItem key={item.id} ingredient={item.text} />
       });

       return (<ul className="item-list">{listItems}</ul>);
   }
});

module.exports = List;