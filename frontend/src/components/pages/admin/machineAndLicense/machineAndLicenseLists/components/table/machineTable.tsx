import styled from 'styled-components';
import { MachineItem } from '../../../../../../../features/types';
import { format } from 'date-fns';
type Props = {
  machineItems: MachineItem[];
};
export const MachineTable = ({ machineItems }: Props) => {
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
            const updatedAt = item.updatedAt.substring(0, 10);
            return (
              <tr key={item.id}>
                <td>{item.symbol}</td>
                <td>{item.category} </td>
                <td>{item.name}</td>
                <td>{item.purchasedAt?.toString()}</td>
                <td>{item.user.firstName + item.user.lastName}</td>
                <td>{updatedAt} </td>
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
