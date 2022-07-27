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
  width: 300px;
  height: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  padding: 10px 0px;
  &:hover {
    cursor: pointer;
  }
`;
