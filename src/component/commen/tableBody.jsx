import React, { Component } from 'react'
import Movies from '../movies'

export default class TableBody extends Component {
    render() {
        return (
            <div>
                <tbody>
                    {movies.map(movie =>{
                        <tr>{columns.map(column=><td></td>)}</tr>
                    })}
                </tbody>
            </div>
        )
    }
}
