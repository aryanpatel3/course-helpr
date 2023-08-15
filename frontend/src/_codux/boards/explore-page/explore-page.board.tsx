import { createBoard } from '@wixc3/react-board';
import { ExplorePage } from '../../../components/explore-page/explore-page';

export default createBoard({
    name: 'ExplorePage',
    Board: () => <ExplorePage />,
    environmentProps: {
        canvasWidth: 1082,
        canvasHeight: 827,
        windowHeight: 778,
    },
});
