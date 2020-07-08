import { useState, useEffect } from 'react';

export default function useMedia(breakPoint: number) {
	// checking window object to support server side rendering.
	const [isMobileOrTablet, setIsMobileOrTablet] = useState(
		typeof window !== 'undefined' ? window.innerWidth <= breakPoint : false
	);

	useEffect(() => {
		function screenResized() {
			// To make sure that the state is only being updated when it has to be
			// If its a mobile screen, i dont care how smaller it becomes.
			// If its a desktop screen i dont care how larger it becomes.
			if (isMobileOrTablet && window.innerWidth > breakPoint) {
				setIsMobileOrTablet(false);
			} else if (!isMobileOrTablet && window.innerWidth <= breakPoint) {
				setIsMobileOrTablet(true);
			}
		}
		window.addEventListener('resize', screenResized);

		// to remove the event listener when this component is unmounted.
		return () => window.removeEventListener('resize', screenResized);
	}, [isMobileOrTablet]);

	// the return value should be true or false
	return isMobileOrTablet;
}
