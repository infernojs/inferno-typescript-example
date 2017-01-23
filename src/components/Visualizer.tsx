
/*
 * This is example of Inferno functional component
 * Functional components provide great performance but does not have state
 */
export function Visualizer({number: number}) {
	return <div className="visualizer">{number}</div>;
}
