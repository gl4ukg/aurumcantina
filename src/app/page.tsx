import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/menu');
}

export const dynamic = 'force-dynamic';
