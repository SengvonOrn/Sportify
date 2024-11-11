<template>
  <div class="grid grid-cols-4 gap-2 ml-3 mt-2">
    <div
      @click="handleclick(item)"
      v-for="item in Data_title"
      :key="item.id"
      class="flex bg-gray-800 text-white items-center justify-between rounded overflow-hidden cursor-pointer relative group"
    >
      <div class="flex items-center">
        <img v-bind:src="item.Image" width="50px" />
        <span class="ms-2 font-medium">{{ item.name }}</span>
      </div>
      <div class="flex z-10 mr-3">
        <div
          v-if="item.count === 0"
          class="hidden items-center justify-center text-black bg-green-500 w-9 h-9 rounded-full group-hover:flex"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              class="w-6 h-6 flex justify-center"
            >
              <path
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
              />
            </svg>
          </span>
        </div>

        <div
          v-if="item.count === 1"
          class="hidden items-center justify-center text-black bg-green-500 w-9 h-9 rounded-full group-hover:flex"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-7 h-7"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d="M14 19h4V5h-4M6 19h4V5H6z" />
            </svg>
          </span>
        </div>
      </div>
      <div v-if="item.count === 1" class="flex absolute right-5">
        <div class="now playing" id="music">
          <div class="bar n1"></div>
          <div class="bar n2"></div>
          <div class="bar n3"></div>
          <div class="bar n4"></div>
          <div class="bar n5"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="p-4 mt-11">
    <span class="text-white font-bold text-3xl hover:underline cursor-pointer">
      Made for seng
    </span>
  </div>
  <!-- ======================================================================= -->

  <div class="grid grid-cols-5 ml-2 mt-1 cursor-pointer">
    <div
      @click="handleclick(item)"
      v-for="item in Data_title"
      :key="item.id"
      class="flex items-center justify-between group"
    >
      <div
        class="w-full hover:bg-white hover:bg-opacity-10 rounded-lg p-[10px]"
      >
        <div class="flex rounded-lg relative overflow-hidden content">
          <img :src="item.Image" alt="images" />
          <div class="absolute p-2">
            <img :src="sportify" alt="" width="18" />
          </div>
          <div class="absolute bottom-0 p-4 text-white font-bold">
            Daily Mix1
          </div>
          <!-- ------------------------------------- -->
          <div
            v-if="item.count === 0"
            class="hidden items-center justify-center text-black bg-green-500 w-11 h-11 rounded-full absolute bottom-[-45px] right-0 group-hover:flex child"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                class="w-7 h-7 flex justify-center"
              >
                <path
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                />
              </svg>
            </span>
          </div>
          <!-- ------------------------------------ -->
          <div
            v-if="item.count === 1"
            class="hidden items-center justify-center text-black bg-green-500 w-11 h-11 rounded-full absolute bottom-[-45px] right-0 group-hover:flex child"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-7 h-7"
                viewBox="0 0 24 24"
              >
                <path fill="currentColor" d="M14 19h4V5h-4M6 19h4V5H6z" />
              </svg>
            </span>
          </div>
          <!-- --------------------------------------- -->
        </div>
        <div class="text-gray-300 mt-3">
          <p>Catch all the latest</p>
          <p>My name seng...</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ImgUrl1 from "../../src/assets/Images/Tylor.jpg";
import ImgUrl2 from "../../src/assets/Images/Vnada.jpg";
import ImgUrl3 from "../../src/assets/Images/G-devith.jpg";
import ImgUrl4 from "../../src/assets/Images/Justion.jpg";
import ImgUrl5 from "../../src/assets/Images/Olivia.jpg";
import ImgUrl6 from "../../src/assets/Images/Stephen.jpg";
import ImgUrl7 from "../../src/assets/Images/Virak.jpg";
import ImgUrl8 from "../../src/assets/Images/Billi.jpg";
import sportify from "../../src/assets/Images/spotify.png";
export default {
  name: "TitleIMG",

  data() {
    return {
      Data_title: [
        {
          id: 1,
          Image: ImgUrl1,
          name: "Tylor Swift",
          count: 0,
        },
        {
          id: 2,
          Image: ImgUrl2,
          name: "Vanada",
          count: 0,
        },
        {
          id: 3,
          Image: ImgUrl3,
          name: "G-devith",
          count: 0,
        },
        {
          id: 4,
          Image: ImgUrl4,
          name: "Justin Bieber",
          count: 0,
        },
        {
          id: 5,
          Image: ImgUrl5,
          name: "Olivia Rodrigo",
          count: 0,
        },
        {
          id: 6,
          Image: ImgUrl6,
          name: "Stephen Sanchez",
          count: 0,
        },
        {
          id: 7,
          Image: ImgUrl7,
          name: "Doung Virakseth",
          count: 0,
        },
        {
          id: 8,
          Image: ImgUrl8,
          name: "Billie Eillish",
          count: 0,
        },
      ],
      sportify,
    };
  },
  methods: {
    handleclick(selectedItem) {
      this.Data_title.forEach((it) => {
        it.count = it === selectedItem ? (it.count === 0 ? 1 : 0) : 0;
      });
    },
  },
};
</script>
<style scoped></style>
