"use client";
import { loginSchema } from "@/schemas/login-schema";
import { LoginType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Switch } from "../ui/switch";

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginType>({
        resolver: zodResolver(loginSchema),
    });

    const submission = async (data: LoginType) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
    };

    return (
        <form
            onSubmit={handleSubmit(submission)}
            className="flex flex-col gap-5"
        >
            <div className="flex flex-col gap-1">
                <label
                    htmlFor="email"
                    className="text-sm font-semibold text-neutral-100"
                >
                    Email or username
                </label>
                <input
                    {...register("email")}
                    type="email"
                    placeholder="Email or username"
                    className="rounded p-2"
                />
                {errors.email && (
                    <p className="mt-1 text-sm font-bold text-red-500">
                        {errors.email.message}
                    </p>
                )}
            </div>
            <div className="flex flex-col gap-1">
                <label
                    htmlFor="password"
                    className="text-sm font-semibold text-neutral-100"
                >
                    Password
                </label>
                <input
                    {...register("password")}
                    type="password"
                    placeholder="Password"
                    className="rounded p-2"
                />
                {errors.password && (
                    <p className="mt-1 text-sm font-bold text-red-500">
                        {errors.password.message}
                    </p>
                )}
            </div>

            <div className="flex items-center gap-3 pb-6">
                <Switch
                    id="remember"
                    className="focus-visible:ring-white focus-visible:ring-offset-white data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-neutral-600"
                />
                <label htmlFor="remember" className="text-sm font-bold">
                    Remember me
                </label>
            </div>

            <button
                disabled={isSubmitting}
                className="w-full rounded-full bg-green-500 py-3 font-extrabold text-black transition-all hover:scale-105 disabled:bg-neutral-500"
            >
                Log In
            </button>
        </form>
    );
};

export default LoginForm;
