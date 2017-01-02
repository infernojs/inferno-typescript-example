import * as Inferno from 'inferno';

import Component from 'inferno-component';
import elem from 'inferno-create-element';

const container = document.getElementById('app');

class MyComponent extends Component<any, any> {
	render() {
		return elem('div', null, 'Hello world!');
	}
}

Inferno.render(elem(MyComponent, null, null), container);
