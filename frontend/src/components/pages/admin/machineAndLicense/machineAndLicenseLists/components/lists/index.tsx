import { useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../../../../../hooks';
import {
  fetchMachines,
  selectAllMachines,
} from '../../../../../../../store/machineSlice';
import { ErrorPage } from '../../../../../common/errorPage';
import { LicenseTable } from '../table/licenseTable';
import { MachineTable } from '../table/machineTable';

type Props = {
  handleToggleTabIndex: (index: number) => void;
};

export const MachineAndLicenseLists = ({ handleToggleTabIndex }: Props) => {
  const machineItems = useAppSelector(selectAllMachines);
  const status = useAppSelector((state) => state.machines.status);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMachines());
  }, [dispatch]);

  if (status === 'rejected') {
    return <ErrorPage></ErrorPage>;
  }
  return (
    <>
      <StyledTabs
        onSelect={(index) => {
          handleToggleTabIndex(index);
        }}
      >
        <TabList className="tab-lists">
          <Tab className="tab" tabIndex="0" selectedClassName="active">
            機器
          </Tab>
          <Tab className="tab" tabIndex="1" selectedClassName="active">
            ライセンス
          </Tab>
        </TabList>
        <TabPanel>
          <MachineTable machineItems={machineItems}></MachineTable>
        </TabPanel>
        <TabPanel>
          <LicenseTable></LicenseTable>
        </TabPanel>
      </StyledTabs>
    </>
  );
};

const StyledTabs = styled(Tabs)`
  width: 100%;
  .tab-lists {
    margin: 30px 0px 0px 0px;
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 0px;
    .tab {
      padding: 15px;
      width: 100%;
      text-align: center;
      color: rgba(91, 134, 200, 1);
      background-color: rgba(255, 255, 255, 1);
      border: solid 1px #6f6d6d;
      font-size: 20px;
      font-weight: bold;
      &:hover {
        cursor: pointer;
      }
    }
    .active {
      background-color: rgba(91, 134, 200, 1);
      color: rgba(255, 255, 255, 1);
      font-weight: bold;
      font-size: 20px;
      border: none;
    }
  }
`;
