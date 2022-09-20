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

export function SunSvg(props: IconSVGProps) {
  return (
    <svg
      className={props.classGroup}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_121_27)">
        <path
          d="M13.5447 6.45511C12.6452 5.55564 11.3754 4.97363 9.99972 4.97363C8.62406 4.97363 7.35422 5.52919 6.45475 6.45511C5.55528 7.35459 4.97327 8.62443 4.97327 10.0001C4.97327 11.3757 5.55528 12.6456 6.45475 13.5451C7.35422 14.4445 8.62406 15.0265 9.99972 15.0265C11.3754 15.0265 12.6452 14.471 13.5447 13.5451C14.4442 12.6456 15.0262 11.3757 15.0262 10.0001C15.0262 8.62443 14.4706 7.35459 13.5447 6.45511Z"
          className={props.className}
          fill="white"
        />
        <path
          d="M9.99996 3.4127C10.3703 3.4127 10.6878 3.09524 10.6878 2.72487V0.68783C10.6878 0.31746 10.3703 0 9.99996 0C9.62959 0 9.31213 0.31746 9.31213 0.68783V2.72487C9.31213 3.09524 9.62959 3.4127 9.99996 3.4127Z"
          className={props.className}
          fill="white"
        />
        <path
          d="M15.6349 5.3441L17.09 3.88908C17.3545 3.62452 17.3545 3.20124 17.09 2.93669C16.8254 2.67214 16.4021 2.67214 16.1376 2.93669L14.6825 4.39172C14.418 4.65627 14.418 5.07955 14.6825 5.3441C14.9206 5.60865 15.3439 5.60865 15.6349 5.3441Z"
          className={props.className}
          fill="white"
        />
        <path
          d="M19.3121 9.3125H17.2751C16.9047 9.3125 16.5873 9.62996 16.5873 10.0003C16.5873 10.3707 16.9047 10.6882 17.2751 10.6882H19.3121C19.6825 10.6882 20 10.3707 20 10.0003C20 9.62996 19.6825 9.3125 19.3121 9.3125Z"
          className={props.className}
          fill="white"
        />
        <path
          d="M15.6083 14.6564C15.3438 14.3919 14.9205 14.3919 14.6559 14.6564C14.3914 14.921 14.3914 15.3443 14.6559 15.6088L16.111 17.0638C16.3755 17.3284 16.7988 17.3284 17.0633 17.0638C17.3279 16.7993 17.3279 16.376 17.0633 16.1114L15.6083 14.6564Z"
          className={props.className}
          fill="white"
        />
        <path
          d="M9.99996 16.5869C9.62959 16.5869 9.31213 16.9044 9.31213 17.2747V19.3118C9.31213 19.6822 9.62959 19.9996 9.99996 19.9996C10.3703 19.9996 10.6878 19.6822 10.6878 19.3118V17.2747C10.6878 16.9044 10.3703 16.5869 9.99996 16.5869Z"
          className={props.className}
          fill="white"
        />
        <path
          d="M4.36511 14.6564L2.91008 16.1114C2.64553 16.376 2.64553 16.7993 2.91008 17.0638C3.17463 17.3284 3.59791 17.3284 3.86246 17.0638L5.31749 15.6088C5.58204 15.3443 5.58204 14.921 5.31749 14.6564C5.07939 14.3919 4.65611 14.3919 4.36511 14.6564Z"
          className={props.className}
          fill="white"
        />
        <path
          d="M3.4127 10.0003C3.4127 9.62996 3.09524 9.3125 2.72487 9.3125H0.68783C0.31746 9.3125 0 9.62996 0 10.0003C0 10.3707 0.31746 10.6882 0.68783 10.6882H2.72487C3.09524 10.6882 3.4127 10.3707 3.4127 10.0003Z"
          className={props.className}
          fill="white"
        />
        <path
          d="M4.36511 5.3441C4.62966 5.60865 5.05294 5.60865 5.31749 5.3441C5.58204 5.07955 5.58204 4.65627 5.31749 4.39172L3.86246 2.93669C3.59791 2.67214 3.17463 2.67214 2.91008 2.93669C2.64553 3.20124 2.64553 3.62452 2.91008 3.88908L4.36511 5.3441Z"
          className={props.className}
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_121_27">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
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

export function ChevronLeftSvg(props: IconSVGProps) {
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
        d="M15.705 7.41L14.295 6L8.29501 12L14.295 18L15.705 16.59L11.125 12L15.705 7.41Z"
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
