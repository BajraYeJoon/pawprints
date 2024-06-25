"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { MailIcon } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <section className="min-h-screen flex justify-center items-center text-lg">
      <div className="flex mb-4 flex-col ">
        <h2 className="text-3xl">
          If you are here, it means I probably didnot handle the error properly.
        </h2>
        <div className="flex">
          <span>Report:</span>

          <MailIcon stroke="#63e" className="mx-1" />
          <a
            href="mailto:binaya.bajrashakya@gmail.com"
            className="underline text-blue-400"
          >
            contact@bajra.dev
          </a>
        </div>
      </div>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </section>
  );
}
