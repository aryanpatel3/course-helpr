import classNames from 'classnames';
import styles from './question-answer.module.scss';
import { TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
export interface QuestionAnswerProps {}

export const QuestionAnswer = () => {
    const { state } = useLocation();
    const { question, questionNumber, questionTitle } = state;
    return (
        <div className={styles['question-container']}>
            <h1>
                Question {questionNumber}: {questionTitle}
            </h1>
            <br></br>
            <p>{question}</p>
        </div>
    );
};
