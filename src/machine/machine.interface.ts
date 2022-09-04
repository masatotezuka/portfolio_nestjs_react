import { User } from 'src/user/user.interface';

export interface MachineItems {
  id: number;
  symbol: string;
  name: string;
  category: string;
  purchasedAt: Date;
  usageStatus: string;
  updateAt: Date;
  user?: User;
}
