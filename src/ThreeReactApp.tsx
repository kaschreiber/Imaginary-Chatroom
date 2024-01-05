import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import ShaderBackground from "./components/ShaderBackground/ShaderBackground";

const ThreeReactApp = () => {
  return (
    <Canvas
      style={{ position: "absolute" }}
      orthographic={true}
      dpr={window.devicePixelRatio}
    >
      <ShaderBackground />
      {/*<Environment files="pink_sunrise_1k.hdr" background blur={0.6} />*/}
    </Canvas>
  );
};

export default ThreeReactApp;
