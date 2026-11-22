import { useState, type FormEvent } from 'react';
import { CheckCircle2, AlertCircle, Mail, Send, Copy, Check } from 'lucide-react';
import { PROFILE_DATA } from '@/data/portfolio';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { GithubIcon, LinkedinIcon } from '@/components/ui/SocialIcons';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [feedback, setFeedback] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE_DATA.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setStatus('error');
      setFeedback('Please fill in all fields before sending.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setStatus('error');
      setFeedback('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');
    setFeedback('');

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;

    if (accessKey && accessKey.trim().length > 0) {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: accessKey.trim(),
            name: name.trim(),
            email: email.trim(),
            subject: `[Portfolio] ${subject.trim()}`,
            message: message.trim(),
          }),
        });

        const data = await response.json();
        if (data.success) {
          setStatus('success');
          setFeedback('Thank you! Your message has been delivered directly to Jiya.');
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
        } else {
          setStatus('error');
          setFeedback(data.message || 'Unable to send message right now. Please try email directly.');
        }
      } catch {
        setStatus('error');
        setFeedback('Network error while sending. You can also reach out directly via email.');
      }
      return;
    }

    // Fallback: Opens user's default mail client pre-filled when no API key is set
    const mailtoSubject = encodeURIComponent(`[Portfolio] ${subject.trim()}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`
    );
    window.location.href = `mailto:${PROFILE_DATA.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setStatus('success');
    setFeedback('Opening your email app with your message ready to send!');
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <SectionContainer
      id="contact"
      eyebrow="Get In Touch"
      title="Contact"
      titleHighlight="Me"
      subtitle="Have an opportunity, project idea, or question? Feel free to reach out."
      className="scroll-mt-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
        {/* Left Direct Channels Card */}
        <Card accent="violet" className="lg:col-span-5 p-6 sm:p-7 space-y-4">
          <h3 className="text-lg font-bold text-ink">Direct Channels</h3>
          <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
            Connect directly via email or explore my repositories and professional profile.
          </p>

          <div className="space-y-3 pt-1">
            <div className="flex items-center justify-between gap-2 p-3 rounded-xl bg-canvas border border-border-subtle hover:border-primary/45 hover:bg-lavender/50 transition-colors">
              <a
                href={`mailto:${PROFILE_DATA.email}`}
                className="flex items-center gap-3 min-w-0 flex-1"
              >
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-ink truncate">
                  {PROFILE_DATA.email}
                </span>
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                className="p-1.5 rounded-lg text-ink-muted hover:text-primary hover:bg-white transition-colors shrink-0"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            <a
              href={PROFILE_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl bg-canvas border border-border-subtle hover:border-primary/45 hover:bg-lavender/50 transition-colors"
            >
              <GithubIcon className="w-4 h-4 text-ink shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-ink">GitHub Profile</span>
            </a>

            <a
              href={PROFILE_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl bg-canvas border border-border-subtle hover:border-primary/45 hover:bg-lavender/50 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4 text-primary shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-ink">LinkedIn Profile</span>
            </a>
          </div>
        </Card>

        {/* Right Form Card */}
        <Card accent="blue" tilt3D={false} className="lg:col-span-7 p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-semibold text-ink mb-1.5">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-canvas border border-border-subtle text-sm text-ink focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-semibold text-ink mb-1.5">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-canvas border border-border-subtle text-sm text-ink focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-subject" className="block text-xs font-semibold text-ink mb-1.5">
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Role opportunity / Collaboration"
                required
                className="w-full px-4 py-2.5 rounded-xl bg-canvas border border-border-subtle text-sm text-ink focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-semibold text-ink mb-1.5">
                Message
              </label>
              <textarea
                id="contact-message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message..."
                required
                className="w-full px-4 py-2.5 rounded-xl bg-canvas border border-border-subtle text-sm text-ink focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-y"
              />
            </div>

            {feedback && (
              <div
                role="status"
                className={`flex items-center gap-2 text-xs p-3 rounded-xl border ${
                  status === 'success'
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                    : 'bg-rose-50 border-rose-200 text-rose-800'
                }`}
              >
                {status === 'success' ? (
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-700" />
                ) : (
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-700" />
                )}
                <span>{feedback}</span>
              </div>
            )}

            <Button
              type="submit"
              variant="primary"
              size="md"
              disabled={status === 'submitting'}
              className="w-full rounded-xl py-3"
            >
              <Send className="w-4 h-4" />
              {status === 'submitting' ? 'Sending...' : 'Send message'}
            </Button>
          </form>
        </Card>
      </div>
    </SectionContainer>
  );
}