import { DefaultProps } from "../_interfaces";
import styles from "./button.module.scss";

interface IPropsButton extends DefaultProps {
  onClick: () => void;
}

export const Button = ({ onClick, children }: IPropsButton) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};
