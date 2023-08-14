import { createBoard } from '@wixc3/react-board';
import { CoursesList } from '../../../components/courses-list/courses-list';

export default createBoard({
    name: 'CoursesList',
    Board: () => <CoursesList />
});
