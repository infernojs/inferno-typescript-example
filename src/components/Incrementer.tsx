import {addOne} from '../utils/math';
import Component from 'inferno-component';
import {Visualizer} from './Visualizer';
/* This is example of Inferno Class Component */

interface Props {
	name: string;
}

export class Incrementer extends Component<Props, any> {
	public state: {value: number};

	constructor(props, context) {
		super(props, context);

		this.state = {
			value: 1
		};
	}

	doMath = () => {
		this.setState({
			value: addOne(this.state.value)
		});
	}

	render() {
		// uncomment: example of type verification
		//
		// this.props.name = 1;
		// this.props.bar = 1;

		return (
			<div>
				{this.props.name}
				<button onClick={this.doMath}>Increment</button>
				<Visualizer number={this.state.value + 'foobar'}/>
			</div>
		);
	}
}
