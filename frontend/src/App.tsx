import { useState } from 'react';
import styles from './App.module.scss';
import { HomePage } from './components/home-page/home-page';
import { Route, Routes } from 'react-router-dom';
import { ExplorePage } from './components/explore-page/explore-page';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/explore" element={<ExplorePage />} />
            </Routes>
        </div>
    );
}

export default App;
