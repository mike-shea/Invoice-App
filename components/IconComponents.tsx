import React from 'react';

interface IconSVGProps {
  initialPxSize?: number;
  classGroup?: string;
  className?: string;
}

export function MoonSvg(props: IconSVGProps) {
  return (
    <svg
      className={props.classGroup}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        className={props.className}
        d="M13.019 21.998C9.29 21.998 5.706 19.905 3.987 16.325C2.831 13.917 2.682 11.203 3.568 8.683C4.454 6.163 6.268 4.139 8.676 2.983C10.219 2.242 11.937 1.91 13.652 2.023L14.034 3.024C10.611 4.423 9.031 9.71 10.574 12.925C11.967 15.826 15.984 18.924 20.585 16.937L21.192 17.732C20.209 19.139 18.873 20.274 17.331 21.014C15.939 21.681 14.467 21.997 13.019 21.998Z"
        fill="#353535"
      />
    </svg>
  );
}

export function ExpandMoreSvg(props: IconSVGProps) {
  return (
    <svg
      className={props.classGroup}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        className={props.className}
        d="M16.59 8.29498L12 12.875L7.41 8.29498L6 9.70498L12 15.705L18 9.70498L16.59 8.29498Z"
        fill="#353535"
      />
    </svg>
  );
}

export function LogoSvg2(props: IconSVGProps) {
  return (
    <svg
      className={props.classGroup}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        className={props.className}
        d="M17.25 2.5C19.2517 3.6557 20.8162 5.43963 21.7007 7.57509C22.5853 9.71055 22.7405 12.0782 22.1422 14.3109C21.544 16.5435 20.2258 18.5164 18.392 19.9235C16.5582 21.3306 14.3114 22.0933 12 22.0933C9.6886 22.0933 7.44177 21.3306 5.60801 19.9235C3.77425 18.5164 2.45602 16.5435 1.85778 14.3109C1.25955 12.0782 1.41473 9.71056 2.29927 7.57509C3.18381 5.43963 4.74826 3.65571 6.75 2.5L12 11.5933L17.25 2.5Z"
        fill="#353535"
      />
    </svg>
  );
}

export function PlusSvg(props: IconSVGProps) {
  return (
    <svg
      className={props.classGroup}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        className={props.className}
        d="M11 3V11H3V13H11V21H13V13H21V11H13V3H11Z"
        fill="#353535"
      />
    </svg>
  );
}

export function ChevronRightSvg(props: IconSVGProps) {
  return (
    <svg
      className={props.classGroup}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        className={props.className}
        d="M9.70501 6L8.29501 7.41L12.875 12L8.29501 16.59L9.70501 18L15.705 12L9.70501 6Z"
        fill="#353535"
      />
    </svg>
  );
}

export function TrashCanSvg(props: IconSVGProps) {
  return (
    <svg
      className={props.classGroup}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        className={props.className}
        d="M10 2L9 3H4V5H7H17H20V3H15L14 2H10ZM5 7V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V7H5Z"
        fill="#353535"
      />
    </svg>
  );
}
