import styles from "./styles.module.scss";

export const Main = ({ children, className, ...rest }: any) => {
  let mainClassName = styles.main;

  if (className) {
    mainClassName = `${mainClassName} ${className}`;
  }

  return (
    <div {...rest} className={mainClassName}>
      {children}
    </div>
  );
};
