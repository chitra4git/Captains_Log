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
         {logs.map((p) =>{
                 return(
                <li>
                {/* <a href={`/logs/${log.id}`}> {log.title} <br/>
                </a> */}
                    {/* <form action={`/logs/${p.id}?_method=POST`} method="post">

                    </form> */}
                    The <a href={`/logs/${p.id}`}>{p.title}</a> is {" "}
                    {p.entry}
                    {p.shipIsBroken
                      ? ` Yes, it is bronken`
                      :  ` No, it is not broken`}
                    <br/>
                    <nav>
                    <a href={`/logs/${p.id}/edit`}>Edit {p.title}</a>
                    </nav>
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
