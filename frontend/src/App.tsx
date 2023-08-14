import { useState } from 'react';
import styles from './App.module.scss';
import { HomePage } from './components/home-page/home-page';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <HomePage />
        </div>
    );
}

export default App;
