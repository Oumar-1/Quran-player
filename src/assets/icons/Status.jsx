function Status({ state = false, ...props }) {
  const path = state ? (
    <path d='M8 7h3v10H8zm5 0h3v10h-3z'></path>
  ) : (
    <path d='M7 6v12l10-6z'></path>
  );
  const svg = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='#0000'
      stroke='#fff'
      width='30'
      height='30'
      {...props}
    >
      {path}
    </svg>
  );

  return svg;
}

export default Status;
