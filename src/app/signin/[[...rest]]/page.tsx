// signin/[[...rest]]/page.tsx
import { SignIn } from '@clerk/nextjs';

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white dark:bg-gray-900 px-4 sm:px-6">
      <div className="w-full max-w-md">
        <SignIn routing="path" path="/signin" signUpUrl="/signup" />
      </div>
    </div>
  );
}