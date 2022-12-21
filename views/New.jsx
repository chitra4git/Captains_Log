const React = require('react');

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>New Logs page</h1>
        <form action='/logs' method='POST'>
            Title: <input type='text' name='title' /><br/>
            Entry: <input type='textarea' name='entry' /><br/>
            shipIsBroken: < input type="checkbox" name='shipIsBroken'/><br/>
            <input type="submit" value="Create Log"/>
        </form>
      </div>
    )
  }
}

module.exports = New;