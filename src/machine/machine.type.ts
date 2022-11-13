import { User } from 'src/user/user.type';

export type MachineItem = {
  id: number;
  symbol: string;
  name: string;
  category: string;
  purchasedAt: Date;
  usageStatus: string;
  updatedAt: Date;
  user?: User;
};
