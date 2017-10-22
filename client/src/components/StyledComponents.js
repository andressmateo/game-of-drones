import styled from 'styled-components';

export const Card = styled.div`
  background-color: #fff;
  padding: 20px 24px;
  border-radius: 4px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.04);
  text-align: center;
`;

export const Button = styled.button`
  font-size: 16px;
  padding: 8px 16px;
  align-self: center;
  cursor: pointer;
  min-width: 100px;
  color: ${props => (props.gray ? '#4c5656;' : '#fff')};
  background-color: ${props => (props.gray ? '#fff;' : '#3fda97')};
  border-color: ${props => (props.gray ? '#bec6c6;' : 'transparent')};
  border-radius: ${props => (props.gray ? '4px;' : '0')};
`;
