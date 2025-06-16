// signup/[[...rest]]/page.tsx
import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white dark:bg-gray-900 px-4 sm:px-6">
      <div className="w-full max-w-md">
        <SignUp routing="path" path="/signup" signInUrl="/signin" />
      </div>
    </div>
  );
}
