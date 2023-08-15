import { createBoard } from '@wixc3/react-board';
import { CourseTable } from '../../../components/course-table/course-table';

export default createBoard({
    name: 'CourseTable',
    Board: () => <CourseTable />
});
