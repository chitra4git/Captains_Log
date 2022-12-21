const React = require('react')

class Show extends React.Component {
  render() {
    const log = this.props.log
    console.log(log)
    return (
      <div>
      <a href='/logs' className='homeLink'>Go To Homepage</a>  
      <h1> {log.title} </h1> <br/>
      <p>{log.entry}</p><br/>
      <p>{log.shipIsBroken? ' Ship is broken, need maintenance' : ' Ship is in good condition'} </p> 
      </div>
    )
  }
}

module.exports = Show;
