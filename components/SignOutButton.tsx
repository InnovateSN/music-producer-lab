'use client';

import { signOut } from 'next-auth/react';

interface SignOutButtonProps {
  className?: string;
}

export function SignOutButton({ className }: SignOutButtonProps) {
  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' });
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
