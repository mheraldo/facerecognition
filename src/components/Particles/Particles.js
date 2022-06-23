import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim'; //loads tsparticles-slim
import { loadFull } from 'tsparticles'; //loads tsparticles
import { useCallback, useMemo } from 'react';

// tsParticles Website: particles.js.org/docs/index.html
// tsParticles Repository: https://github.com/matteobruni/tsparticles
const ParticlesComponent = (props) => {
	// using useMemo is not required but recommended since its value is static
	const options = useMemo(() => {
		// using an empty options object give default options where particles are static, color white, no background, 3px radius, and opacity 100%
		return{
			/*background: {
				color: "#000" // this sets the background color for the particles
			},
*/			fullScreen: {
				enable: true, // enabling this allows canvas to take the whole screen enabled by default
				zIndex: -1 // this is the z Index value when fullScreen is enable 0 by default
			},
			interactivity: {
				events: {
					onClick: {
						enable: true, // enable onClick
						mode: 'push' // adds particles onClick
					},
					/*onHover: {
						enable: true, // enables hovering
						mode: 'repulse' // pushes particles away from cursor
					}*/
				}
			},
			modes: {
				push: {
					quantity: 3 // number of particles to add
				},
				repulse: {
					distance: 50 // the distance from cursor to the particles
				}
			},
			particles: {
				links: {
					enable: true, // enables links between particles
					distance: 100 // maximum distance for linking particles
				},
				move: {
					enable: true, // allows particles to move around
					speed: {min: 1, max: 4} // randomizes speed of particles each particles has its own speed that does not change
				},
				opacity: {
					value: {min: 0.3, max: 0.7} // gives opacity value
				},
				size: {
					// value: 3 // will make particle radius 3px
					value: {min: 1, max: 3} //will randomize size of particle
				}

			}
		}
	}, []);

	// useCallback not required but recommended since its value is static
	const particlesInit = useCallback((engine) => {
		loadSlim(engine);
		// loadFull(engine); // for this example slim is enought but choose what you prefer slim is smaller and does not all the plugins and mouse trail features
	},[]);
	// setting an id can be use for identifying particles component, this is useful for multiple instances or reusable components
	return <Particles id={props.id} init={particlesInit} options={options} />
}

export default ParticlesComponent;