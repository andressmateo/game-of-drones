import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import renderer from 'react-test-renderer';
import chaiEnzyme from 'chai-enzyme';
import chaiJestSnapshot from 'chai-jest-snapshot';
import sinon from 'sinon';

import Board from './Board';

chai.use(chaiEnzyme());
chai.use(chaiJestSnapshot);

const props = { player: { name: 'player1' }, options: [] };

describe('Board component', () => {
  it('renders without crashing', () => {
    shallow(<Board {...props} />);
  });

  it('renders correctly - snapshot', () => {
    const tree = renderer.create(<Board {...props} />);
    expect(tree).to.matchSnapshot();
  });
});
