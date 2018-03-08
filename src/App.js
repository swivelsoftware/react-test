import React, { Component } from 'react';
import { headers, rows } from './data.js';
 
class App extends Component {
  renderRow(row) {
    return headers.map((header) => (<td>{row[header]}</td>))
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
        {
          headers.map((header) => (<th>{header}</th>))
        }
        </tr>
        </thead>
        <tbody>
          {
            rows.map((row) => (<tr>{this.renderRow(row)}</tr>))
          }
          </tbody>
      </table>
    );
  }
}

export default App;
