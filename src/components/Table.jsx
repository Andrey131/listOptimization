import { useTable } from "react-table";
import React, { useState, useCallback } from "react";
import quickSort from "../functions/quickSort";
import arr from "../data";

const Table = () => {
  const [content, setContent] = useState(arr);
  const data = React.useMemo(() => content, [content]);

  const sortContent = () => {
    let buff = content.map((item) => ({ ...item }));
    setContent(quickSort(buff, 0, buff.length - 1, "description"));
  };

  const changeInput = useCallback((e) => {
    setContent((prevContent) =>
      prevContent.map((item) => {
        return item.id == e.target.id
          ? { ...item, description: e.target.value }
          : item;
      })
    );
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Title",
        accessor: "title",
        Cell: ({ cell: { value } }) => (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>hwrwhw</div>
            {value}
            <div>658uwuj</div>
          </div>
        ),
      },
      {
        Header: "Description",
        accessor: (item) => item,
        Cell: ({ cell: { value } }) => (
          <input
            value={value.description}
            id={value.id}
            onChange={changeInput}
          />
        ),
      },
      {
        Header: "Image",
        accessor: "image",
        maxWidth: 70,
        minWidth: 70,
        Cell: ({ cell: { value } }) => (
          <div>
            <img src={value} width={60} />
          </div>
        ),
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <>
      <button onClick={sortContent}>sort</button>
      <table {...getTableProps()} style={{ border: "solid 1px blue" }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: "solid 3px red",
                    background: "aliceblue",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: "10px",
                        border: "solid 1px gray",
                        background: "papayawhip",
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
