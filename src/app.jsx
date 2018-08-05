import React from 'react';

// ReactKeyWork and ReactLifeCycles are just components to check
/* import ReactKeyWork from './components/ReactKeyWork';
import ReactLifeCycles from './components/ReactLifecycles'; */
import TodoApp from './components/TodoApp';

import 'normalize.css';

import 'styles/base/_main.sass'; // Global styles
import 'styles/base/_common.sass'; // Global styles
import styles from './app.sass'; // Css-module styles

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Navigation />
				<div>
					<h1>It Works!</h1>
					<p>
						This React project just works including <span className="redBg">module</span> local styles.
					</p>
					<p>Enjoy!</p>
				</div> */}

        {/* <ReactKeyWork /> */}
        {/* <ReactLifeCycles /> */}
        <TodoApp />
      </div>
    );
  }
}
