import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Homepage } from './home/components/Homepage';

import { createTheme, MantineProvider } from '@mantine/core';
import { COLORS } from './styles/vars';

export function App() {

	const theme = createTheme({
		fontFamily: "Montserrat",
		fontSizes: {
			sm: "clamp(0.5rem, 2.5vw, 1rem)",
			md: "clamp(0.6rem, 2.6vw, 1.1rem)",
			lg: "clamp(0.8rem, 2.8vw, 1.3rem)",
			xl: "calc(2 * clamp(0.8rem, 2.8vw, 1.3rem))",
		},
		colors: {
			light: [
				"#f3f5f7",
				"#e7e7e7",
				"#cbccce",
				"#acb1b6",
				"#9299a1",
				"#818a95",
				"#778390",
				"#65717d",
				"#586471",
				"#485765"
			],
			dark: [
				"#f5f5f5",
				"#e8e8e8",
				"#cecece",
				"#b3b3b3",
				"#9b9b9b",
				"#8d8d8d",
				"#858585",
				"#737373",
				"#666666",
				"#585856",
			]
		},
		primaryColor: "dark",
		black: COLORS.prettyGrayBlue,
	});

	return (
		<div className="App">
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
