import { useMemo } from "react"
import {useTable}  from "react-table"
import { COLUMNS } from "./colunms"
import "./ViewerTable.css"

const ViewerTable = (props) => {
    // const [srNo, setSrNo] = useState(1)
    console.log(props.data)
    let sn = 1
    const cities = props.data.map(data => {
        return {
            name: data.name,
            y: data.y,
            sn: sn++
        }
    })
    console.log(cities)

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => cities, [])

    const tableInstance = useTable({
        columns,
        data
    })

    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = tableInstance
    
    return (
        <table {...getTableProps()} className="table_container">
            <thead className="table_head">
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                            ))
                        }
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()} className="table_data">
                {rows.map((row) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {
                                row.cells.map((cell) => {
                                    return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                })
                            }
                        </tr>
                    )
                })}
                
            </tbody>
        </table>
    )
}



export default ViewerTable;