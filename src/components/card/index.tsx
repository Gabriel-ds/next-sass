import classNames from "classnames";
import { DefaultProps } from "../_interfaces";
import styles from "./styles.module.scss";

export const Card = ({ children, className }: DefaultProps) => {
  const cardClasses = classNames(styles.card, className);

  return <div className={cardClasses}>{children}</div>;
};
