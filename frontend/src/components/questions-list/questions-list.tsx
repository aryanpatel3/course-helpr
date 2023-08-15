import classNames from 'classnames';
import styles from './questions-list.module.scss';
import { Navbar } from '../navbar/navbar';
import { QuestionTable } from '../question-table/question-table';

export interface QuestionsListProps {
    className?: string;
}

export const QuestionsList = ({ className }: QuestionsListProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Navbar />
            <div className={styles.stripe} />
            <div />
            <div className={styles['table-container']}>
                <QuestionTable />
            </div>
        </div>
    );
};
