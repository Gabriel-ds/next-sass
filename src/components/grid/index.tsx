import classNames from "classnames";
import { DefaultProps } from "../_interfaces";
import styles from "./styles.module.scss";

export const Grid = ({ children, className, ...rest }: DefaultProps) => {
  const gridClasses = classNames(styles.grid, className);

  return (
    <div {...rest} className={gridClasses}>
      {children}
    </div>
  );
};
