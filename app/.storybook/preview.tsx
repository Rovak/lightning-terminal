import React from 'react';
import { action } from 'mobx';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '../src/components/theme';
import { Store, StoreProvider } from '../src/store';

/**
 * Create a store with dummy data to use for stories
 */
const store = new Store();

/**
 * Create dummy actions to use for stories
 */
const actions = {
  node: {
    getInfo: () => action('node.getInfo'),
  },
  channel: {
    getChannels: () => action('channel.getChannels'),
  },
  swap: {
    listSwaps: () => action('swap.listSwaps'),
  },
};

/**
 * decorator function to wrap all stories with the necessary providers
 */
addDecorator(storyFn => (
  <StoreProvider store={store} actions={actions}>
    <ThemeProvider>{storyFn()}</ThemeProvider>
  </StoreProvider>
));
