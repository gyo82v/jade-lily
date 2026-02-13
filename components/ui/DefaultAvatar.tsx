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

type AccountAvatarProps = {
  className?: string;
  title?: string;
};

export function AccountAvatar({ className = "", title = "User avatar" }: AccountAvatarProps) {
  return (
    <span
      role="img"
      aria-label={title}
      className={`inline-flex items-center justify-center rounded-full bg-white  ${className}`}
    >
      {/* inner icon - smaller and using currentColor (orange) */}
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="w-14 h-14 text-orange-800"
        fill="currentColor"
        focusable="false"
      >
        <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z" />
      </svg>
    </span>
  );
}

