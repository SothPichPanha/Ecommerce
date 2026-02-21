<script>
import authService from "@/services/api.js";

export default {
  name: "AuthPage",
  data() {
    return {
      mode: "login", // login | register
      form: {
        name: "",
        email: "",
        password: "",
        confirm: "",
      },
      showPassword: false,
      showConfirm: false,
      isLoading: false,
      formErrors: {},
      apiError: "",
    };
  },
  methods: {
    async submit() {
      this.formErrors = {};
      this.apiError = "";

      // Validation
      if (!this.form.email) {
        this.formErrors.email = "Email is required";
        return;
      }
      if (!this.form.password || this.form.password.length < 6) {
        this.formErrors.password = "Password must be at least 6 characters";
        return;
      }

      if (this.mode === "register") {
        if (!this.form.name) {
          this.formErrors.name = "Name is required";
          return;
        }
        if (this.form.password !== this.form.confirm) {
          this.formErrors.confirm = "Passwords do not match";
          return;
        }
      }

      this.isLoading = true;

      try {
        if (this.mode === "login") {
          const response = await authService.login({
            email: this.form.email,
            password: this.form.password,
          });

          // Store token if returned (adjust key to match your API response)
          if (response.data?.token) {
            localStorage.setItem('token', response.data.token);
          }

          alert("✓ Logged in successfully: " + this.form.email);
          // TODO: redirect after login, e.g. this.$router.push('/dashboard')

        } else {
          const response = await authService.register({
            name: this.form.name,
            email: this.form.email,
            password: this.form.password,
          });

          // Store token if returned on register
          if (response.data?.token) {
            localStorage.setItem('token', response.data.token);
          }

          alert("✓ Account created: " + this.form.email);
          // TODO: redirect after register, e.g. this.$router.push('/dashboard')
        }

        this.resetForm();

      } catch (error) {
        if (error.response) {
          const status = error.response.status;
          const data = error.response.data;

          if (status === 422 && data?.errors) {
            // Laravel-style validation errors: { errors: { field: ["msg"] } }
            Object.entries(data.errors).forEach(([field, messages]) => {
              this.formErrors[field] = Array.isArray(messages) ? messages[0] : messages;
            });
          } else if (status === 401) {
            this.apiError = "Invalid email or password.";
          } else if (status === 409) {
            this.apiError = "An account with this email already exists.";
          } else {
            this.apiError = data?.message || "Something went wrong. Please try again.";
          }
        } else if (error.request) {
          this.apiError = "Unable to reach the server. Please check your connection.";
        } else {
          this.apiError = "An unexpected error occurred.";
        }
      } finally {
        this.isLoading = false;
      }
    },

    resetForm() {
      this.form = { name: "", email: "", password: "", confirm: "" };
      this.formErrors = {};
      this.apiError = "";
    },

    toggleMode() {
      this.mode = this.mode === "login" ? "register" : "login";
      this.resetForm();
      this.showPassword = false;
      this.showConfirm = false;
    }
  },
};
</script>

