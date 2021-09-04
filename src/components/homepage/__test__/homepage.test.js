import React from 'react';
import HomePage from '../HomePage';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Homepage tests', () => {
  test('Matches snapshot', () => {
    const tree = renderer.create(
      <Router>
        <HomePage />
      </Router>,
    );
    expect(tree).toMatchSnapshot();
  });
});
