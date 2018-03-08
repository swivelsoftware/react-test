import React, { Component } from 'react'

import { headers, rows } from './data'

import './index.css'

export default class App extends Component {
  state = {
    currentPage: 0,
    pageSize: 20
  }

  onPageChange = currentPage => {
    this.setState({ currentPage })
  }

  onPrevClick = () => {
    this.onPageChange(this.state.currentPage - 1)
  }

  onNextClick = () => {
    this.onPageChange(this.state.currentPage + 1)
  }

  render() {
    const { currentPage, pageSize } = this.state

    const totalPage = Math.ceil(rows.length / pageSize)

    const _rows = rows.slice(currentPage * pageSize, (currentPage + 1) * pageSize)

    return (
      <div className='App'>
        <table>
          <thead>
            <tr>
              {headers.map((header, i) => (
                <th key={`header-${i}`}>{header.value}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {_rows.map((row, i) => (
              <tr key={`row-${i}`}>
                {headers.map((header, j) => (
                  <td key={`item-${i * headers.length + j}`}>{row[header.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className='flex'>
          <span>{currentPage + 1} / {totalPage}</span>
          <div className='flex-grow' />
          <button onClick={this.onPrevClick} disabled={!(currentPage > 0)}>Prev</button>
          <button onClick={this.onNextClick} disabled={!(currentPage < totalPage - 1)}>Next</button>
        </div>
      </div>
    )
  }
}
