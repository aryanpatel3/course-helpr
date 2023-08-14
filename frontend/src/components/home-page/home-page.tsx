import classNames from 'classnames';
import styles from './home-page.module.scss';
import { TextField } from '@mui/material';

export interface HomePageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const HomePage = ({ className }: HomePageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h2 className={styles.title}>Chasm</h2>
            <div className={styles['home-container']}>
                <h3 className={styles.text}>
                    Search thousands of courses and find study questions{' '}
                </h3>
                <TextField
                    label={'Course Search'}
                    helperText={'Solidy your understanding, Get your questions answered, Help others'}
                    fullWidth={true}
                />
            </div>
        </div>
    );
};
