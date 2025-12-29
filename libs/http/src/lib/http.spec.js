import { render } from '@testing-library/react';

import Http from './http';

describe('Http', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Http />);
    expect(baseElement).toBeTruthy();
  });
});
