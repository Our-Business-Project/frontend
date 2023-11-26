import { RootState } from '../';
import { CalculatorState } from '../reducers/calculator.reducer';

const selectCalculator = (state: RootState): CalculatorState => state.calc;

export { selectCalculator };
