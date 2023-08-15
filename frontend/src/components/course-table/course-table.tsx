import classNames from 'classnames';
import styles from './course-table.module.scss';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

function createData(name: string, questions: number) {
    return { name, questions };
}

const rows = [
    createData('MATH 119', 18),
    createData('ECE 458', 4),
    createData('MSCI 331', 26),
    createData('MATH 115', 55),
    createData('ECE 106', 39),
];

export interface CourseTableProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const CourseTable = ({ className }: CourseTableProps) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Courses</TableCell>
                        <TableCell align="right">Questions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <Link to={'/questions'}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                            </Link>
                            <TableCell align="right">{row.questions}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
