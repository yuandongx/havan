import {
    Paper,
    Table,
    TableCell,
    TableHead,
    TableRow,
    TableContainer,
    TableBody,
} from "@mui/material";
import type { TableProps } from "./_type";



function Cell(props: { value: string|number, name: string }) {
    console.log(props.value, props.name);
    const { value, name } = props;
    const style = {color: "red"}
    let flag = false;
    let new_value = value;
    if(name.includes('涨跌幅')||name.includes('涨跌额')){
        if (typeof value === 'number'){
            style.color = value > 0 ? 'red' : 'green';
            flag = value !== 0;
        }
        if (name.includes('涨跌幅')){
            new_value = `${value}%`;
        }
    } 
    if(value.toString().toLowerCase() == 'nan'){
        new_value = '- -';
    }
    if(flag){
        return <TableCell style={style}>{new_value}</TableCell>;
    } else {
        return <TableCell >{new_value}</TableCell>;
    }
}


export default function StockTable(props: TableProps) {
    const { columns, data } = props;
    const displayColumns = columns.filter((column) => column.display==true);
    return (
        <Paper>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            {displayColumns.map((column) => (
                                <TableCell key={column.key}>{column.title}</TableCell>
                            ))}
                        </TableRow >
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow key={row._id}>
                                {displayColumns.map((column) => (
                                    <Cell key={`${row._id}-${column.key}`} value={row[column.title]} name={column.title} />
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}


