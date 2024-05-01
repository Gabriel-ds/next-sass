import classNames from "classnames";
import { DefaultProps } from "../_interfaces";
import styles from "./styles.module.scss";

export const Container: React.FC<DefaultProps> = ({ children, className }) => {
  const containerClasses = classNames(styles.container, className);

  return <div className={containerClasses}>{children}</div>;
};
