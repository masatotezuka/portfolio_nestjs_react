import styled from 'styled-components';

export const LicenseTable = () => {
  return (
    <>
      <StyledLicenseTable>
        <thead>
          <tr>
            <th>機器名</th>
            <th>購入日</th>
            <th>有効期限</th>
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
      </StyledLicenseTable>
    </>
  );
};

const StyledLicenseTable = styled.table`
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
