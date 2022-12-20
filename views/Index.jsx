import { urlencoded } from "express";
import React, { Component } from 'react'
import Captain from "../models/logs";

export default class Index extends Component {
  render() {
    return (
      <div>
        <h1>Captain Index Page</h1>
        <nav>
            <a href='captain/new'>Create a New Log</a>
        </nav>
        {captain.map((p) =>{
            return(
                <li>
                    <form action={`/logs/${p.id}?_method=POST`} method="post">

                    </form>
                </li>
            )
        })}


      </div>
    )
  }
}

module.exports = Index;
