import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledCard = styled(Link)`
  border-radius: 10px;
  font-weight: bold;
  background-color: rgba(91, 134, 200, 1);
  color: rgba(255, 255, 255, 1);
  text-align: center;
  border: none;
  text-decoration: none;
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  font-size: 16px;
  &:hover {
    cursor: pointer;
  }
`;
