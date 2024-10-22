<script setup>
import Header from '../components/Header.vue'
import Sidebar from '../components/Sidebar.vue'

</script>

<template>

  <!-- Header Section -->
    <Header />
    <!-- Main Section -->
    <div class="middle py-4 lg:py-7">
   <div class="container mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <!-- Posts Section -->
        <div class="lg:col-span-2 space-y-4">
            <!-- Post 1 -->
            <div class="bg-white dark:bg-gradient-to-tl dark:from-[#825405] dark:to-[#f6dd7b] rounded-lg">
                <div class="flex justify-between items-center mb-2 p-4 xl:p-6 2xl:p-9 pt-2 pb-2 xl:pt-4 xl:pb-4 2xl:pt-6 2xl:pb-6">

                    <div class="flex items-center space-x-4">
                        <div class="w-9 h-9 lg:w-16 lg:h-16 2xl:w-20 2xl:h-20 bg-gray-700 rounded-full"><img src="../../assets/img/profile-img2.png" alt=""></div>
                        <div>
                            <div class="text-black font-bold text-xs lg:text-base xl:text-xl 2xl:text-2xl">Annie Geturgun</div>
                            <span class="text-yellow-900 dark:text-black text-[9px] xl:text-sm xl:text-base 2xl:text-lg font-semibold block">@honeypie</span>
                        </div>
                    </div>

                    <div class="flex">
                        <div class="flex items-center space-x-2">
                            <span class="text-[9px] lg:text-base xl:text-xl 2xl:text-2xl text-black font-semibold pr-2 lg:pr-4">September 20, 2024</span>
                        </div>
                        <div class="text-black font-bold text-xs lg:text-base xl:text-xl 2xl:text-2xl">•••</div>
                    </div>
                    
                </div>
                
                <div class="text-black font-semibold  text-xs lg:text-base xl:text-lg 2xl:text-xl p-4 xl:p-6 2xl:p-9 xl:pb-4 pt-0 xl:pt-0">
                <p>Here I am at the pool looking very blue</p>
                </div>


                <div class="mb-0"><img src="../../assets/img/post-img1.png" alt=""></div>
               
                <div class="flex justify-end p-4 pt-3 pb-2 lg:p-9 lg:pt-5 lg:pb-5">
                    <div class="flex space-x-2 lg:space-x-6">
                        <a href="#"><img class="w-4 lg:w-6 dark:invert" src="../../assets/img/coin-icon.png" alt=""></a>
                        <a href="#"><img class="w-4 lg:w-6 dark:invert" src="../../assets/img/message-icon.png" alt=""></a>
                        <a href="#"><img class="w-4 lg:w-6 dark:invert" src="../../assets/img/heart-icon.png" alt=""></a>
                        <a href="#"><img class="w-4 lg:w-6 dark:invert" src="../../assets/img/share-icon.png" alt=""></a>
                    </div>
                </div>
                
                
                
            </div>
            
             <!-- Post 2 -->
             <div class="bg-white dark:bg-gradient-to-tl dark:from-[#825405] dark:to-[#f6dd7b] rounded-lg">
              <div class="flex justify-between items-center mb-2 p-4 xl:p-6 2xl:p-9 pt-2 pb-2 xl:pt-4 xl:pb-4 2xl:pt-6 2xl:pb-6">

                <div class="flex items-center space-x-4">
                    <div class="w-9 h-9 lg:w-16 lg:h-16 2xl:w-20 2xl:h-20 bg-gray-700 rounded-full"><img src="../../assets/img/profile-img2.png" alt=""></div>
                    <div>
                        <div class="text-black font-bold text-xs lg:text-base xl:text-xl 2xl:text-2xl">Annie Geturgun</div>
                        <span class="text-yellow-900 dark:text-black text-[9px] xl:text-sm xl:text-base 2xl:text-lg font-semibold block">@honeypie</span>
                    </div>
                </div>

                <div class="flex">
                    <div class="flex items-center space-x-2">
                        <span class="text-[9px] lg:text-base xl:text-xl 2xl:text-2xl text-black font-semibold pr-2 lg:pr-4">September 20, 2024</span>
                    </div>
                    <div class="text-black font-bold text-xs lg:text-base xl:text-xl 2xl:text-2xl">•••</div>
                </div>
                
            </div>
                
              <div class="text-black font-semibold  text-xs lg:text-base xl:text-lg 2xl:text-xl p-4 xl:p-6 2xl:p-9 xl:pb-4 pt-0 xl:pt-0">
               <p>Here I am at the pool looking very blue</p>
              </div>


                <div class="mb-0"><img src="../../assets/img/post-img2.png" alt=""></div>
               
                <div class="flex justify-end p-4 pt-3 pb-2 lg:p-9 lg:pt-5 lg:pb-5">
                  <div class="flex space-x-2 lg:space-x-6">
                      <a href="#"><img class="w-4 lg:w-6 dark:invert" src="../../assets/img/coin-icon.png" alt=""></a>
                      <a href="#"><img class="w-4 lg:w-6 dark:invert" src="../../assets/img/message-icon.png" alt=""></a>
                      <a href="#"><img class="w-4 lg:w-6 dark:invert" src="../../assets/img/heart-icon.png" alt=""></a>
                      <a href="#"><img class="w-4 lg:w-6 dark:invert" src="../../assets/img/share-icon.png" alt=""></a>
                  </div>
                </div>
                
                <div class="grid grid-cols-2 gap-4 lg:gap-6 2xl:gap-8 p-4 pb-4 lg:p-6 lg:pb-6 pt-0 lg:pt-0 2xl:pt-0 2xl:p-9 2xl:pb-9">
                    <!-- Card 1 -->
                    <div class="bg-white rounded-lg shadow-md overflow-hidden">
                      <div class="relative">
                        <img src="../../assets/img/profile-block-post-img.png" alt="Profile image" class="w-full h-28 sm:h-40 md:h-52 object-cover object-bottom">
                        <div class="absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>
                        <div class="absolute bottom-0 left-0 p-2 lg:p-3 flex items-center justify-between w-full bg-gradient-to-t from-[#825405] to-[#f6dd7b] dark:bg-gradient-to-b">
                          <div class="flex items-center">
                            <img src="../../assets/img/profile-img1.png" alt="Avatar" class="w-9 h-9 lg:w-16 lg:h-16 2xl:w-20 2xl:h-20 rounded-full mt-[-50px] lg:mt-[-80px]">
                            <div class="ml-1 lg:ml-3 2xl:ml-4 text-white">
                                <h2 class="font-bold text-xs lg:text-lg 2xl:text-xl">Honey Pie</h2>
                                <p class="text-[9px] lg:text-sm 2xl:text-base font-semibold">@honeypie</p>
                            </div>
                          </div>
                          <div class="toggle-dropdown"><a href="#"><img class="h-5 2xl:h-7" src="../../assets/img/toggle-dot.png" alt=""></a></div>
                        </div>
                    </div>
                     
                    </div>
                    <!-- Card 2 -->
                    <div class="bg-white rounded-lg shadow-md overflow-hidden">
                      <div class="relative">
                        <img src="../../assets/img/profile-block-post-img2.png" alt="Profile image" class="w-full h-28 sm:h-40 md:h-52 object-cover object-bottom">
                        <div class="absolute inset-0 bg-gradient-to-t from-black opacity-50"></div>
                        <div class="absolute bottom-0 left-0 p-2 lg:p-3 flex items-center justify-between w-full bg-gradient-to-t from-[#825405] to-[#f6dd7b] dark:bg-gradient-to-b">
                          <div class="flex items-center">
                            <img src="../../assets/img/profile-img1.png" alt="Avatar" class="w-9 h-9 lg:w-16 lg:h-16 2xl:w-20 2xl:h-20 rounded-full mt-[-50px] lg:mt-[-80px]">
                            <div class="ml-1 lg:ml-3 2xl:ml-4 text-white">
                                <h2 class="font-bold text-xs lg:text-lg 2xl:text-xl">Honey Pie</h2>
                                <p class="text-[9px] lg:text-sm 2xl:text-base font-semibold">@honeypie</p>
                            </div>
                          </div>
                          <div class="toggle-dropdown"><a href="#"><img class="h-5 2xl:h-7" src="../../assets/img/toggle-dot.png" alt=""></a></div>
                        </div>
                    </div>
                     
                    </div>
                </div>
                
            </div>

           
            <!-- Post 3 (Locked) -->
            <div class="bg-white dark:bg-gradient-to-tl dark:from-[#825405] dark:to-[#f6dd7b] rounded-lg">
              <div class="flex justify-between items-center mb-2 p-4 xl:p-6 2xl:p-9 pt-2 pb-2 xl:pt-4 xl:pb-4 2xl:pt-6 2xl:pb-6">

                <div class="flex items-center space-x-4">
                    <div class="w-9 h-9 lg:w-16 lg:h-16 2xl:w-20 2xl:h-20 bg-gray-700 rounded-full"><img src="../../assets/img/profile-img2.png" alt=""></div>
                    <div>
                        <div class="text-black font-bold text-xs lg:text-base xl:text-xl 2xl:text-2xl">Annie Geturgun</div>
                        <span class="text-yellow-900 dark:text-black text-[9px] xl:text-sm xl:text-base 2xl:text-lg font-semibold block">@honeypie</span>
                    </div>
                </div>

                <div class="flex">
                    <div class="flex items-center space-x-2">
                        <span class="text-[9px] lg:text-base xl:text-xl 2xl:text-2xl text-black font-semibold pr-2 lg:pr-4">September 20, 2024</span>
                    </div>
                    <div class="text-black font-bold text-xs lg:text-base xl:text-xl 2xl:text-2xl">•••</div>
                </div>
                
               </div>
                
               <div class="text-black font-semibold text-xs lg:text-base xl:text-lg 2xl:text-xl p-4 xl:p-6 2xl:p-9 xl:p-6 2xl:p-9 xl:pb-4 pt-0 xl:pt-0">
                <p>Here I am at the pool looking very blue</p>
                </div>


                <div class="mb-0">
                
                <div class="w-full  bg-gray-300 relative">
                <img src="../../assets/img/post-blur-img1.png" alt="">
                    <div class="absolute inset-0 backdrop-blur-lg bg-opacity-70"></div>
                    <!-- Lock Icon -->
                    <div class="absolute inset-0 flex flex-col items-center justify-center text-center">
                        <div class="p-3 md:p-4">
                           <img class="h-16 lg:h-28 2xl:h-auto" src="../../assets/img/lock-icon.png" alt="">
                        </div>
                        <div class="mt-2 lg:mt-4 text-center">
                            <button class="bg-gradient-to-b from-[#f1dc82] to-[#865909] dark:bg-gradient-to-b dark:from-black dark:to-black text-white  text-xs md:text-sm lg:text-base font-bold py-2 px-4 lg:py-3 md:px-6 rounded-full shadow-lg">
                                Subscribe to Unlock
                            </button>
                        </div>
                    </div>
                </div>
                 
                </div>
               
                <div class="flex justify-end p-4 pt-3 pb-2 lg:p-9 lg:pt-5 lg:pb-5">
                  <div class="flex space-x-2 lg:space-x-6">
                      <a href="#"><img class="w-4 lg:w-6 dark:invert" src="../../assets/img/coin-icon.png" alt=""></a>
                      <a href="#"><img class="w-4 lg:w-6 dark:invert" src="../../assets/img/message-icon.png" alt=""></a>
                      <a href="#"><img class="w-4 lg:w-6 dark:invert" src="../../assets/img/heart-icon.png" alt=""></a>
                      <a href="#"><img class="w-4 lg:w-6 dark:invert" src="../../assets/img/share-icon.png" alt=""></a>
                  </div>
                </div>
                
                
                
            </div>
            

        </div>

        <!-- Sidebar Section -->
        <Sidebar />
    </div>
   </div>
  </div>
  
</template>
