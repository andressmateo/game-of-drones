import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import chaiJestSnapshot from 'chai-jest-snapshot';

chai.use(chaiEnzyme());
chai.use(chaiJestSnapshot);

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders correctly - snapshot', () => {
  const tree = renderer.create(<App />);
  expect(tree).to.matchSnapshot();
});
