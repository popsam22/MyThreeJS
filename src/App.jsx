import { useState, useRef} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Canvas, useFrame } from "@react-three/fiber"


function Box(props) {

  const meshRef = useRef();

  useFrame(()=>{
    meshRef.current.rotation.x +=0.01;
    meshRef.current.rotation.y +=0.02;
    meshRef.current.rotation.z +=0.01;
  }

  )


  return (
    <mesh ref={meshRef}>
      <boxBufferGeometry args ={[4, 3, 4]} />
      <meshStandardMaterial color={'royal blue'}  />
    </mesh>
  );
}  



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Canvas>
        <ambientLight intensity={0.1} />
        <pointLight position={[3, 3, 3]} />
        <Box />
      </Canvas>
    </div>
  )
}

export default App
