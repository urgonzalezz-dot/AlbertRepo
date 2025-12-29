import { render } from '@testing-library/react';

import Auth0 from './auth0';

describe('Auth0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Auth0 />);
    expect(baseElement).toBeTruthy();
  });
});
