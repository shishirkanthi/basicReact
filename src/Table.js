import React from 'react'
import ReactDom from 'react-dom'
import './Table.css'
import { render } from '@testing-library/react'

const TableHeader = () => {
    return(
        <thead>
            <tr>
            <th>Name</th>            
            <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const rows = props.tableData.map((row, index)=>{
        return(
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.removePerson(index)}>Remove</button>
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

class Table extends React.Component {
    render(){
        const {peopleData, removePerson} = this.props;
        console.log(this.props)
        return(
            <table>
                <TableHeader/>
                <TableBody tableData={peopleData} removePerson={removePerson}/>                
            </table>
        )
    }
}

export default Table