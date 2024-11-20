export interface ButtonProps {
    text: string;
    onClick?: () => void;
    href?: string;
    type?: "button" | "submit" | "reset"; 
    styleType?: "primary" | "secondary" | "link"; 
    disabled?: boolean; 
    className?: string; 
  }
  