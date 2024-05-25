import styled from 'styled-components';

const Paper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100px;
  background-color: white; 
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  font-size: 10px;
  border-radius: 10px
`;

const MapContainer = styled.div`
  height: 85vh;
  width: 100%;
`;

const MarkerContainer = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 1;
  
  &:hover {
    z-index: 2;
  }
`;

const Pointer = styled.div`
  cursor: pointer;
`;

export { Paper, MapContainer, MarkerContainer, Pointer };