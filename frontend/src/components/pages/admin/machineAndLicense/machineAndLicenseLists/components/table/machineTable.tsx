import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAppSelector } from '../../../../../../../hooks';
import { selectMachineDataList } from '../../../../../../../store/machineSlice';

export const MachineTable = () => {
  const machineItems = useAppSelector(selectMachineDataList);
  return (
    <>
      <StyledMachineTable>
        <thead>
          <tr>
            <th>機器ID</th>
            <th>種別</th>
            <th>機器名</th>
            <th>購入日</th>
            <th>利用者</th>
            <th>最終更新日</th>
            <th>ステータス</th>
          </tr>
        </thead>
        <tbody>
          {machineItems.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  <Link to={`/admin/machine-license/machine/edit/${item.id}`}>
                    {item.symbol}
                  </Link>
                </td>
                <td>{item.category} </td>
                <td>{item.name}</td>
                <td>{item.purchasedAt}</td>
                <td>{item.userName}</td>
                <td>{item.updatedAt} </td>
                <td>{item.usageStatus}</td>
              </tr>
            );
          })}
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
