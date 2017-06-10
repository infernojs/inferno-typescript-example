import { render, version } from 'inferno';
import Component from 'inferno-component';
import { Incrementer } from './components/Incrementer';

const container = document.getElementById('app');

class MyComponent extends Component<any, any> {
	private tsxVersion: number;

	constructor(props, context) {
		super(props, context);

		this.tsxVersion = 2.34; /* This is typed value */
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
