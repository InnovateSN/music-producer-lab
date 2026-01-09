import { redirect } from 'next/navigation';

export default function Home() {
  // Redirect to the existing static index.html
  redirect('/index.html');
}
