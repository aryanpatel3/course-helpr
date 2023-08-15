import { useState } from 'react';
import styles from './App.module.scss';
import { HomePage } from './components/home-page/home-page';
import { Route, Routes } from 'react-router-dom';
import { ExplorePage } from './components/explore-page/explore-page';
import { QuestionsList } from './components/questions-list/questions-list';
import { QuestionAnswer } from './components/question-answer/question-answer';


function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/explore" element={<ExplorePage />} />
                <Route path="/questions" element={<QuestionsList />} />
                <Route path="/questionAnswer" element={<QuestionAnswer />} />
            </Routes>
        </div>
    );
}

export default App;
