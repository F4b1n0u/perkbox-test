import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Job from '../../Jobs/Job';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Job
      id={1}
      onChangeOccupation={() => {}}
      onChangeCompanyName={() => {}}
      onChangeIncome={() => {}}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});


Enzyme.configure({ adapter: new Adapter() });

describe('TextButton', () => {
  it('should pass most props to the underlying implementation', () => {
    const onChangeHandler = jest.fn();


    const component = shallow(
      <Job
        id={1}
        occupationId={'EMPLOYER'}
        companyName={'FBDEV'}
        income={1234}

        onChangeOccupation={onChangeHandler}
        onChangeCompanyName={onChangeHandler}
        onChangeIncome={onChangeHandler}
      />
    );

    expect(component.find('#occupation-select').contains(
      <option
        value={null}
      >
        {'please select an occupation'}
      </option>
    )).toBeTruthy();

    expect(component.find('#occupation-select').contains(
      <option
        key={'EMPLOYEE'}
        value={'EMPLOYEE'}
      >
        {'employee'}
      </option>
    )).toBeTruthy();

    expect(component.find('#occupation-select').contains(
      <option
        key={'EMPLOYER'}
        value={'EMPLOYER'}
      >
        {'employer'}
      </option>
    )).toBeTruthy();
  });
});