<template>
  <div class="relative min-h-screen w-full bg-gradient-to-br from-blue-50 via-blue-50 to-blue-100 flex items-center justify-center p-5 overflow-hidden">
    <!-- Background effects -->
    <div class="absolute inset-0 bg-gradient-radial from-blue-300/10 via-transparent to-pink-300/10 blur-3xl pointer-events-none"></div>

    <!-- Decorative floating orbs -->
    <div class="absolute w-80 h-80 bg-blue-400 rounded-full opacity-15 -top-20 -left-10 pointer-events-none animate-float-slow"></div>
    <div class="absolute w-64 h-64 bg-pink-400 rounded-full opacity-15 -bottom-16 right-1/4 pointer-events-none animate-float-medium"></div>
    <div class="absolute w-52 h-52 bg-purple-400 rounded-full opacity-15 top-1/2 -right-20 pointer-events-none animate-float-fast"></div>

    <!-- Grid pattern overlay -->
    <div class="absolute inset-0 opacity-30 pointer-events-none"
         style="background-image: linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px); background-size: 80px 80px;">
    </div>

    <!-- Main content -->
    <div class="relative z-10 w-full max-w-6xl">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

        <!-- Left side - Branding section (hidden on mobile) -->
        <div class="hidden lg:flex flex-col gap-12 pr-10 w-[500px] h-[900px] bg-red-500 bg-[url('/image/handphone2.jpg')] bg-cover bg-center rounded-3xl shadow-2xl border border-white/80 backdrop-blur-md animate-slide-in-left">
          <span></span>
        </div>

        <!-- Right side - Auth card -->
        <div class="bg-white rounded-3xl shadow-2xl p-12 lg:p-14 border border-white/80 backdrop-blur-md animate-slide-in-right" style="animation-delay: 0.2s">
          <!-- Card header -->
          <div class="mb-9 animate-slide-up" style="animation-delay: 0.4s">
            <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-2 -tracking-tight">
              {{ mode === "login" ? "Welcome Back" : "Join Us Today" }}
            </h2>
            <p class="text-base text-gray-400 leading-relaxed">
              {{ mode === "login"
                ? "Enter your credentials to access your account"
                : "Create your account in seconds" }}
            </p>
          </div>

          <!-- API Error Banner -->
          <transition name="slide-fade">
            <div
              v-if="apiError"
              class="mb-5 px-4 py-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-600 text-sm font-medium animate-slide-down"
            >
              <svg class="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              {{ apiError }}
            </div>
          </transition>

          <!-- Form -->
          <form @submit.prevent="submit" class="flex flex-col gap-5 mb-7" novalidate>

            <!-- Name field (register only) -->
            <transition name="slide-fade">
              <div v-if="mode === 'register'" class="flex flex-col gap-2 animate-slide-up" style="animation-delay: 0.45s">
                <label for="name" class="text-xs font-bold text-gray-900 uppercase tracking-wider">Full Name</label>
                <div class="relative flex items-center">
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    placeholder="John Doe"
                    class="w-full px-4 py-3 pl-11 border-2 border-gray-200 rounded-xl text-gray-900 bg-gray-50 transition-all duration-300 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10"
                    :class="{ 'border-red-500 bg-red-50/50 focus:ring-red-500/10': formErrors.name }"
                  />
                  <svg class="absolute left-3.5 w-4.5 h-4.5 text-gray-400 pointer-events-none stroke-[2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <span v-if="formErrors.name" class="text-sm text-red-500 font-medium animate-slide-down">{{ formErrors.name }}</span>
              </div>
            </transition>

            <!-- Email field -->
            <div class="flex flex-col gap-2 animate-slide-up" style="animation-delay: 0.5s">
              <label for="email" class="text-xs font-bold text-gray-900 uppercase tracking-wider">Email Address</label>
              <div class="relative flex items-center">
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  placeholder="your@email.com"
                  class="w-full px-4 py-3 pl-11 border-2 border-gray-200 rounded-xl text-gray-900 bg-gray-50 transition-all duration-300 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10"
                  :class="{ 'border-red-500 bg-red-50/50 focus:ring-red-500/10': formErrors.email }"
                />
                <svg class="absolute left-3.5 w-4.5 h-4.5 text-gray-400 pointer-events-none stroke-[2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
              <span v-if="formErrors.email" class="text-sm text-red-500 font-medium animate-slide-down">{{ formErrors.email }}</span>
            </div>

            <!-- Password field -->
            <div class="flex flex-col gap-2 animate-slide-up" style="animation-delay: 0.55s">
              <label for="password" class="text-xs font-bold text-gray-900 uppercase tracking-wider">Password</label>
              <div class="relative flex items-center">
                <input
                  id="password"
                  v-model="form.password"
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="••••••••"
                  class="w-full px-4 py-3 pl-11 pr-12 border-2 border-gray-200 rounded-xl text-gray-900 bg-gray-50 transition-all duration-300 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10"
                  :class="{ 'border-red-500 bg-red-50/50 focus:ring-red-500/10': formErrors.password }"
                />
                <svg class="absolute left-3.5 w-4.5 h-4.5 text-gray-400 pointer-events-none stroke-[2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="5"></circle>
                  <path d="M1 12s4-8 11-8 11 8 11 8"></path>
                </svg>
                <button
                  type="button"
                  class="absolute right-3 p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-600/10 rounded-lg transition-all duration-200"
                  @click="showPassword = !showPassword"
                  :title="showPassword ? 'Hide password' : 'Show password'"
                >
                  <svg v-if="!showPassword" class="w-5 h-5 stroke-[1.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  <svg v-else class="w-5 h-5 stroke-[1.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                  </svg>
                </button>
              </div>
              <span v-if="formErrors.password" class="text-sm text-red-500 font-medium animate-slide-down">{{ formErrors.password }}</span>
            </div>

            <!-- Confirm password (register only) -->
            <transition name="slide-fade">
              <div v-if="mode === 'register'" class="flex flex-col gap-2 animate-slide-up" style="animation-delay: 0.6s">
                <label for="confirm" class="text-xs font-bold text-gray-900 uppercase tracking-wider">Confirm Password</label>
                <div class="relative flex items-center">
                  <input
                    id="confirm"
                    v-model="form.confirm"
                    :type="showConfirm ? 'text' : 'password'"
                    placeholder="••••••••"
                    class="w-full px-4 py-3 pl-11 pr-12 border-2 border-gray-200 rounded-xl text-gray-900 bg-gray-50 transition-all duration-300 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10"
                    :class="{ 'border-red-500 bg-red-50/50 focus:ring-red-500/10': formErrors.confirm }"
                  />
                  <svg class="absolute left-3.5 w-4.5 h-4.5 text-gray-400 pointer-events-none stroke-[2]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="5"></circle>
                    <path d="M1 12s4-8 11-8 11 8 11 8"></path>
                  </svg>
                  <button
                    type="button"
                    class="absolute right-3 p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-600/10 rounded-lg transition-all duration-200"
                    @click="showConfirm = !showConfirm"
                    :title="showConfirm ? 'Hide password' : 'Show password'"
                  >
                    <svg v-if="!showConfirm" class="w-5 h-5 stroke-[1.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    <svg v-else class="w-5 h-5 stroke-[1.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                  </button>
                </div>
                <span v-if="formErrors.confirm" class="text-sm text-red-500 font-medium animate-slide-down">{{ formErrors.confirm }}</span>
              </div>
            </transition>

            <!-- Forgot password (login only) -->
            <transition name="slide-fade">
              <div v-if="mode === 'login'" class="flex justify-end animate-slide-up" style="animation-delay: 0.55s">
                <a href="#" class="text-sm font-semibold text-blue-600 hover:text-purple-600 hover:underline transition-all">Forgot your password?</a>
              </div>
            </transition>

            <!-- Submit button -->
            <button
              type="submit"
              class="w-full py-3.5 px-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-80 disabled:cursor-not-allowed mt-2.5"
              :disabled="isLoading"
            >
              <span v-if="!isLoading" class="inline-block transition-all">
                {{ mode === "login" ? "Sign In" : "Create Account" }}
              </span>
              <span v-else class="flex items-center justify-center">
                <svg class="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10" stroke-dasharray="50" stroke-dashoffset="0"></circle>
                </svg>
              </span>
            </button>

            <!-- Divider -->
            <div class="relative my-6 text-center">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-200"></div>
              </div>
              <div class="relative bg-white px-3">
                <span class="text-sm text-gray-400 font-medium">or</span>
              </div>
            </div>

            <!-- Social buttons -->
            <div class="grid grid-cols-2 gap-3 mb-5">
              <button
                type="button"
                class="flex items-center justify-center gap-2 py-3 px-4 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-900 font-semibold text-sm transition-all duration-300 hover:bg-blue-600 hover:text-white hover:border-transparent hover:-translate-y-0.5"
              >
                <span class="pi pi-google"></span>
                <span>Google</span>
              </button>
              <button
                type="button"
                class="flex items-center justify-center gap-2 py-3 px-4 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-900 font-semibold text-sm transition-all duration-300 hover:bg-gray-900 hover:text-white hover:border-transparent hover:-translate-y-0.5"
              >
                <svg class="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </button>
            </div>
          </form>

          <!-- Mode toggle -->
          <div class="text-center pt-5 border-t border-gray-100">
            <p class="text-sm text-gray-600">
              {{ mode === "login" ? "Don't have an account?" : "Already have an account?" }}
              <button
                type="button"
                class="ml-1.5 font-bold text-blue-600 hover:text-purple-600 hover:underline transition-all"
                @click="toggleMode"
              >
                {{ mode === "login" ? "Sign up" : "Sign in" }}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="fixed bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block">
      <div class="w-2 h-2 bg-blue-600/60 rounded-full animate-bounce" style="animation: bounce 2s infinite;"></div>
    </div>
  </div>
</template>

<style scoped>
@keyframes slide-in-left {
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes slide-in-right {
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes slide-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes slide-down {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes float-slow {
  0%, 100% { transform: translateY(0px) translateX(0px); }
  25% { transform: translateY(-30px) translateX(-10px); }
  50% { transform: translateY(-60px) translateX(20px); }
  75% { transform: translateY(-30px) translateX(10px); }
}
@keyframes float-medium {
  0%, 100% { transform: translateY(0px) translateX(0px); }
  25% { transform: translateY(-30px) translateX(-10px); }
  50% { transform: translateY(-60px) translateX(20px); }
  75% { transform: translateY(-30px) translateX(10px); }
}
@keyframes float-fast {
  0%, 100% { transform: translateY(0px) translateX(0px); }
  25% { transform: translateY(-30px) translateX(-10px); }
  50% { transform: translateY(-60px) translateX(20px); }
  75% { transform: translateY(-30px) translateX(10px); }
}
.animate-slide-in-left { animation: slide-in-left 0.8s ease-out forwards; }
.animate-slide-in-right { animation: slide-in-right 0.8s ease-out forwards; }
.animate-slide-up { animation: slide-up 0.6s ease-out forwards; opacity: 0; }
.animate-slide-down { animation: slide-down 0.3s ease-out; }
.animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
.animate-float-medium { animation: float-medium 10s ease-in-out infinite 2s; }
.animate-float-fast { animation: float-fast 12s ease-in-out infinite 4s; }
.slide-fade-enter-active, .slide-fade-leave-active { transition: all 0.3s ease; }
.slide-fade-enter-from { transform: translateX(-10px); opacity: 0; }
.slide-fade-leave-to { transform: translateX(10px); opacity: 0; }
.bg-gradient-radial {
  background: radial-gradient(circle at 30% 50%, rgba(102, 126, 234, 0.1), transparent 50%),
              radial-gradient(circle at 70% 80%, rgba(245, 87, 108, 0.1), transparent 50%);
}
</style>