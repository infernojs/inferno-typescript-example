import { Component as ComponentOrigin } from 'inferno/core/component';
import { InfernoInput as InfernoInputOrigin, InfernoChildren } from 'inferno/core/implementation';

declare module 'inferno' {
		export class Component<P, S> extends ComponentOrigin<P, S> {
			public refs: {
				[key: string]: any
			};
		}

		export type InfernoInput = InfernoInputOrigin | JSX.Element;
		export function render(
			input: InfernoInput,
			parentDom: Element | SVGAElement | DocumentFragment | HTMLElement | Node | null,
			callback?: Function): InfernoChildren;
}
