import { RootState } from '..';
import { CalcDataState } from '../reducers/calcData.reducer';

const selectCalcData = (state: RootState): CalcDataState => state.calcData;

export { selectCalcData };
