type Props = {
  className?: string;
};

export default function ChevronDown({ className }: Props) {
  return (
    <svg className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.716.3a1 1 0 0 0-1.42 0l-4.29 4.27-4.3-4.28a1 1 0 1 0-1.41 1.42l5 5a1 1 0 0 0 .71.28 1 1 0 0 0 .7-.29l5-5a1 1 0 0 0 .01-1.4Z" />
    </svg>
  );
}
