import React from 'react';
import Game from '../Game';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';

describe('Game page tests', () => {
  test('Matches snapshot', () => {
    const tree = renderer.create(<Game />);
    expect(tree).toMatchSnapshot();
  });
});
