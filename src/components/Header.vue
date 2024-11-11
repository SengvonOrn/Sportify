<template>
  <header class="w-full bg-primary rounded h-400">
    <nav class="dark:bg-slate-900 p-3 pt-4 rounded-t-md sticky">
      <div class="flex justify-between">
        <div class="flex gap-x-2 text-white">
          <span
            class="flex items-center justify-center bg-slate-800 p-1 w-8 h-8 rounded-full cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </span>
          <span
            class="flex items-center justify-center bg-slate-800 p-1 w-8 h-8 rounded-full cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
        <!------------------------------------------------>
        <div
          class="flex items-center w-5/12 te h-14 text-gray-100 bg-slate-800 rounded-full relative overflow-hidden"
          v-show="toggle_Search"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7 mx-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
          <input
            type="search"
            id="btn_item"
            placeholder="What do you want to play?"
            class="flex w-full h-full outline-none px-2 mr-3 text-lg items-center bg-slate-800"
          />
        </div>
        <!----------------------------------------------->

        <div class="flex gap-x-4 items-center">
          <span
            class="text-base font-bold text-black bg-white px-3 py-2 rounded-full hover:scale-105"
            v-show="Prem"
          >
            Explore Premium
          </span>
          <div class="group">
            <div
              class="flex items-center justify-center text-gray-400 bg-slate-800 p-1 w-8 h-8 hover:scale-105 rounded-full 0"
            >
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 hover:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </span>
            </div>
            <div class="hidden absolute right-20 bottom-28 group-hover:block">
              <div
                class="px-3 pb-2 pt-1 text-center bg-gray-800 rounded flex justify-center items-center"
              >
                <span class="text-sm text-gray-100 font-semibold"
                  >What's Your</span
                >
              </div>
            </div>
          </div>
          <div class="group">
            <div>
              <span
                class="flex items-center justify-center bg-slate-800 text-gray-400 p-1 w-8 h-8 hover:scale-105 rounded-full cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-5 hover:text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                  />
                </svg>
              </span>
            </div>
            <div class="hidden absolute right-5 bottom-28 group-hover:block">
              <div
                class="px-3 pb-2 pt-1 text-center bg-gray-800 rounded flex justify-center items-center"
              >
                <span class="text-sm text-gray-100 font-semibold"
                  >Friend Activity</span
                >
              </div>
            </div>
          </div>
          <div class="group">
            <div>
              <span
                class="flex items-center justify-center bg-slate-800 text-gray-400 p-1 w-8 h-8 rounded-full cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 hover:scale-105 hover:text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </span>
            </div>
            <div class="hidden absolute right-0 bottom-28 group-hover:block">
              <div
                class="px-3 pb-2 pt-1 text-center bg-gray-800 rounded flex justify-center items-center"
              >
                <span class="text-sm text-gray-100 font-semibold">Profile</span>
              </div>
            </div>
          </div>
        </div>
        <!-- --------------------------------------------- -->
      </div>
      <div class="flex gap-x-2 mt-5 pl-2 pb-2">
        <span
          class="text-white bg-gray-700 px-3 py-2 cursor-pointer rounded-full hover:bg-gray-600 transition ease-out duration-500"
          >All</span
        >
        <span
          class="text-base text-white bg-gray-700 px-3 py-2 cursor-pointer rounded-full hover:bg-gray-600 transition ease-out duration-500"
          >Music</span
        >
        <span
          class="text-base text-white bg-gray-700 px-3 py-2 cursor-pointer rounded-full hover:bg-gray-600 transition ease-out duration-500"
          >Podcasts</span
        >
      </div>
    </nav>
    <main class="mainCScroll" id="mainScroll">
      <div class="conteners_scroll">
        <TitleIMG />
      </div>
    </main>
  </header>
</template>
<script>
import TitleIMG from "./TitleIMG.vue";
export default {
  name: "Header",
  components: {
    TitleIMG,
  },
  props: {
    toggle_Search: {
      type: Boolean,
      required: true,
    },
    Prem: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
