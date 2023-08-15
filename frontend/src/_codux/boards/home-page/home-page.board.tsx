import { createBoard } from '@wixc3/react-board';
import { HomePage } from '../../../components/home-page/home-page';

export default createBoard({
    name: 'HomePage',
    Board: () => <HomePage />,
    environmentProps: {
        canvasHeight: 816,
        canvasWidth: 1105,
        windowHeight: 805,
    },
});
