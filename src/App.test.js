import React from 'react';
import { render } from '@testing-library/react';
import CompletePage from "./pages/CompletePage";
import OrderPage from "./pages/OrderPage";
import { shallow } from 'enzyme';
test('renders without crashing', () => {
  expect(
    JSON.stringify(
      Object.assign({}, OrderPage, { _reactInternalInstance: 'censored' }),
    ),
  ).toMatchSnapshot();
});

test('renders without crashing', () => {
  expect(
    JSON.stringify(
      Object.assign({}, CompletePage, { _reactInternalInstance: 'censored' }),
    ),
  ).toMatchSnapshot();
});
