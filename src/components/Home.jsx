import "../assets/Home.css";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import { useThree } from "@react-three/fiber";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { PerspectiveCamera, FlyControls } from "@react-three/drei";
import {
  Lensflare,
  LensflareElement,
} from "three/examples/jsm/objects/Lensflare.js";

import * as THREE from "three";

function Placecanvas() {
  const { scene } = useThree();
  const [flare0, flare3] = useLoader(TextureLoader, [
    "/lensflare0.png",
    "/lensflare3.png",
  ]);
  const s = 250;

  const geometry = new THREE.SphereGeometry(s);
  const material = new THREE.MeshPhongMaterial({
    color: "rgb(134, 173, 187)",
    specular: 0xffffff,
    shininess: 20,
  });

  for (let i = 0; i < 1500; i++) {
    const mesh = new THREE.Mesh(geometry, material);

    mesh.position.x = 8000 * (2.0 * Math.random() - 1.0);
    mesh.position.y = 8000 * (2.0 * Math.random() - 1.0);
    mesh.position.z = 8000 * (2.0 * Math.random() - 1.0);

    mesh.rotation.x = Math.random() * Math.PI;
    mesh.rotation.y = Math.random() * Math.PI;
    mesh.rotation.z = Math.random() * Math.PI;

    mesh.matrixAutoUpdate = false;
    mesh.updateMatrix();

    scene.add(mesh);
  }
  function addLight(h, s, l, x, y, z) {
    const light = new THREE.PointLight(0xffffff, 1.5, 2000, 0);
    light.color.setHSL(h, s, l);
    light.position.set(x, y, z);
    scene.add(light);

    const lensflare = new Lensflare();
    lensflare.addElement(new LensflareElement(flare0, 700, 0, light.color));
    lensflare.addElement(new LensflareElement(flare3, 60, 0.6));
    lensflare.addElement(new LensflareElement(flare3, 70, 0.7));
    lensflare.addElement(new LensflareElement(flare3, 120, 0.9));
    lensflare.addElement(new LensflareElement(flare3, 70, 1));
    light.add(lensflare);
  }
  addLight(0.55, 0.9, 0.5, 5000, 0, -1000);
  addLight(0.08, 0.8, 0.5, 0, 0, -1000);
  addLight(0.995, 0.5, 0.9, 5000, 5000, -1000);

  scene.background = new THREE.Color("rgb(107, 142, 156)");
  scene.fog = new THREE.Fog(scene.background, 3500, 15000);

  return (
    <>
      <PerspectiveCamera
        makeDefault
        fov={40}
        aspect={window.innerWidth / window.innerHeight}
        near={1}
        far={15000}
        position={[0, 0, 250]}
      />
      <FlyControls
        movementSpeed={2500}
        rollSpeed={Math.PI / 6}
        autoForward={false}
        dragToLook={false}
      />
      <directionalLight
        intensity={0.15}
        position={[0, -1, 0]}
        color={"hsl(0.1, 0.7, 0.5)"}
      />
      <ambientLight color={"rgb(244, 246, 247)"} intensity={0.5} />
    </>
  );
}

const Home = () => {
  return (
    <div className="home">
      <div className="intro">
        <div className="threeJS">
          <Canvas resize={{ scroll: false }}>
            <Placecanvas className="threeJS" />
          </Canvas>
        </div>
        <div className="hero">
          <p className="hello">Hello, my name is Andres Ruiz</p>
          <p className="software">I am a software engineer.</p>
        </div>
        <a className="arrow" href="#aboutMe">
          <img src="/arrow.svg" alt="arrow" />
        </a>
      </div>
      <AboutMe />
      <Projects />
    </div>
  );
};

export default Home;
