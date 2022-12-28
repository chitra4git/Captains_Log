const React = require('react');

class Index extends React.Component {
  render() {
    const logs = this.props.logs;
    console.log(logs);
    return (
      <html>
        <body>
         <h1>Captain Index Page</h1>
         <nav>
            <a href='/logs/new' className='newButton'>Create a New Log</a>
         </nav>
         <br/>
         <br/>
         {logs.map((p) =>   {
                 return(
                <li>
      
                    Ship Title: <a href={`/logs/${p.id}`}> {p.title}</a>, Entry: {p.entry},
                     Status: {p.shipIsBroken
                      ? ` This ship is bronken`
                      :  ` This ship is in good condition`}
                    <br/>
                    <br/>
                    <nav>
                    <a href={`/logs/${p.id}/edit`}>Edit {p.title}</a>
                    </nav>
                    <br/>
                    <form action={`/logs/${p.id}?_method=DELETE`} method='POST'>
                        <input type='submit' value='DELETE'/>
                    </form>
                    <br/>
                </li>
            )
         })}

        </body>
      </html>
    )
  }
}

module.exports = Index;
