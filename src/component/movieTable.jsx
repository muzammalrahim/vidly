import React, { Component } from 'react'
import Like from "./commen/like";
import TableHeader from './commen/tableHeader';


class movieTable extends Component {
    columns = [
        {path:"title", label:"Title"},
        {path:"genre.name", label:"Genre"},
        {path:"numberInStock", label:"Stock"},
        {path:"dailyRentalRate", label:"Rate"},
        {key:"like"},
        {key:"delete"},
    ]
   
    render() {
        const {movies, onLike, onDelete, onSort, sortColumn} = this.props
        return (
            <table className="table">
               <TableHeader columns={this.columns} onSort={onSort} sortColumn={sortColumn} />
                <tbody>
                  {movies.map((movie) => {
                    return (
                      <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <Like
                          liked={movie.liked}
                          onLike={() => onLike(movie)}
                        />
                        <td>
                          <button
                            onClick={() => onDelete(movie)}
                            className="btn btn-danger btn-sm"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
        )
    }
}



export default movieTable;