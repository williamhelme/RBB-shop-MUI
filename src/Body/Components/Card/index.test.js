import React from 'react';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { shallow, mount } from 'enzyme'
import Card from './'

const feature = loadFeature('./src/Body/Components/Card/card.feature');

defineFeature(feature, test => {
  test('Loading the Card', ({ given, when, then, pending }) => {
    given('the Card has loaded', () => {
      pending();
    });

    then('a title, description and image should exist', () => {
      pending();
    });

    then('buttons for view recipe and view ingredients should exist', () => {
      pending();
    });
  });

  test('Viewing the recipe', ({ given, when, then, pending }) => {
    given('the Card has loaded', () => {
      pending();
    });

    when('it is in a default state', () => {
      pending();
    });

    then('it should not show the recipe', () => {
      pending();
    });

    when('the user selects view recipe', () => {
      pending();
    });

    then('it should show the recipe', () => {
      pending();
    });

    then('it should not show the ingredients', () => {
      pending();
    });
  });

  test('Viewing the ingredients', ({ given, when, then, pending }) => {
    given('the Card has loaded', () => {
      pending();
    });

    when('it is in a default state', () => {
      pending();
    });

    then('it should not show the ingredients', () => {
      pending();
    });

    when('the user selects view ingredients', () => {
      pending();
    });

    then('it should show the ingredients', () => {
      pending();
    });

    then('it should not show the recipe', () => {
      pending();
    });
  });

})