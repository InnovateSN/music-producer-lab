'use client';

import { useClerk } from '@clerk/nextjs';

interface SignOutButtonProps {
  className?: string;
}

export function SignOutButton({ className }: SignOutButtonProps) {
  const { signOut } = useClerk();

  const handleSignOut = async () => {
    await signOut({ redirectUrl: '/' });
  };

  return (
    <button
      onClick={handleSignOut}
      className={className || 'px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50'}
    >
      Sign Out
    </button>
  );
}
