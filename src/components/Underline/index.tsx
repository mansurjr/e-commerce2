import type { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface UnderlineLinkProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const UnderlineLink: FC<UnderlineLinkProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      {...props}
      className={`${className} relative inline-block text-sm font-medium  
        before:content-[''] before:absolute before:bottom-[-3px] before:left-0 
        before:w-0 before:h-[2px] before:bg-current 
        before:transition-all before:duration-300 hover:before:w-full`}>
      {children}
    </button>
  );
};

export default UnderlineLink;
