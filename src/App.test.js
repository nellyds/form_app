import React from 'react';
import { render } from '@testing-library/react';
import CompletePage from "./pages/CompletePage";
import OrderPage from "./pages/OrderPage";
test('renders OrderPage without crashing', () => {
  expect(
    JSON.stringify(
      Object.assign({}, OrderPage, { _reactInternalInstance: 'censored' }),
    ),
  ).toMatchSnapshot();
});

test('renders CompletePage without crashing', () => {
  expect(
    JSON.stringify(
      Object.assign({}, CompletePage, { _reactInternalInstance: 'censored' }),
    ),
  ).toMatchSnapshot();
});

