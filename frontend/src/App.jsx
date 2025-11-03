import "./App.css";
import LandingNav from "./components/LandingNav";
import Aurora from "./components/ui/Aurora";
import LightRays from './components/ui/LightRays';

function App() {
	return (
		<>
			{/* <LandingNav /> */}

<div style={{ width: '100%', height: '100vh', position: 'relative', backgroundColor: "black"}}>
  <LightRays
    raysOrigin="top-center"
    raysColor="#00ffff"
    raysSpeed={1.5}
    lightSpread={0.8}
    rayLength={1.2}
    followMouse={true}
    mouseInfluence={0.1}
    noiseAmount={0.1}
    distortion={0.05}
    className="custom-rays"
  />
</div>
		</>
	);
}

export default App;
