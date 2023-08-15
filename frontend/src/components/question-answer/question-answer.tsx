import classNames from 'classnames';
import styles from './question-answer.module.scss';
import { TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
export interface QuestionAnswerProps {
    className?: string;
}

export const QuestionAnswer = ({ className }: QuestionAnswerProps) => {
    return (<>
        <h1>Question 1</h1>
        <br></br>
        <div>Lorem Ipsem</div>
        
    </>);
};
