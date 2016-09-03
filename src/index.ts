import { render } from 'inferno-dom';
import * as Component from 'inferno-component';
import * as elem from 'inferno-create-element';

const container = document.getElementById('app');

class MyComponent extends Component<any> {
	render() {
		return elem('div', null, 'Hello world!');
	}
}

render(elem(MyComponent), container);
