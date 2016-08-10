declare namespace __Inferno {
	interface ComponentLifecycle {
		componentWillMount?(): void;
		componentDidMount?(): void;
		componentWillReceiveProps?(nextProps: any, nextContext: any): void;
		shouldComponentUpdate?(nextProps: any, nextState: any, nextContext: any): boolean;
		componentWillUpdate?(nextProps: any, nextState: any, nextContext: any): void;
		componentDidUpdate?(prevProps: any, prevState: any, prevContext: any): void;
		componentWillUnmount?(): void;
	}
	class Component implements ComponentLifecycle {
		constructor(props?: any, context?: any);
	}
}

declare module 'inferno' {
	interface Inferno {
		createVNode: any,
		createBlueprint: any,
		createVText: any
	}
	export default Inferno;
}

declare module 'inferno-create-element' {
	function createElement(
		name: string | __Inferno.Component,
		props?: any,
		...children: Array<any>
	): any;
	export default createElement;
}

declare module 'inferno-dom' {
	interface InfernoDOM {
		render: any,
		findDOMNode: any,
		mount: any,
		patch: any,
		unmount: any
	}
	export default InfernoDOM;
}

declare module 'inferno-router' {
	interface InfernoRouter {
		Route: __Inferno.Component
		Router: __Inferno.Component,
		Link: __Inferno.Component,
		browserHistory: any
	}
	export default InfernoRouter;
}

declare module 'inferno-component' {
	export default __Inferno.Component;
}