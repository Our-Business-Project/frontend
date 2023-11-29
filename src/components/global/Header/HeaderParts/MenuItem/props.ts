export type Props = {
  item: {
    name: string;
    url?: string;
    onClick?: () => void;
  };
  handleClose: () => void;
};
