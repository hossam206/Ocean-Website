import { ReactNode } from "react";
type ButtonProps = {
  varient?: "btn-primary" | "btn-secondary" | "btn-outline";
  isfullwidth?: boolean;
  children: ReactNode;
};
const Buttons = ({ varient, isfullwidth, children }: ButtonProps) => {
  return (
    <button className={`btn ${varient} ${isfullwidth ? "w-full" : ""}`}>
      {children}
    </button>
  );
};

export default Buttons;
