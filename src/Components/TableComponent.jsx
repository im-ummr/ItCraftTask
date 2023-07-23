// TableComponent.js
import React from 'react';
import { Table, Badge } from 'reactstrap';

const TableComponent = ({ data, columns, handleDeleteRecord, isEditing, handleEditUser, handleInputEditChange, handleOnBlur }) => {
  return (
    <Table>
      <thead>
        <tr className="text-center">
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((record, recordIndex) => (
          <tr key={recordIndex} className="text-center">
            <td>{recordIndex + 1}</td>
            {columns.map((column, columnIndex) => (
              <td key={columnIndex} onDoubleClick={() => handleEditUser(recordIndex)}>
                {isEditing && columnIndex !== 0 ? ( // Render input field for inline editing
                  <input
                    type="text"
                    name={column}
                    defaultValue={record[column]}
                    onChange={(e) => handleInputEditChange(e, recordIndex)}
                    onBlur={handleOnBlur}
                  />
                ) : (
                  record[column] // Display regular data
                )}
              </td>
            ))}
            <td>
              <Badge color="danger" className="cursor-pointer" onClick={() => handleDeleteRecord(recordIndex)}>
                Delete
              </Badge>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableComponent;
