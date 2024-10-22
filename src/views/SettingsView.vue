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
           <!-- Parent Accordion -->
           <div class="bg-white dark:bg-gradient-to-tl dark:from-[#825405] dark:to-[#f6dd7b] rounded-lg">
            <form @submit.prevent="handleEditProfile">
              <button type="button" class="accordion-header w-full flex justify-between items-center py-3 px-6 md:py-3 md:px-6 2xl:py-4 2xl:px-8 text-black font-bold text-base sm:text-lg md:text-xl md:text-xl 2xl:text-2xl">
                  <span>My Profile</span>
                  <i class="accordion-arrow"><img class="h-3 md:h-3.5 2xl:h-auto" src="../../assets/img/accordion-arrow.png" alt=""></i>
              </button>
              <div class="accordion-content hidden text-black">
                  <!-- Nested Accordion Inside the First Accordion -->
                  <div class="border-b border-t border-gray-200">
                      <div class="px-4">
                          <button type="button" class="nested-accordion-header w-full flex justify-between items-center p-2 md:p-3 2xl:p-4 text-black font-semibold text-base sm:text-lg md:text-xl md:text-xl 2xl:text-2xl">
                              <span class="flex items-center"><i class="accordion-arrow pr-3"><img class="h-3.5 md:h-5 2xl:h-auto inline" src="../../assets/img/accordion-arrow-left.png" alt=""></i> Edit Profile</span>
                          </button>
                          <div class="nested-accordion-content px-1 2xl:px-4 hidden">
                            <div class="flex flex-col items-center">
                              <!-- Cover Image -->
                              <div class="w-full">
                                  <div class="w-full relative bg-gradient-to-tl from-[#9a7940] to-[#f5de7f] dark:bg-gradient-to-b dark:from-black dark:to-black flex justify-center items-center">
                                    <!-- <div class="absolute left-0 top-0 w-full h-full"><img class="object-cover h-full" src="../../assets/img/post-img1.png" alt=""></div> -->
                                    <div class="text-center pt-16 pb-28 z-10">
                                    <img class="h-20 md:h-32 2xl:h-auto m-auto brightness-0 invert dark:brightness-100 dark:invert-0" src="../../assets/img/poster-upload-icon.png" alt="">
                                    <p class="text-center p-2 pt-8 font-semibold text-white text-xs md:text-base">Upload Your Cover Image - Recommended Size 1920px x 800px</p>
                                    <input class="absolute left-0 top-0 w-full h-full opacity-0" type="file">
                                    </div>  
                                  </div>
                              </div>
                              <!-- Profile Image -->
                            <div class="flex flex-col items-center pb-6"> 
                              <div class="w-32 h-32 bg-black rounded-full border-2 dark:border-yellow-300 border-black flex justify-center items-center overflow-hidden custom-mt-81 z-10">
                                  <img src="../../assets/img/upload-profile-icon.png" alt="">
                              </div>
                              <p class="mt-2 text-xs md:text-base font-semibold text-center">Upload Your Profile Image - Recommended Size 80px x 80px</p>
                            </div> 
                          </div>
                           
                              <div>
                                  <label class="block text-black text-sm md:text-base 2xl:text-lg font-semibold pb-2">Username</label>
                                  <input type="text" class="w-full px-3 py-3 md:px-4 md:py-4 border border-[#b5842e] text-black text-sm md:text-base 2xl:text-lg font-semibold rounded-lg outline-none" placeholder="Username" v-model="form.userName">
                                  <span v-if="error.userName" class="text-red-600 font-semibold text-sm mt-2">{{ error.userName }}</span>
                                  <span class="block text-sm text-[#b5842e] dark:text-black font-semibold pt-3 pb-6">https://www.echolive/65748392</span>
                              </div>
                              <div>
                                  <label class="block text-black text-sm md:text-base 2xl:text-lg font-semibold pb-2">Display Name</label>
                                  <input type="text" class="w-full px-3 py-3 md:px-4 md:py-4 border border-[#b5842e] text-black text-sm md:text-base 2xl:text-lg font-semibold rounded-lg outline-none" placeholder="Enter display name" @input="validateLength('displayName', 50)" v-model="form.displayName">
                                  <span v-if="error.displayName" class="text-red-600 font-semibold text-sm mt-2">{{ error.displayName }}</span>
                                  <span class="block text-sm text-[#b5842e] dark:text-black font-semibold pt-3 text-right">{{form.displayName.length}}/50</span>
                              </div>
                              <div>
                                  <label class="block text-black text-sm md:text-base 2xl:text-lg font-semibold pb-2">About Me</label>
                                  <textarea class="w-full px-3 py-3 md:px-4 md:py-4 border  border-[#b5842e] text-black text-sm md:text-base 2xl:text-lg font-semibold rounded-lg outline-none" rows="3" placeholder="Tell us about yourself" @input="validateLength('aboutMe', 1000)" v-model="form.aboutMe"></textarea>
                                  <span v-if="error.aboutMe" class="text-red-600 font-semibold text-sm mt-2">{{ error.aboutMe }}</span>
                                  <span class="block text-sm text-[#b5842e] dark:text-black font-semibold pt-3 text-right">{{form.aboutMe.length}}/1000</span>
                              </div>
                              <div>
                                  <label class="block text-black text-sm md:text-base 2xl:text-lg font-semibold pb-2">Location</label>
                                  <input type="text" class="w-full px-3 py-3 md:px-4 md:py-4 border  border-[#b5842e] text-black text-sm md:text-base 2xl:text-lg font-semibold rounded-lg outline-none" placeholder="Enter location" @input="validateLength('location', 64)" v-model="form.location">
                                  <span v-if="error.location" class="text-red-600 font-semibold text-sm mt-2">{{ error.location }}</span>
                                  <span class="block text-sm text-[#b5842e] dark:text-black font-semibold pt-3 text-right">{{form.location.length}}/64</span>
                              </div>
                              <div>
                                  <label class="block text-black text-sm md:text-base 2xl:text-lg font-semibold pb-2">My Website</label>
                                  <input type="text" class="w-full px-3 py-3 md:px-4 md:py-4 border border-[#b5842e] text-black text-sm md:text-base 2xl:text-lg font-semibold rounded-lg outline-none" placeholder="Website URL" @input="validateLength('myWebsite', 100)" v-model="form.myWebsite">
                                  <span v-if="error.myWebsite" class="text-red-600 font-semibold text-sm mt-2">{{ error.myWebsite }}</span>
                                  <span class="block text-sm text-[#b5842e] dark:text-black font-semibold pt-3 text-right">{{form.myWebsite.length}}/100</span>
                              </div>
                              
                          </div>
                      </div>
                  </div>

                  <!-- Nested Accordion Inside the second Accordion -->
                  <div class="border-b border-gray-200">
                    <div class="px-4">
                        <button type="button" class="nested-accordion-header w-full flex justify-between items-center p-2 md:p-3 2xl:p-4 text-black font-semibold text-base sm:text-lg md:text-xl md:text-xl 2xl:text-2xl">
                          <span class="flex items-center"><i class="accordion-arrow pr-3"><img class="h-3.5 md:h-5 2xl:h-auto inline" src="../../assets/img/accordion-arrow-left.png" alt=""></i> My Subscriptions</span>
                        </button>
                        <div class="nested-accordion-content px-4 hidden">
                        dfsdfsdf
                        
                        </div>
                    </div>
                  </div>
                  <!-- Nested Accordion Inside the third Accordion -->
                  <div class="border-b border-gray-200">
                    <div class="px-4">
                        <button type="button" class="nested-accordion-header w-full flex justify-between items-center p-2 md:p-3 2xl:p-4 text-black font-semibold text-base sm:text-lg md:text-xl md:text-xl 2xl:text-2xl">
                            <span class="flex items-center"><i class="accordion-arrow pr-3"><img class="h-3.5 md:h-5 2xl:h-auto inline" src="../../assets/img/accordion-arrow-left.png" alt=""></i> Privacy</span>
                        </button>
                        <div class="nested-accordion-content px-4 hidden">
                        dfsdfsdf
                        
                        </div>
                    </div>
                  </div>

                  <div class="pt-10 md:pt-16 pb-5 px-4 text-center"><button type="submit" class="bg-gradient-to-b from-[#f1dc82] to-[#865909] text-white shadow-lg dark:bg-gradient-to-b dark:from-black dark:to-black  text-white text-xs md:text-sm lg:text-base font-bold py-3 px-4 lg:py-3 md:px-6 rounded-full w-full md:w-1/2 uppercase ">Save Changes</button></div>  
                  <div class="text-sm font-semibold pb-5 px-8">*Mandatory Fields</div>

              </div>
            </form>
           </div>

           <div class="bg-white dark:bg-gradient-to-tl dark:from-[#825405] dark:to-[#f6dd7b] rounded-lg">
            <button class="accordion-header w-full flex justify-between items-center py-3 px-6 md:py-3 md:px-6 2xl:py-4 2xl:px-8 text-black font-bold text-base sm:text-lg md:text-xl md:text-xl 2xl:text-2xl">
                <span>Account</span>
                <i class="accordion-arrow"><img class="h-3 md:h-3.5 2xl:h-auto" src="../../assets/img/accordion-arrow.png" alt=""></i>
            </button>
            <div class="accordion-content hidden text-black">
               <div class="p-8">No data</div>
            </div>
           </div>

           <div class="bg-white dark:bg-gradient-to-tl dark:from-[#825405] dark:to-[#f6dd7b] rounded-lg">
            <button class="accordion-header w-full flex justify-between items-center py-3 px-6 md:py-3 md:px-6 2xl:py-4 2xl:px-8 text-black font-bold text-base sm:text-lg md:text-xl md:text-xl 2xl:text-2xl">
                <span>Section Title</span>
                <i class="accordion-arrow"><img class="h-3 md:h-3.5 2xl:h-auto" src="../../assets/img/accordion-arrow.png" alt=""></i>
            </button>
            <div class="accordion-content hidden text-black">
              <div class="p-8">No data</div>
            </div>
           </div>

        </div>

        <!-- Sidebar Section -->
        <Sidebar />
    </div>
   </div>
  </div>

