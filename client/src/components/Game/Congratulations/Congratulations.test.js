import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import renderer from 'react-test-renderer';
import chaiEnzyme from 'chai-enzyme';
import chaiJestSnapshot from 'chai-jest-snapshot';
import sinon from 'sinon';

import Congratulations from './Congratulations';

chai.use(chaiEnzyme());
chai.use(chaiJestSnapshot);

describe('Congratulations component', () => {
  it('renders without crashing', () => {
    shallow(<Congratulations />);
  });

  it('renders correctly - snapshot', () => {
    const tree = renderer.create(<Congratulations />);
    expect(tree).to.matchSnapshot();
  });

  it('Calls `play again` when is requested', () => {
    const playAgainSpy = sinon.spy();
    const wrapper = shallow(<Congratulations playAgain={playAgainSpy} />);
    wrapper.find('#play-again').simulate('click');
    expect(playAgainSpy.calledOnce).to.be.true;
  });
});
