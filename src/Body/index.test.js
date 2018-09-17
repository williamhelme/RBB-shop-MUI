import { loadFeature, defineFeature } from 'jest-cucumber';
import Body from './'
import { shallow } from 'enzyme'

const feature = loadFeature('./src/Body/body.feature', {
  errorOnMissingScenariosAndSteps: true
});

defineFeature(feature, test => {
  test('Loading the App body', ({ given, when, then, pending }) => {
    given('the Body has loaded', () => {
        pending();
    });

  then('there should be a main tag', () => {
        pending();
    });
});
})