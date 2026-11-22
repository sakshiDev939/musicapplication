
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContextData } from '../context/AuthContext';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Login = () => {

  const { loginUser } = useContext(AuthContextData);
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();

  const submitHandler = (data) => {

    const response = loginUser(data.email, data.password);

    if (!response.success) {
      toast.error(response.message);
      return;
    }

    toast.success(response.message);

    const loggedInUser = response.user;

    reset();

    if (loggedInUser.role === 'artist') {
      navigate('/artist-dashboard');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0b0f] p-4 sm:p-6 lg:p-8">

      <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-7xl items-center justify-center rounded-[2rem] border border-[#bfc6d4]/60 bg-[radial-gradient(circle_at_top_right,_rgba(118,84,255,0.18),_transparent_40%),linear-gradient(130deg,_#111318_0%,_#0a0b0f_48%,_#0f1016_100%)] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_40px_120px_rgba(0,0,0,0.7)] sm:p-8 lg:p-12">

        <div className="grid w-full max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">

          {/* Left Section */}

          <section className="relative hidden overflow-hidden rounded-3xl bg-[#0e1016]/70 p-8 lg:flex lg:min-h-[640px] lg:flex-col lg:justify-center">

            <div className="pointer-events-none absolute -left-10 top-8 text-4xl text-violet-400/50">♪</div>
            <div className="pointer-events-none absolute right-12 top-16 text-4xl text-violet-300/40">♫</div>
            <div className="pointer-events-none absolute bottom-10 left-8 text-3xl text-indigo-300/35">♬</div>

            <div className="mx-auto w-full max-w-md">

              <div className="rounded-2xl border border-violet-400/30 bg-[linear-gradient(135deg,_rgba(43,31,92,0.95),_rgba(15,14,33,0.95))] p-4 shadow-[0_20px_60px_rgba(106,67,255,0.35)]">

                <div className="flex h-48 items-center justify-center rounded-xl border border-violet-300/20 bg-[radial-gradient(circle,_rgba(157,106,255,0.25),_transparent_60%),linear-gradient(145deg,_rgba(18,17,36,0.95),_rgba(36,22,68,0.95))]">

                  <div className="h-24 w-24 rounded-full border border-violet-200/30 bg-[radial-gradient(circle,_rgba(188,144,255,0.75),_rgba(86,49,188,0.9))] shadow-[0_0_80px_rgba(165,111,255,0.65)]" />

                </div>
              </div>

              <h1 className="mt-8 text-center text-5xl font-extrabold tracking-tight text-[#cdb7ff]">
                MusicHub
              </h1>

              <p className="mt-3 text-center text-xl leading-relaxed text-zinc-300">
                Experience high-fidelity sound
                <br />
                tailored to your soul.
              </p>

            </div>
          </section>

          {/* Right Section */}

          <section className="mx-auto w-full max-w-md rounded-3xl border border-white/8 bg-[#17181d]/95 p-6 shadow-[0_28px_80px_rgba(0,0,0,0.65)] sm:p-8">

            <h2 className="text-3xl font-bold tracking-tight text-white">
              Welcome Back
            </h2>

            <p className="mt-2 text-zinc-400">
              Sign in to continue your journey.
            </p>

            <form onSubmit={handleSubmit(submitHandler)} className="mt-8 space-y-5">

              {/* Email */}

              <div>

                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">
                  Email Address
                </label>

                <div className="flex h-12 items-center rounded-xl border border-white/10 bg-[#1a1b21] px-3 text-zinc-400 focus-within:border-violet-400/70">

                  <input
                    type="email"
                    placeholder="name@example.com"
                    {...register('email', {
                      required: 'Email is required'
                    })}
                    className="h-full w-full bg-transparent pl-3 text-sm text-zinc-100 placeholder-zinc-500 outline-none"
                  />

                </div>

                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.email.message}
                  </p>
                )}

              </div>

              {/* Password */}

              <div>

                <div className="mb-2 flex items-center justify-between">

                  <label className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-xs font-semibold text-violet-300 transition hover:text-violet-200"
                  >
                    Forgot Password?
                  </button>

                </div>

                <div className="flex h-12 items-center rounded-xl border border-white/10 bg-[#1a1b21] px-3 text-zinc-400 focus-within:border-violet-400/70">

                  <input
                    {...register('password', {
                      required: 'Password is required'
                    })}
                    type="password"
                    placeholder="••••••••"
                    className="h-full w-full bg-transparent px-3 text-sm text-zinc-100 placeholder-zinc-500 outline-none"
                  />

                </div>

                {errors.password && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.password.message}
                  </p>
                )}

              </div>

              {/* Login Button */}

              <button
                type="submit"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[linear-gradient(90deg,_#8f52ff,_#6937ff)] text-base font-semibold text-white shadow-[0_15px_40px_rgba(120,73,255,0.45)] transition hover:brightness-110"
              >
                Login
                <span aria-hidden="true">→</span>
              </button>

              {/* Register Button */}

              <p className="pt-8 text-center text-sm text-zinc-400">

                Don't have an account?{' '}

                <button
                  type="button"
                  onClick={() => navigate('/register')}
                  className="font-semibold text-violet-300 transition hover:text-violet-200"
                >
                  Register
                </button>

              </p>

            </form>

          </section>

        </div>
      </div>
    </div>
  );
};

export default Login;