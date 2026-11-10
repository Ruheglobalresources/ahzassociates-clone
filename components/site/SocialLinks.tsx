const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/ahzassociates",
    path: "M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.43-4.92 8.43-9.94Z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ahzassociates",
    path: "M12 7.38A4.62 4.62 0 1 0 16.62 12 4.62 4.62 0 0 0 12 7.38Zm0 7.62a3 3 0 1 1 3-3 3 3 0 0 1-3 3Zm4.8-8.88a1.08 1.08 0 1 0 1.08 1.08 1.08 1.08 0 0 0-1.08-1.08ZM21.94 7.1a5.33 5.33 0 0 0-1.46-3.58A5.36 5.36 0 0 0 16.9 2.06C15.49 2 15.04 2 12 2s-3.49 0-4.9.06a5.36 5.36 0 0 0-3.58 1.46A5.33 5.33 0 0 0 2.06 7.1C2 8.51 2 8.96 2 12s0 3.49.06 4.9a5.33 5.33 0 0 0 1.46 3.58 5.36 5.36 0 0 0 3.58 1.46C8.51 22 8.96 22 12 22s3.49 0 4.9-.06a5.36 5.36 0 0 0 3.58-1.46 5.33 5.33 0 0 0 1.46-3.58C22 15.49 22 15.04 22 12s0-3.49-.06-4.9Zm-2.02 9.6a3.43 3.43 0 0 1-.97 2.25 3.43 3.43 0 0 1-2.25.97c-1.36.06-1.77.07-5.2.07s-3.84 0-5.2-.07a3.43 3.43 0 0 1-2.25-.97 3.43 3.43 0 0 1-.97-2.25C3.02 15.34 3 14.93 3 12s0-3.34.08-4.7a3.43 3.43 0 0 1 .97-2.25 3.43 3.43 0 0 1 2.25-.97C7.66 4.02 8.07 4 12 4s4.34 0 5.7.08a3.43 3.43 0 0 1 2.25.97 3.43 3.43 0 0 1 .97 2.25c.06 1.36.08 1.77.08 4.7s0 3.34-.08 4.7Z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/ahzassociates",
    path: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z",
  },
  {
    label: "X",
    href: "https://twitter.com/AHZAssociates",
    path: "M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.65l-5.21-6.82-5.97 6.82H1.68l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z",
  },
];

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-2.5 ${className}`}>
      {socials.map((s) => (
        <li key={s.label}>
          <a
            href={s.href}
            target="_blank"
            rel="noreferrer"
            aria-label={s.label}
            className="flex h-[31px] w-[31px] items-center justify-center rounded-full bg-brand text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#e8213f]"
          >
            <svg viewBox="0 0 24 24" className="h-[16px] w-[16px]" fill="currentColor" aria-hidden>
              <path d={s.path} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
