import { Environment, Lightformer, SpotLight } from '@react-three/drei'

const StudioLights = () => {    
  return (
    <group name="studio-lights">

      <Environment resolution={512}>
        <Lightformer
          form="rect"
          intensity={2.5}
          position={[-8, 4, 4]}
          scale={[12, 10]}
          rotation-y={Math.PI / 2}
          color="#ffffff"
        />

        <Lightformer
          form="rect"
          intensity={3}
          position={[0, 5, -10]}
          scale={[20, 10]}
          rotation-y={0}
          color="#e0e0ff"
        />

        <Lightformer
          form="circle"
          intensity={0.8}
          position={[0, -4, 0]}
          scale={20}
          color="#ffffff"
        />
      </Environment>

      <SpotLight
        position={[5, 10, 8]}
        angle={0.35}
        penumbra={1}
        intensity={3}
        distance={30}
        castShadow
      />
      <SpotLight
        position={[-5, 8, 5]}
        angle={0.4}
        penumbra={1}
        intensity={2.2}
        distance={25}
        castShadow
      />
      <SpotLight
        position={[0, 15, 10]}
        angle={0.5}
        penumbra={0.8}
        intensity={2.5}
        distance={40}
        castShadow
      />

    </group>
  )
}

export default StudioLights
