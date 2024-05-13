import { render } from '@testing-library/react';
import Header from '../Header';

test('renders Logo on header load', () => {

  const header = render(<Header />);
  console.log(header);
});
