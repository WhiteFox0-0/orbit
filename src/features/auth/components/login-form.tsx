"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Must be at least 8 characters"),
});

type FormValues = z.infer<typeof schema>;

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    await authClient.signIn.email(
      {
        email: values.email,
        password: values.password,
        callbackURL: "/",
      },
      {
        onSuccess: () => {
          router.push("/");
        },
        onError: (ctx) => {
          toast.error(ctx.error.message);
        },
      }
    );
  };

  const isPending = form.formState.isSubmitting;

  return (
    <main className="min-h-screen bg-[#08090A] text-[#E3E2E5] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-96">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight mb-1">
            Welcome back
          </h1>

          <p className="text-sm text-[#8A8F98]">
            Sign in to continue to your account.
          </p>
        </div>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-3"
        >
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <div>
                <label className="block text-xs text-[#8A8F98] mb-1">
                  Email address
                </label>

                <input
                  {...field}
                  type="email"
                  placeholder="name@company.com"
                  className="w-full rounded-md border border-[#26282C] bg-[#0B0C0E] px-3 py-2 text-sm outline-none transition focus:border-[#727285]"
                />

                {fieldState.error && (
                  <p className="mt-1 text-xs text-red-400">
                    {fieldState.error.message}
                  </p>
                )}
              </div>
            )}
          />

          <Controller
            name="password"
            control={form.control}
            render={({ field, fieldState }) => (
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs text-[#8A8F98]">
                    Password
                  </label>

                  <Link
                    href="/forgot-password"
                    className="text-xs text-[#8A8F98] hover:text-white"
                  >
                    Forgot password?
                  </Link>
                </div>

                <div className="relative">
                  <input
                    {...field}
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full rounded-md border border-[#26282C] bg-[#0B0C0E] px-3 py-2 pr-10 text-sm outline-none transition focus:border-[#727285]"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8A8F98] hover:text-white"
                  >
                    {showPassword ? (
                      <EyeOff size={16} />
                    ) : (
                      <Eye size={16} />
                    )}
                  </button>
                </div>

                {fieldState.error && (
                  <p className="mt-1 text-xs text-red-400">
                    {fieldState.error.message}
                  </p>
                )}
              </div>
            )}
          />

          <button
            type="submit"
            disabled={isPending}
            className="mt-4 w-full rounded-md bg-[#1C1C1D] py-2 text-sm font-medium transition hover:bg-[#252526] disabled:opacity-50"
          >
            {isPending ? "Signing in..." : "Sign in"}
          </button>
          <p className="text-center text-sm text-[#8A8F98]">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-[#E3E2E5]"
            >
              Sign up
            </Link>
          </p>

        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#26282C]" />
          </div>

          <div className="relative flex justify-center">
            <span className="bg-[#08090A] px-3 text-[10px] font-medium tracking-[0.15em] text-[#8A8F98]">
              OR CONTINUE WITH
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-md border border-[#26282C] bg-[#151618] py-2 text-sm transition hover:bg-[#1D1E20]"
          >
            <GoogleIcon />
            Google
          </button>

          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-md border border-[#26282C] bg-[#151618] py-2 text-sm transition hover:bg-[#1D1E20]"
          >
            <GitHubIcon />
            GitHub
          </button>
        </div>

        <p className="mt-6 text-center text-xs leading-relaxed text-[#8A8F98]">
          By signing in, you agree to our{" "}
          <a href="#" className="text-[#E3E2E5] underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-[#E3E2E5] underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </main>
  );
}

function GoogleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5"
      aria-hidden="true"
    >
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.55-.2-2.27H12v4.3h6.45a5.52 5.52 0 0 1-2.4 3.63v3h3.88c2.27-2.09 3.56-5.17 3.56-8.66z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.96-1.07 7.94-2.91l-3.88-3c-1.07.72-2.44 1.15-4.06 1.15-3.12 0-5.76-2.1-6.7-4.92H1.3v3.1A12 12 0 0 0 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.3 14.32A7.2 7.2 0 0 1 4.93 12c0-.8.14-1.58.37-2.32V6.58H1.3A12 12 0 0 0 0 12c0 1.93.46 3.76 1.3 5.42l4-3.1z"
      />
      <path
        fill="#EA4335"
        d="M12 4.77c1.76 0 3.35.61 4.6 1.81l3.44-3.44C17.95 1.16 15.23 0 12 0A12 12 0 0 0 1.3 6.58l4 3.1C6.24 6.87 8.88 4.77 12 4.77z"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

