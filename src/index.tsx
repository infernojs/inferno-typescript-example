import { Component, render, version  } from 'inferno';
import { Incrementer } from './components/Incrementer';

import './index.css';

const container = document.getElementById('app');

class MyComponent extends Component<any, any> {
	private tsxVersion: string;

	constructor(props, context) {
		super(props, context);

		this.tsxVersion = '3.0.3'; /* This is typed value */
	}

	public render() {
		return (
			<div>
				<h1>{`Welcome to Inferno ${version} TSX ${this.tsxVersion}`}</h1>
				<Incrementer name={'Crazy button'} />
			</div>
		);
	}
}

render(<MyComponent />, container);