</template>
<script>
export default {
  data() {
    return {
      form:{
        userName: '',
        displayName: '',
        aboutMe: '',
        location: '',
        myWebsite: '',
      },
      error:{
        userName: '',
        displayName: '',
        aboutMe: '',
        location: '',
        myWebsite: '',
      },
      checkError:false,
    };
  },
  methods: {
      profileValidate() {
        if(this.form.userName==""){
          this.error.userName = "Username is required!";
        }else{
          this.error.userName = "";
        }
        if(this.form.displayName==""){
          this.error.displayName = "Display name is required!";
        }else{
          this.error.displayName = "";
        }
        if(this.form.aboutMe==""){
          this.error.aboutMe = "About me is required!";
        }else{
          this.error.aboutMe = "";
        }
        if(this.form.location==""){
          this.error.location = "Location is required!";
        }else{
          this.error.location = "";
        }
        if(this.form.myWebsite==""){
          this.error.myWebsite = "My website is required!";
        }else{
          this.error.myWebsite = "";
        }
        if(this.error.userName == '' && this.error.displayName == '' && this.error.aboutMe == '' && this.error.location == '' && this.error.myWebsite == ''){
          this.checkError = false;
        }else{
          this.checkError = true;
        }
      },
      handleEditProfile() {
        this.profileValidate();
        if(!this.checkError){
          alert('Submitted');
        }
      },
      validateLength(field, maxChars) {
        if (this.form[field].length > maxChars) {
          this.form[field] = this.form[field].slice(0, maxChars); // Trim excess characters
          this.error[field] = `Character limit exceeded! Maximum allowed is ${maxChars} characters.`;
        } else {
          this.error[field] = null; // Clear the error if within the limit
        }
      }
    
  },
  mounted() {
      // Parent Accordion functionality
      document.querySelectorAll('.accordion-header').forEach(header => {
          header.addEventListener('click', () => {
              const content = header.nextElementSibling;
              const isOpen = content.classList.contains('hidden');
              document.querySelectorAll('.accordion-content').forEach(c => c.classList.add('hidden')); // Close all
              document.querySelectorAll('.accordion-header').forEach(h => h.classList.remove('active')); // Close all
              if (isOpen) {
                  header.classList.add('active'); // Open clicked one
                  content.classList.remove('hidden'); // Open clicked one
              }
          });
      });

      // Nested Accordion functionality
      document.querySelectorAll('.nested-accordion-header').forEach(header => {
          header.addEventListener('click', () => {
              const content = header.nextElementSibling;
              const isOpen = content.classList.contains('hidden');
              document.querySelectorAll('.nested-accordion-content').forEach(c => c.classList.add('hidden')); // Close all nested
              document.querySelectorAll('.nested-accordion-header').forEach(h => h.classList.remove('active')); // Close all nested
              if (isOpen) {
                  header.classList.add('active');
                  content.classList.remove('hidden'); // Open clicked one
              }
          });
      });

    },
};
</script>

