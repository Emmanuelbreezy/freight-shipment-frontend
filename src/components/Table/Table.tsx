import React,{useMemo} from 'react';
import { Column, useTable,useSortBy } from 'react-table';

interface TableProps{
    columns:[Object];
    data: [Object];
}

export default function Table(props:any) {
    const data = React.useMemo(
        () => props.data.map((item:any,index:Number) => {
          return {colindex:item}
        }),
        []
      )
    
      const columns = React.useMemo<Column<{col1: string,col2:string,col3:string,col4:string,col5:any}>[]>(
        () => [
          {
            Header: 'Column 1',
            accessor: 'col1', // accessor is the "key" in the data
          },
          
        
        ],
        []
      )
    
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({ columns:columns, data:data },useSortBy)
    
     return (
         <div className="table-responsive">

        <table className="table table-borderless" {...getTableProps()}>
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
                 {...column.getHeaderProps()}
               >
                 {column.render('Header')}
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
             <tr {...row.getRowProps()}>
               {row.cells.map(cell => {
                 return (
                   <td
                     {...cell.getCellProps()}
                   >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
     </div>
     

   )
}
