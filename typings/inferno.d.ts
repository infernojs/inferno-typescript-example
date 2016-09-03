declare function require(name: string): any;

declare namespace __Inferno {
	interface IComponentLifecycle {
		componentWillMount?(): void;
		componentDidMount?(): void;
		componentWillReceiveProps?(nextProps: any, nextContext: any): void;
		shouldComponentUpdate?(nextProps: any, nextState: any, nextContext: any): boolean;
		componentWillUpdate?(nextProps: any, nextState: any, nextContext: any): void;
		componentDidUpdate?(prevProps: any, prevState: any, prevContext: any): void;
		componentWillUnmount?(): void;
	}

	interface IProps {
		children? : Component<any>
	}
	class Component<T extends IProps> implements IComponentLifecycle {
		constructor(props?: T, context?: any);
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

declare function createElement(
	name: string | __Inferno.Component<any>,
	props?: any,
	...children: Array<any>
): any;

declare module createElement {}

declare module 'inferno-create-element' {
	export = createElement;
}

declare module 'inferno-dom' {
	export function render (element: any, props?: {}, children?: any): any;
}

declare module 'inferno-router' {
	interface InfernoRouter {
		Route: __Inferno.Component<any>;
		Router: __Inferno.Component<any>;
		Link: __Inferno.Component<any>,
		browserHistory: any
	}
	export default InfernoRouter;
}

declare class Component<T>  implements __Inferno.IComponentLifecycle {
	constructor(props: T, context: any);
}

declare module Component {}

declare module 'inferno-component' {
	export = Component;
}
