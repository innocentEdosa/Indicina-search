type Props = {
  className?: string;
};

export default function ChevronLeft({ className }: Props) {
  return (
    <svg className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="m9 6 6 6-6 6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
