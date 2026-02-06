type DefaultAvatarProps = {
  className?: string;
};

export function DefaultAvatar({ className = "" }: DefaultAvatarProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`w-6 h-6 rounded-full bg-orange-100 text-orange-800 ${className}`}
      fill="currentColor"
    >
      <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z" />
    </svg>
  );
}
