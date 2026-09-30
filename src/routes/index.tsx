import { createFileRoute } from '@tanstack/react-router';
import { Greeting } from '@/components/Greeting';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-6">
      <Greeting />
    </main>
  );
}
