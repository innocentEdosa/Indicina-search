type Props = {
  className?: string;
};

export default function SearchIcon({ className }: Props) {
  return (
    <svg className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="m14.294 12.003 3.215 3.215c.655.655.655 1.637 0 2.291-.327.327-.818.491-1.145.491-.328 0-.819-.164-1.146-.49l-3.215-3.216a7.773 7.773 0 1 1 2.29-2.29Zm-6.521.76a4.99 4.99 0 1 0 0-9.981 4.99 4.99 0 0 0 0 9.982Z" />
    </svg>
  );
}
