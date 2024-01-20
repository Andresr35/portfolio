import Home from "./components/Home";
import { Preloader } from "./components/Preloader";
import { CanvasSpace, Pt, Group } from "pts";

import { createRoot, useFrame, useThree } from "@react-three/fiber";
import { useState, useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { PerspectiveCamera, FlyControls } from "@react-three/drei";
// import { FlyControls } from "three/examples/jsm/controls/FlyControls.js";
import {
  Lensflare,
  LensflareElement,
} from "three/examples/jsm/objects/Lensflare.js";

import * as THREE from "three";

// function Boxes() {
//   const boxes = [];

//   const BoxDetails = () => {
//     return (
//       <>
//         <boxGeometry args={[250, 250, 250]} />
//         <meshPhongMaterial
//           color={0xffffff}
//           specular={0xffffff}
//           shininess={50}
//         />
//       </>
//     );
//   };

//   for (let i = 0; i < 3000; i++) {
//     boxes.push(
//       <mesh
//         key={i}
//         position={[
//           8000 * (2.0 * Math.random() - 1.0),
//           8000 * (2.0 * Math.random() - 1.0),
//           8000 * (2.0 * Math.random() - 1.0),
//         ]}
//         rotation={[
//           Math.random() * Math.PI,
//           Math.random() * Math.PI,
//           Math.random() * Math.PI,
//         ]}
//         matrixAutoUpdate={false}
//         updateMatrix
//       >
//         <BoxDetails />
//       </mesh>
//     );
//   }
//   return <>{boxes}</>;
// }

// function Controls() {
//   const controlsRef = useRef();
//   useFrame((delta) => controlsRef.current.update(delta));
//   return (
//     <FlyControls
//       ref={controlsRef}
//       movementSpeed={2500}
//       rollSpeed={Math.PI / 6}
//       autoForward={false}
//       dragToLook={false}
//     />
//   );
// }

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
      <ambientLight color={"rgb(244, 246, 247)"} intensity={0.3} />
    </>
  );
}

function App() {
  // (function () {
  //   var space = new CanvasSpace("#hello");
  //   space.setup({
  //     bgcolor: "transparent",
  //     resize: true,
  //   });
  //   var form = space.getForm();
  //   var chain = new Group();
  //   var stretch = false;
  //   // space.add(() => form.point(space.pointer, 10));
  //   space.add({
  //     animate: () => {
  //       // shorten the line when it's not stretching
  //       if (chain.length > (stretch ? 100 : 10)) chain.shift();

  //       form.strokeOnly("rgba(134, 173, 187, 1)", 3).line(chain);
  //       form
  //         .fillOnly("rgba(107, 142, 156, 1)")
  //         .point(space.pointer, 10, "circle");
  //     },

  //     action: (type, px, py) => {
  //       // stretch the line when mouse is down
  //       if (type == "down") stretch = true;
  //       if (type == "up") stretch = false;

  //       // add a point to the line when mouse moves
  //       if (type == "move") chain.push(new Pt(px, py));
  //     },
  //   });

  //   // ----

  //   space.bindMouse().bindTouch().play();
  // })();

  return (
    <>
      <main>
        <div className="threeJS">
          <Canvas>
            <Placecanvas className="threeJS" />
          </Canvas>
        </div>

        {/* <Preloader />
        <Home /> */}
      </main>
    </>
  );
}

export default App;
