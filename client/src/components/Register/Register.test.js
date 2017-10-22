import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai';
import renderer from 'react-test-renderer';
import chaiEnzyme from 'chai-enzyme';
import { MemoryRouter } from 'react-router-dom';
import chaiJestSnapshot from 'chai-jest-snapshot';
import sinon from 'sinon';

import Register from './Register';

chai.use(chaiEnzyme());
chai.use(chaiJestSnapshot);

describe('Register component', () => {
  it('renders without crashing', () => {
    shallow(<Register />);
  });

  it('renders correctly - snapshot', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );
    expect(tree).to.matchSnapshot();
  });

  it('Save user input in state', () => {
    const wrapper = shallow(<Register />);
    expect(wrapper).to.have.state('player1', '');
    wrapper
      .find('#player-one')
      .simulate('change', { target: { value: 'player one' } });
    expect(wrapper).to.have.state('player1', 'player one');
    expect(wrapper).to.have.state('player2', '');
    wrapper
      .find('#player-two')
      .simulate('change', { target: { value: 'player two' } });
    expect(wrapper).to.have.state('player2', 'player two');
  });

  it('Show an error when some name is not provided', () => {
    const wrapper = shallow(<Register />);
    const errorMessage = 'Please enter the name of each player';
    expect(wrapper).to.not.have.state('error', errorMessage);
    wrapper
      .find('#player-one')
      .simulate('change', { target: { value: 'player' } });
    wrapper
      .find('#register-form')
      .simulate('submit', { preventDefault: () => {} });
    expect(wrapper).to.have.state('error', errorMessage);
  });

  it('Calls `createPlayers` when both player`s names are provided ', () => {
    const createPlayersSpy = sinon.spy();
    const wrapper = shallow(<Register createPlayers={createPlayersSpy} />);
    wrapper
      .find('#player-one')
      .simulate('change', { target: { value: 'player1' } });
    wrapper
      .find('#player-two')
      .simulate('change', { target: { value: 'player2' } });
    wrapper
      .find('#register-form')
      .simulate('submit', { preventDefault: () => {} });
    expect(createPlayersSpy.calledOnce).to.be.true;
    expect(
      createPlayersSpy.lastCall.calledWith([
        { name: 'player1' },
        { name: 'player2' }
      ])
    ).to.be.true;
  });
});
