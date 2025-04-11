import '@mantine/core/styles.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Homepage } from './home/components/Homepage';

import { createTheme, MantineProvider } from '@mantine/core';
import { COLORS } from './styles/vars';

const theme = createTheme({
	fontFamily: "Montserrat",
	fontSizes: {
		sm: "clamp(0.5rem, 2.5vw, 1rem)",
		md: "clamp(0.6rem, 2.6vw, 1.1rem)",
		lg: "clamp(0.9rem, 2.9vw, 1.4rem)"
	},
});

function App() {
  return (
    <div className="App" style={{color: COLORS.prettyGrayBlue}}>
		<MantineProvider theme={theme}>
			<BrowserRouter>
				<Routes>
					<Route path="*" element={<Homepage />} />
				</Routes>
			</BrowserRouter>
		</MantineProvider>
    </div>
  );
}

export default App;
