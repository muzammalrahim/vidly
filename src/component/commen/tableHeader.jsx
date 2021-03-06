import React, { Component } from "react";

export default class TableHeader extends Component {
  raisSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path){
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";}
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => {
           return <th
              key={column.path || column.key}
              onClick={() => this.raisSort(column.path)}
            >
              {column.label}
            </th>;
          } )}
        </tr>
      </thead>
    );
  }
}
