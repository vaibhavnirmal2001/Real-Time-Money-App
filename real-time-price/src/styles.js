
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1.2rem;
  margin: 2rem auto;
  th {
    background-color: #333;
    color: #fff;
    font-weight: normal;
    text-align: center;
    padding: 0.5rem;
  }
  td {
    padding: 0.5rem;
    text-align: center;
  }
  tr:nth-child(even) {
    // background-color: #f2f2f2;
  }
`;

export default Table;
