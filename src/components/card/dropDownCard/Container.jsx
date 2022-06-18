//import type { ReactElement, ReactNode } from "react";
import cn from "classnames";

import styles from "./ContainerModule.css";

// interface Props {
//   centered?: boolean;
//   children: ReactNode;
// }

export default function Container({centered, children}){
  //centered ?"": boolean;
 // children: ReactNode;
  return (
    <div className= {cn(styles.container, {[styles.centered]: centered, })}>
      {children}
    </div>
  );
}