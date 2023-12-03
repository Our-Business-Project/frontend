import { RootState } from '..';
import { CalculationsState } from '../reducers/calculations.reducer';

const selectCalculations = (state: RootState): CalculationsState => state.calculations;

export { selectCalculations };
