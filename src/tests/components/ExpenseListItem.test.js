import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

import ExpenseListItem from '../../components/ExpenseListItem';

test('should render expense list item', () => {
    const expense = expenses[0];
    const wrapper = shallow(<ExpenseListItem {...expense}/>);
    expect(wrapper).toMatchSnapshot();
});