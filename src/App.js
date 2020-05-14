import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './header/Header';
import Content from './section/Content';
import Footer from './footer/Footer';

import './App.css';

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/" component={Content} />

				{/* <Content /> */}
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
