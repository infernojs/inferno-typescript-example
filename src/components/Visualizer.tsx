
/*
 * This is example of Inferno functional component
 * Functional components provide great performance but does not have state
 */
export function Visualizer({ value }: { value: string }) {
	return <div className="visualizer">{value}</div>;
}
