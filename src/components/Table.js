import React from "react";
import '../App.css';

const Table = ({ tableData }) => {
    return(
    <table border="1">
        <thead>
            <tr>
                <th>Name</th>
                <th>Contact No</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {tableData.map((data, index) => (
                <tr key={index}>
                    <td>{data.name}</td>
                    <td>{data.contactno}</td>
                    <td>{data.email}</td>
                </tr>
            ))}
        </tbody>
    </table>
    );
};

export default Table;