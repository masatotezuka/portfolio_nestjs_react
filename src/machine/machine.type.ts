import { User } from 'src/user/user.type';

export type MachineItems = {
  id: number;
  symbol: string;
  name: string;
  category: string;
  purchasedAt: Date;
  usageStatus: string;
  updateAt: Date;
  user?: User;
};
