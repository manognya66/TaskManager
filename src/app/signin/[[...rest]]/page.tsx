import { SignIn } from '@clerk/nextjs';

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white md:bg-gray-900 px-4 sm:px-6 text-gray-900 md:text-white">
      <div className="w-full max-w-md">
        <SignIn routing="path" path="/signin" signUpUrl="/signup" />
      </div>
    </div>
  );
}
