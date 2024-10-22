<script setup>
import Navbar from '../components/Navbar.vue'
</script>
<template>
  <!-- Header Section -->
  <header class="dark:bg-gradient-to-l dark:from-[#c2953e] dark:to-[#f3d978] text-black bg-black">
    <div class="container mx-auto">
      <div class="flex justify-center lg:justify-between items-center">
        <div class="menu-toggle block lg:hidden"><a href="#" @click="toggleSidebar()"><img class="invert dark:invert-0" src="../../assets/img/menu-icon.png" alt=""></a></div>
        <div class="flex justify-between items-center m-auto lg:m-0"> 
          <div class="text-2xl font-bold lg:pr-10 xl:pr-20 py-4 brand-logo"><img class="lg:max-w-44 xl:max-w-48 dark:brightness-0" src="../../assets/img/logo.png" alt=""></div>
          <nav id="navbar" class="fixed h-screen z-10 left-0 top-0 dark:bg-gradient-to-l dark:from-[#c2953e] dark:to-[#f3d978] bg-black h-100 w-64 lg:static  lg:h-auto lg:block lg:dark:bg-none lg:dark:from-transparent lg:dark:to-transparent lg:bg-transparent overflow-auto lg:overflow-visible translate-x-[-100%] lg:translate-x-[0%]">
            <div class="close-icon pt-4 pb-4 pr-2.5 text-right block lg:hidden "><a href="#" @click="toggleSidebar()"><img class="invert dark:invert-0 inline" src="../../assets/img/close-icon.png" alt=""></a></div>
            <ul class="lg:space-x-3 xl:space-x-6 2xl:space-x-8 block lg:flex justify-between items-center">
              
              <li>
                <router-link to="/" class="flex lg:justify-between items-center text-base lg:text-sm xl:text-base font-bold hover:no-underline text-white dark:text-black hover:text-gray-200 px-6 py-4 lg:px-0 lg:py-6"><i class=""><img class="lg:max-w-[18px] xl:max-w-6 dark:brightness-0" src="../../assets/img/menu-icon-home.png" alt=""></i><span class="pl-2">Home</span>
                </router-link>
                
              </li>


              <li><a href="#" class="flex lg:justify-between items-center text-base lg:text-sm xl:text-base font-bold text-white dark:text-black hover:no-underline hover:text-gray-200 px-6 py-4 lg:px-0 lg:py-6"><i class=""><img class="lg:max-w-[18px] xl:max-w-6 dark:brightness-0" src="../../assets/img/menu-icon-collection.png" alt=""></i><span class="pl-2">Collections</span></a></li>
              <li class="d-hidden lg:block"><a href="#" class="flex lg:justify-between items-center text-base lg:text-sm xl:text-base font-bold text-white dark:text-black hover:no-underline hover:text-gray-200 px-6 py-4 lg:px-0 lg:py-6"><i class=""><img class="lg:max-w-[18px] xl:max-w-6 dark:brightness-0" src="../../assets/img/menu-icon-shop.png" alt=""></i><span class="pl-2">Shop</span></a></li>

              <li class="block lg:hidden"><a href="#" class="flex lg:justify-between items-center text-base lg:text-sm xl:text-base font-bold text-white hover:no-underline dark:text-black hover:text-gray-200 px-6 py-4 lg:px-0 lg:py-6"><i class=""><img class="lg:max-w-[18px] xl:max-w-6 dark:brightness-0" src="../../assets/img/menu-icon-audiance.png" width="28" alt=""></i><span class="pl-2">Audience</span></a></li>
              <li class="block lg:hidden"><a href="#" class="flex lg:justify-between items-center text-base lg:text-sm xl:text-base font-bold text-white hover:no-underline dark:text-black hover:text-gray-200 px-6 py-4 lg:px-0 lg:py-6"><i class=""><img class="lg:max-w-[18px] xl:max-w-6 dark:brightness-0" src="../../assets/img/menu-icon-analiytics.png" alt=""></i><span class="pl-2">Analytics</span></a></li>
              <li class="block lg:hidden"><a href="#" class="flex lg:justify-between items-center text-base lg:text-sm xl:text-base font-bold text-white hover:no-underline dark:text-black hover:text-gray-200 px-6 py-4 lg:px-0 lg:py-6"><i class=""><img class="lg:max-w-[18px] xl:max-w-6 dark:brightness-0" src="../../assets/img/menu-icon-commerce.png" alt=""></i><span class="pl-2">Commerce</span></a></li>
              <li class="block lg:hidden"><a href="#" class="flex lg:justify-between items-center text-base lg:text-sm xl:text-base font-bold text-white hover:no-underline dark:text-black hover:text-gray-200 px-6 py-4 lg:px-0 lg:py-6"><i class=""><img class="lg:max-w-[18px] xl:max-w-6 dark:brightness-0" src="../../assets/img/menu-icon-promotion.png" alt=""></i><span class="pl-2">Promotions</span></a></li>
              
              <li><a href="#" class="flex lg:justify-between items-center text-base lg:text-sm xl:text-base font-bold text-white hover:no-underline dark:text-black hover:text-gray-200 px-6 py-4 lg:px-0 lg:py-6"><i class=""><img class="lg:max-w-[18px] xl:max-w-6 dark:brightness-0" src="../../assets/img/menu-icon-notifications.png" alt=""></i><span class="pl-2">Notifications</span></a></li>
              <li><router-link to="/settings" class="flex lg:justify-between items-center text-base lg:text-sm xl:text-base font-bold text-white hover:no-underline dark:text-black hover:text-gray-200 px-6 py-4 lg:px-0 lg:py-6"><i class=""><img class="lg:max-w-[18px] xl:max-w-6 dark:brightness-0" src="../../assets/img/menu-icon-setting.png" alt=""></i><span class="pl-2">Settings</span></router-link></li>
              <li class="relative group"><a href="#" class="flex lg:justify-between items-center text-base lg:text-sm xl:text-base font-bold text-white hover:no-underline dark:text-black hover:text-gray-200 px-6 py-4 lg:px-0 lg:py-6"><i class=""><img class="lg:max-w-[18px] xl:max-w-6 dark:brightness-0" src="../../assets/img/menu-icon-account.png" alt=""></i><span class="pl-2">Account</span></a>
                <ul class="lg:absolute d-hidden lg:group-hover:block lg:bg-black lg:dark:bg-white w-60 z-10">
                    <li><router-link to="/user" class="block px-5 py-3 text-white dark:text-black hover:text-black font-bold hover:no-underline hover:bg-gradient-to-t hover:from-[#855808] hover:to-[#f6dd7b]" >My Profile</router-link></li>
                    <li><router-link to="/settings" class="block px-5 py-3 text-white dark:text-black hover:text-black font-bold hover:no-underline hover:bg-gradient-to-t hover:from-[#855808] hover:to-[#f6dd7b]">Settings</router-link></li>
                    <li><a href="#" class="block px-5 py-3 text-white hover:no-underline dark:text-black hover:text-black font-bold hover:bg-gradient-to-t hover:from-[#855808] hover:to-[#f6dd7b]">Configuration</a></li>
                    <li><a href="#" class="block px-5 py-3 text-white hover:no-underline dark:text-black hover:text-black font-bold hover:bg-gradient-to-t hover:from-[#855808] hover:to-[#f6dd7b]">Payment Options</a></li>
                    <li><a href="#" class="block px-5 py-3 text-white hover:no-underline dark:text-black hover:text-black font-bold hover:bg-gradient-to-t hover:from-[#855808] hover:to-[#f6dd7b]">Become a Creator</a></li>
                    <li><a href="#" class="block px-5 py-3 text-white hover:no-underline dark:text-black hover:text-black font-bold hover:bg-gradient-to-t hover:from-[#855808] hover:to-[#f6dd7b]">Help</a></li>
                    <li><router-link to="/login" class="block px-5 py-3 text-[#f5de7f] dark:text-black hover:text-black font-bold hover:no-underline hover:bg-gradient-to-t hover:from-[#855808] hover:to-[#f6dd7b]">LOGOUT</router-link></li>
                </ul>
              </li>
             </ul> 
             <div class="mt-12 mb-4 block lg:hidden"><button class="bg-gradient-to-b from-[#f1dc82] to-[#865909] text-white dark:bg-gradient-to-b dark:from-black dark:to-black  text-white  font-bold py-3 px-8  rounded-full mt-2 flex justify-between items-center m-auto">Button <span class="ml-2"><img class="invert" src="../../assets/img/accordion-arrow.png" width="18" alt=""></span></button></div> 
          </nav>
          
         </div>
         <div @click="toggleDarkMode" class="toggler lg:mr-3 lg:ml-auto">
          <button type="button" aria-label="Switch to dark theme" class="rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20">
            <svg viewBox="0 0 24 24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600"><path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"></path><path d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061" fill="none"></path></svg>
            
            <svg viewBox="0 0 24 24" aria-hidden="true" class="d-hidden h-6 w-6 fill-zinc-700 stroke-white transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-white [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-white"><path d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></button>
         </div>
         <div class="search d-hidden lg:block"><a href="#" class="rounded-full bg-gradient-to-b from-[#f1dc82] to-[#865909] dark:bg-gradient-to-b dark:from-black dark:to-black text-center text-white px-6 xl:px-9 py-3 font-semibold">Search</a></div>
          <!-- <input type="search" placeholder="Search" class="p-1 rounded-full bg-black text-center"> -->
      </div>
    </div> 
  </header>
  <Navbar />
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      if (this.isDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    },
    toggleSidebar() {
      const sidebar = document.getElementById('navbar');
      sidebar.classList.toggle('translate-x-0');
      sidebar.classList.toggle('translate-x-[-100%]');
    },
    
  },
  mounted() {
      const theme = localStorage.getItem('theme');
      let flag = true;
      const toggler = document.querySelector('.toggler');
      if (theme === 'dark') {
        this.isDarkMode = true;
        document.documentElement.classList.add('dark');
      }

      const dropdowns = document.querySelectorAll('.group');
      dropdowns.forEach(dropdown => {
          dropdown.addEventListener('click', function() {
              const submenu = this.querySelector('ul');
              if (submenu.classList.contains('d-hidden')) {
                  submenu.classList.remove('d-hidden');
              } else {
                  submenu.classList.add('d-hidden');
              }
          });
      });



    },
};
</script>
