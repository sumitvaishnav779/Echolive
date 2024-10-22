<template>
    <div class="flex items-center justify-center min-h-screen login-screen-body">
        <div class="login-page text-center">
            <!-- Logo Section -->
            <div class="mb-8">
                <img src="../../assets/img/login-logo.png" alt="ECHOLIVE Logo" class="h-28 lg:h-40 xl:h-48 2xl:h-auto mx-auto">
            </div>

            <!-- Login Form -->
            <div class="bg-gradient-to-tl from-[#825405] to-[#f6dd7b] rounded-lg shadow-md px-8 lg:px-16 xl:px-24 2xl:px-32 py-16 2xl:py-20 pb-10">
                <h1 class="font-bold text-black mb-12 text-2xl xl:text-3xl 2xl:text-4xl">Login to ECHOLIVE</h1>
                <form @submit.prevent="handleLogin">
                    <div class="mb-8 text-left">
                        <label for="email" class="block text-black font-bold mb-2 text-base xl:text-lg">Email or Username</label>
                        <input 
                            type="email" 
                            id="email" 
                            v-model="email"
                            placeholder="Email or Username" 
                            class="w-full bg-white p-3 border border-[#b5842e] rounded-xl text-black focus:outline-none { 'is-invalid': emailError }">
                        <span v-if="emailError" class="text-red-600 font-semibold text-sm mt-2">{{ emailError }}</span>
                    </div>
                    <div class="mb-4 text-left">
                        <label for="password" class="block text-black font-bold mb-2 text-base xl:text-lg">Password</label>
                        <input type="password" id="password" v-model="password" placeholder="Password" class="w-full bg-white p-3 border border-[#b5842e] rounded-xl text-black focus:outline-none { 'is-invalid': passwordError }">
                        <span v-if="passwordError" class="text-red-600 font-semibold text-sm mt-2">{{ passwordError }}</span>
                    </div>
                    <div class="flex items-center mb-8">
                        <input type="checkbox" id="remember" class="mr-2 hidden">
                        <div class="flex items-center justify-center">
                        <label for="toggle-switch" class="flex items-center cursor-pointer">
                            <!-- Switch -->
                            <div class="relative">
                            <!-- Input -->
                            <input id="toggle-switch" type="checkbox" class="sr-only">
                            <!-- Slider -->
                            <div class="block bg-black w-9 h-5 rounded-full"></div>
                            <!-- Circle -->
                            <div class="dot absolute left-1 top-1 bg-[#d5b659] w-3 h-3 rounded-full transition transform"></div>
                            </div>
                            <!-- Label -->
                            <span class="ml-3 text-black text-base xl:text-lg font-bold">Remember me</span>
                        </label>
                        </div>
                    </div>
                    <button type="submit" class="w-full bg-black text-white font-semibold py-3 rounded-full">LOGIN</button>
                </form>
                <div class="mt-12">
                    <a href="#" class="text-white text-base xl:text-lg underline hover:no-underline">Forgot your password?</a>
                </div>
                <div class="pt-10 xl:pt-20 text-white text-base xl:text-lg">
                    Don't have an account? <a href="#" class="underline hover:no-underline">Sign up for ECHOLIVE</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
    };
  },
  methods: {
    validateEmail() {
      if(this.email==""){
        this.emailError = "Email is required!";
      }else{
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        this.emailError = !regex.test(this.email) ? 'Invalid email format' : '';
      }
    },
    validatePassword() {
      if(this.password==""){
        this.passwordError = "Password is required!";
      }else{
        this.passwordError = this.password.length < 6 ? 'Password must be at least 6 characters' : '';
      }
      
    },
    handleLogin() {
      this.validateEmail();
      this.validatePassword();

      if (!this.emailError && !this.passwordError) {
        // Handle the login logic here
        console.log('Logging in with', this.email, this.password);
        // You can replace this with an API call
        this.$router.push({ name: 'home' });
      }
    },
  },
  mounted(){
    const toggleSwitch = document.querySelector("#toggle-switch");
    const dot = document.querySelector(".dot");
    
    toggleSwitch.addEventListener("change", function () {
      if (toggleSwitch.checked) {
        dot.classList.add("translate-x-4");
      
        dot.classList.add("bg-white");
      } else {
        dot.classList.remove("translate-x-4");
        dot.classList.remove("bg-white");
      }
    });
  },
};
</script>

<style>
.login-screen-body { font-family:"Montserrat", sans-serif; font-size:16px;  background:#000 
  
  /* background:rgb(245,222,127); background:linear-gradient(137deg, rgba(245,222,127,1) 35%, rgba(157,125,66,1) 100%); */ } 

  
@media (min-width: 1536px) {
    .container {
        max-width: 1200px!Important;
        padding: 0 15px;
    }
}

.custom-mt-80 { margin-top:-80px} 


.login-page { width:700px; max-width:100%; padding:30px 20px;}
</style>