import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { shallow, mount } from 'enzyme'
import Body from './'

const feature = loadFeature('./src/Body/body.feature', {
  errorOnMissingScenariosAndSteps: true
});

defineFeature(feature, test => {
  test('Loading the App body', ({ given, when, then, pending }) => {
    let elem;
    given('the Body has loaded', () => {
      elem = shallow(<Body />);
    });

    then('a page title should exist', () => {
        expect(elem.contains(<h1>Welcome to Bex's Bakes</h1>)).toEqual(true);
    });
  });
//https://github.com/airbnb/enzyme/tree/master/docs/api/ReactWrapper
  test('Displaying the content', ({ given, when, then, pending }) => {
    let elem;
    let container;

    given('the Body has loaded', () => {
      elem = mount(<Body />);
    });

    when('it is setup correctly', () => {
      container = elem.findWhere(n => {
        return n.name() == 'Grid' && n.prop('container');
      })
      expect(container.props().spacing).toEqual(24);
    })

    then('a 3 column grid should exist for desktop', () => {
      expect(container.findWhere(n => {
        return n.name() == 'Grid' && n.prop('item');
      }).first().props().lg).toEqual(3)
    })

    then('a 2 column grid should exist for tablet', () => {
      expect(container.findWhere(n => {
        return n.name() == 'Grid' && n.prop('item');
      }).first().prop('md')).toEqual(6)
    })

    then('a 1 column grid should exist for mobile', () => {
      expect(container.findWhere(n => {
        return n.name() == 'Grid' && n.prop('item');
      }).first().prop('sm')).toEqual(12)
    })
  })
})
