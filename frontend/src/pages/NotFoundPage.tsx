import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { BackgroundGlow } from '@/components/ui/BackgroundGlow';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export function NotFoundPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <BackgroundGlow />
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 py-24">
        <Card accent="rose" className="max-w-md w-full p-8 text-center space-y-4">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold bg-primary/10 text-primary">
            404 ERROR
          </span>
          <h1 className="text-3xl font-extrabold text-ink">Page Not Found</h1>
          <p className="text-sm text-ink-muted leading-relaxed">
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="pt-2">
            <Link to="/">
              <Button variant="primary" size="md">
                <ArrowLeft className="w-4 h-4" />
                Return to Home
              </Button>
            </Link>
          </div>
        </Card>
      </main>

      <Footer />
    </div>
  );
}