import React from "react";

interface CopyIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const CopyIcon: React.FC<CopyIconProps> = ({ ...props }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.3334 10.75V14.25C13.3334 17.1667 12.1667 18.3334 9.25002 18.3334H5.75002C2.83335 18.3334 1.66669 17.1667 1.66669 14.25V10.75C1.66669 7.83335 2.83335 6.66669 5.75002 6.66669H9.25002C12.1667 6.66669 13.3334 7.83335 13.3334 10.75Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3334 5.75002V9.25002C18.3334 12.1667 17.1667 13.3334 14.25 13.3334H13.3334V10.75C13.3334 7.83335 12.1667 6.66669 9.25002 6.66669H6.66669V5.75002C6.66669 2.83335 7.83335 1.66669 10.75 1.66669H14.25C17.1667 1.66669 18.3334 2.83335 18.3334 5.75002Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
