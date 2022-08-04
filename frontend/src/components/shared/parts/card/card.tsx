import { StyledCard } from './styledCard';

type Props = {
  path: string;
  text: string;
};

export const Card = ({ path, text }: Props) => {
  return <StyledCard to={path}>{text}</StyledCard>;
};
