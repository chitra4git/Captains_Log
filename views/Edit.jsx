import React, { Component } from 'react'

class Edit extends Component {
  render() {
    const { log } = this.props;
    console.log(log)
    return (
      <div>
        <nav>
            <a href='/logs'>Go back</a>
        </nav>
        <h1>Edit {log.title} </h1>
        <form action={`/logs/${log._id}?_method=PUT`} method="POST">
            Title: <input type='text' name='title' defaultValue={log.title} />{' '}<br/>
            Entry: <input type='textarea' name='entry' defaultValue={log.entry}/>{' '}<br/>
            shipIsBroken: < input type="checkbox" name='shipIsBroken' defaultChecked={log.shipIsBroken}/>{' '}<br/>
            <input type="submit" value="Submit Changes"/>
        </form>
      </div>
    )
  }
}

export default Edit;
