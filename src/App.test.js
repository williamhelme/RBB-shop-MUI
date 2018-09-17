import React from 'react';
import ReactDOM from 'react-dom';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { shallow } from 'enzyme';
import App from './App';
import Body from './Body/';
import Header from './Header/';
import Footer from './Footer/';

const feature = loadFeature('./src/app.feature');

defineFeature(feature, test => {
  test('Loading the App', ({ given, when, then, pending }) => {
    let Site;
    given('I am testing the app works', () => {
      Site = () => <App />;
    })

    then('the app should render', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Site />, div);
      ReactDOM.unmountComponentAtNode(div);
    })
  })

  test('The app contains a body', ({ given, when, then, pending }) => {
    let Site;
    
    given('the app has rendered', () => {
      Site = shallow(<App />);
    })
    
    then('a body should be available', () => {
      expect(Site.containsMatchingElement(<Body />)).toEqual(true);
    })

  })

  test('The app contains a header', ({ given, when, then, pending }) => {
    let Site;
    
    given('the app has rendered', () => {
      Site = shallow(<App />);
    })

    then('a header should be available', () => {
      expect(Site.containsMatchingElement(<Header />)).toEqual(true);
    })
  })

  test('The app contains a footer', ({ given, when, then, pending }) => {
    let Site;
    
    given('the app has rendered', () => {
      Site = shallow(<App />);
    })

    then('a footer should be available', () => {
      expect(Site.containsMatchingElement(<Footer />)).toEqual(true);
    })
  })
})

