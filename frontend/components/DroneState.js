import { useState, useEffect } from 'react';
import styled from 'styled-components';
import socket from '../socket';
import Battery from './Battery';
import Tilt from './Tilt';

function useDroneState() {
  const [droneState, updateDroneState] = useState({});
  useEffect(() => {
    socket.on('dronestate', updateDroneState);
    return () => socket.removeListener('dronestate');
  }, []);
  return droneState;
}

function useSocket() {
  const [status, updateStatus] = useState('DISCONNECTED');
  useEffect(() => {
    socket.on('status', updateStatus);
    return () => socket.removeListener('status');
  }, []);
  return status;
	
} 

const DroneStateStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 5px;
  .nodeServerStatusHeader {
    grid-column: 1 / -1;
    background: #000000;  //black
    margin: 0;
    font-size: 1rem;
    text-align: center;
    padding: 0.5rem;
    color: white;
  }
`;

const DroneState = () => {
  const status = useSocket();
  const droneState = useDroneState([]);
  return (
    <DroneStateStyles>
      <h2 className="nodeServerStatusHeader">Drone State: {status}</h2>
      <Battery battery={droneState.bat} />
      <Tilt
        pitch={droneState.pitch}
        roll={droneState.roll}
        yaw={droneState.yaw}
        height={droneState.h}
      />
    </DroneStateStyles>	
  );
};

export default DroneState;
