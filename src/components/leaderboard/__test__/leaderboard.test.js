import React from 'react';
import Leaderboard from '../Leaderboard';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Leaderboard tests', () => {
  test('Matches snapshot', () => {
    const tree = renderer.create(
      <Router>
        <Leaderboard />
      </Router>,
    );
    expect(tree).toMatchSnapshot();
  });
});
