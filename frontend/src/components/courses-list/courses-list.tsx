import classNames from 'classnames';
import styles from './courses-list.module.scss';

export interface CoursesListProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const CoursesList = ({ className }: CoursesListProps) => {
    return <div className={classNames(styles.root, className)}>CoursesList</div>;
};
