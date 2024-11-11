<template>
  <nav class="flex items-center justify-between mx-4">
    <div>
      <span class="text-white" @click="toggleMenu" @click.stop>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
          />
        </svg>
      </span>
    </div>
    <div class="flex absolute top-10">
      <List_menu v-if="toggled" />
    </div>
    <div class="flex items-center text-white gap-x-7">
      <span class="p-3 hover:bg-slate-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
          stroke-width="2"
        >
          <path
            fill-rule="evenodd"
            d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
      <span class="p-3 hover:bg-slate-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      </span>
      <span class="p-3 hover:bg-red-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </span>
    </div>
  </nav>
  <!-- === -->
  <header class="flex flex-col gap-y-1 mx-3">
    <main class="flex">
      <div class="grid grid-rows-1 gap-y-3" :class="wiwdth">
        <Sidebar
          :btn_search="events_seach"
          :btn_width="sidebar_width"
          :Arrow_w="Arrow_event"
        />
      </div>
      <div
        class="h-300 flex items-center justify-center my-1 mx-0.5 w-1 cursor-pointer group"
      >
        <div class="h-full group-hover:dark:bg-white w-0.5"></div>
      </div>
      <div class="flex w-full">
        <Header :toggle_Search="Seach_btn" :Prem="Hide" />
      </div>
      <!-- <div class="dark:bg-slate-700 w-200 rounded">h</div> -->
    </main>
  </header>
  <footer class="mt-2">
    <Foot />
  </footer>
</template>
<script>
import "./index.css";
import List_menu from "./components/list_menu.vue";
import Sidebar from "./components/Sidebar.vue";
import Header from "./components/Header.vue";
import Foot from "./components/Foot.vue";
export default {
  name: "App",
  components: {
    List_menu,
    Sidebar,
    Header,
    Foot,
  },
  data() {
    return {
      toggled: false,
      showing: true,
      Seach_btn: false,
      Hide: true,
      wiwdth: "w-150",
      Arrow_event: " ",
      text: "Hello world",
    };
  },
  methods: {
    toggleMenu() {
      this.toggled = !this.toggled;
    },

    onClickOutside() {
      this.toggled = false;
    },

    togle() {
      if (this.showing) {
        this.showing = false;
      } else {
        this.showing = true;
      }
    },

    events_seach() {
      this.Seach_btn = !this.Seach_btn;
      this.Hide = !this.Hide;
    },
    sidebar_width() {
      if (this.wiwdth === "w-150") {
        this.wiwdth = "w-200";
        this.Arrow_event = "Arrow";
      } else {
        this.wiwdth = "w-150";
        this.Arrow_event = "Arrow_two ";
      }
    },
  },

  mounted() {
    document.addEventListener("click", this.onClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.onClickOutside);
  },
};
</script>

<style scoped></style>
