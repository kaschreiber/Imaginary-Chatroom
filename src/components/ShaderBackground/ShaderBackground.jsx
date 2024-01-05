import { useRef } from "react";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import { Vector3 } from "three";

const FragmentMaterial = shaderMaterial(
  {
    time: 0,
    resolution: new Vector3(),
  },
  `
varying vec2 vUv;

void main()	{
  vUv = uv;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
}
`,
  `
  uniform vec3 resolution;
uniform float time;
//experimenting with 3D Gradient noise from: https://www.shadertoy.com/view/Xsl3Dl
#define layers 20 //int how many layers
#define speed .2 //float speed multiplyer
#define scale 2.0 //float scale multiplyer
vec3 hash( vec3 p )
{
	p = vec3( dot(p,vec3(127.1,311.7, 74.7)),
			  dot(p,vec3(269.5,183.3,246.1)),
			  dot(p,vec3(113.5,271.9,124.6)));
	p = -1.0 + 2.0*fract(sin(p)*43758.5453123);

	return p;
}
float noise( in vec3 p )
{
    vec3 i = floor( p );
    vec3 f = fract( p );
	
	vec3 u = f*f*(3.0-2.0*f);

    return mix( mix( mix( dot( hash( i + vec3(0.0,0.0,0.0) ), f - vec3(0.0,0.0,0.0) ), 
                          dot( hash( i + vec3(1.0,0.0,0.0) ), f - vec3(1.0,0.0,0.0) ), u.x),
                     mix( dot( hash( i + vec3(0.0,1.0,0.0) ), f - vec3(0.0,1.0,0.0) ), 
                          dot( hash( i + vec3(1.0,1.0,0.0) ), f - vec3(1.0,1.0,0.0) ), u.x), u.y),
                mix( mix( dot( hash( i + vec3(0.0,0.0,1.0) ), f - vec3(0.0,0.0,1.0) ), 
                          dot( hash( i + vec3(1.0,0.0,1.0) ), f - vec3(1.0,0.0,1.0) ), u.x),
                     mix( dot( hash( i + vec3(0.0,1.0,1.0) ), f - vec3(0.0,1.0,1.0) ), 
                          dot( hash( i + vec3(1.0,1.0,1.0) ), f - vec3(1.0,1.0,1.0) ), u.x), u.y), u.z );
}
void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    //normalized device coordinates from -1 to 1
    vec2 uv = (fragCoord-resolution.xy-.5)/resolution.y;
    //time value
    float t = time*speed;

    uv *= scale;
    float h = noise(vec3(uv*2.,t));
    //uv distortion loop 
  for (int n = 1; n < layers; n++){
      float i = float(n);
    uv -= vec2(0.7 / i * sin(i * uv.y+i + t*5. + h * i) + 0.8, 0.4 / i * sin(uv.x+4.-i+h + t*5. + 0.3 * i) + 1.6);
  }

    uv -= vec2(1.2 * sin(uv.x + t + h) + 1.8, 0.4 * sin(uv.y + t + 0.3*h) + 1.6);


    // Time varying pixel color
    vec3 col = vec3(.25 * sin(uv.x) + 0.75, .15 * sin(uv.x + uv.y) + 0.8, .03 * sin(uv.y) + 0.93)*0.8;

    // Output to screen
    fragColor = vec4(col,1.0);
}

void main() {
  mainImage(gl_FragColor, gl_FragCoord.xy);
}
`,
);

extend({ FragmentMaterial });

const ShaderBackground = () => {
  // const mesh = useRef();
  const materialRef = useRef();
  const { size } = useThree();

  useFrame(() => {
    // Update shader uniform values here if needed
    materialRef.current.material.uniforms.time.value = performance.now() / 1000;
  });

  /*  useFrame((state, delta) => {
    mesh.current.material.uniforms.time.value += delta;
  });*/

  return (
    <mesh ref={materialRef}>
      <planeGeometry args={[size.width, size.height]} />
      {/*<creationMaterial resolution={[size.width, size.height, 1]} />*/}
      <fragmentMaterial resolution={[size.width, size.height, 1]} />
    </mesh>
  );
};

export default ShaderBackground;
