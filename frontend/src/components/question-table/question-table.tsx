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

function createData(questionTitle: string, questionNumber: number, question: string) {
    return { questionTitle, questionNumber, question };
}

const rows = [
    createData(
        'Perfect Secrecy',
        1,
        'Show that the Caesar Cipher exhibits perfect secrecy when: (a) used to encrypt a plaintext restricted to one character in length; and (b) when the key is selected from a uniformly distributed random source. In other words, show (analytically, with a formal probabilities argument) that Pr{P | C} = Pr{P }, where P is the plantext and C is the given ciphertext. Hint: Use Bayes’ Theorem, and determine the terms Pr{C | P } and Pr{C}'
    ),
    createData(
        'One-Time Pad',
        2,
        'The definition of the OTP includes two requirements: (1) the cryptographic key must be a sequence of truly randomly generated bits; and (2) a cryptographic key must never be reused (the “one-time” in the name). Explain why each of these two requirements are strict conditions for perfect secrecy, Give and explain one example of weakness that derive from failing to meet each of these requirements.'
    ),
    createData(
        'Reusing keys with the Vigenere Cipher',
        3,
        'Can we safely reuse an encryption key with the Vigenere cipher? (for the question, assume that the cipher is secure; that is, the question refers to any possible issues with reusing the key independently of any cryptanalysis techniques that we’ve seen)'
    ),
    createData(
        'Confusion and Diffusion',
        4,
        'For each of the following cryptographic primitives/tools, explain whether it exhibits confusion, diffusion, and in each case explain why: 1. One-time Pad 2. Triple DES 3. AES'
    ),
];

export interface QuestionTableProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const QuestionTable = ({ className }: QuestionTableProps) => {
    return (
        <TableContainer component={Paper} sx={{ maxWidth: 550, margin: 'auto' }}>
            <Table sx={{ minWidth: 100 }} aria-label="simple table">
                <TableHead>
                    <TableCell align="center">Question</TableCell>
                    <TableCell>Title</TableCell>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.questionNumber}>
                            <TableCell align="center">{row.questionNumber}</TableCell>
                            <Link
                                to={'/questionAnswer'}
                                state={{
                                    questionNumber: row.questionNumber,
                                    questionTitle: row.questionTitle,
                                    question: row.question,
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.questionTitle}
                                </TableCell>
                            </Link>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
