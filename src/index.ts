import Inferno from 'inferno';
import { render } from 'inferno-dom';
import Component from 'inferno-component';
import elem from 'inferno-create-element';

const container = document.getElementById('app');

class MyComponent extends Component {
	render() {
		return elem('div', null, 'Hello world!');
	}
}

render(elem(MyComponent), container);