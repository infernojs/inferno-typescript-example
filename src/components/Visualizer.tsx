import './Visualizer.css';

/*
 * This is example of Inferno functional component
 * Functional components provide great performance but does not have state
 */

interface VisualizerProps {
	// value: number; // Changing type to number will throw type error
	value: string;
}

export function Visualizer(props: VisualizerProps) {
	return <div className="visualizer">{props.value}</div>;
}
