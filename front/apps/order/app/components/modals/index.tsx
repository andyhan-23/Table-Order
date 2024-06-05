import { useRecoilValue } from "recoil";
import { MenuDetailModal } from "./menu-detail";
import { modal } from "../../stores/modal";

const Switch = ({ modals }: { modals: { [key: string]: JSX.Element } }) => {
  const modalKeys = useRecoilValue(modal);
  const openedModal = Object.keys(modalKeys).find(
    (key) => modalKeys[key] === true
  );

  return modals[openedModal] || null;
};

export const Modals = () => (
  <Switch
    modals={{
      menuDetail: <MenuDetailModal />,
    }}
  />
);
