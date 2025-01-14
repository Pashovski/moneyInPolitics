import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Contributions = ({contributions}) => {
    const { organization, amount } = contributions
    return (
        <div>
            <h3>{organization} : <em>${amount}</em> </h3>
        </div>
    )
}

export default Contributions