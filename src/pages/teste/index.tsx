import { Button } from "@/components/button/button";
import styles from "@/styles/pages/teste.module.scss";

export default function Teste() {
  return (
    <div className={styles.container}>
      <Button onClick={() => console.log("teste")}>
        <span>Teste</span>
      </Button>
    </div>
  );
}
