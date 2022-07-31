import styled from 'styled-components';

export const MachineTable = () => {
  return (
    <>
      <StyledMachineTable>
        <thead>
          <tr>
            <th>種別</th>
            <th>機器名</th>
            <th>購入日</th>
            <th>利用者</th>
            <th>最終更新日</th>
            <th>ステータス</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
            <td>test</td>
          </tr>
        </tbody>
      </StyledMachineTable>
    </>
  );
};

const StyledMachineTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  thead {
    tr {
      border-bottom: solid 1px #6f6d6d;
      th {
        padding: 20px 0px;
      }
    }
  }
  tbody {
    tr {
      td {
        text-align: center;
        padding: 20px 0px;
      }
    }
  }
`;
