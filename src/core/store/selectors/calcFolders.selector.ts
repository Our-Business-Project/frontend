import { RootState } from '..';
import { CalcFoldersState } from '../reducers/calcFolders.reducer';

const selectCalcFolders = (state: RootState): CalcFoldersState => state.calcFolders;

export { selectCalcFolders };
