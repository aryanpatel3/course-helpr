import classNames from 'classnames';
import styles from './explore-page.module.scss';
import { Navbar } from '../navbar/navbar';
import { CourseTable } from '../course-table/course-table';

export interface ExplorePageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ExplorePage = ({ className }: ExplorePageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Navbar />
            <div className={styles.stripe} />
            <div />
            <div className={styles['table-container']}>
                <CourseTable />
            </div>
        </div>
    );
};
