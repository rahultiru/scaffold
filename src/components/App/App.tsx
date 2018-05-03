import React from 'react';
import Block, { TextSize } from 'yamui/dist/components/Block';
import AppNavigation from 'components/AppNavigation';
import AppMain from 'components/AppMain';

/**
 * Root component of the app.
 */
const App: React.SFC = () => {
  return (
    <Block className="App" textSize={TextSize.MEDIUM}>
      <AppNavigation />
      <AppMain />
    </Block>
  );
};

export default App;
