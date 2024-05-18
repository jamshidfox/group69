import { useState } from 'react';
import RoutesContainer from './components/routes';
import { ThemeProvider } from 'styled-components';
import { mediumLight, lightVersion } from './constants/theme';

function App({ routes }) {
  const [color, setColor] = useState('lightdf');
  return (
    <div className="App">
      <ThemeProvider theme={color == 'light' ? mediumLight : lightVersion}>
        <RoutesContainer routes={routes} />
      </ThemeProvider>
    </div>
  );
}

export default App;
