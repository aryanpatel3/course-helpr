import classNames from 'classnames';
import styles from './navbar.module.scss';
import { TextField, Button } from '@mui/material';

export interface NavbarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(styles.root, className, styles.navbar)}>
            <h1 className={styles.logo}>Chasm</h1>
            <TextField label={'Course Search'} sx={{ width: '50%', marginRight: '100px' }} />
            <Button variant="outlined" sx={{ width: '10%' }}>
                Log In
            </Button>
            <Button variant="outlined" sx={{ width: '10%' }}>
                Sign Up
            </Button>
        </div>
    );
};
