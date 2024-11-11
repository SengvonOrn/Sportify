<template>
  <aside>
    <div class="py-3 pl-5 dark:bg-primary rounded">
      <ul class="font-bold text-gray-500 text-base leading-10">
        <!-- ================================== -->
        <li
          class="group hover:text-gray-50 transition ease-int-out duration-700"
        >
          <a href="#" class="flex items-center">
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </span>
            <span class="ms-4 group-hover:underline">Home</span>
          </a>
        </li>
        <!-- ============================ -->
        <li
          class="group hover:text-gray-50 transition ease-int-out duration-700"
          @click="btn_search"
        >
          <a href="#" class="flex items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-7 w-7"
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
            <span class="ms-4 group-hover:underline">Search</span>
          </a>
        </li>
      </ul>
      <!-- === -->
    </div>
    <div class="h-200 dark:bg-primary mt-2 rounded">
      <nav class="text-gray-500 ml-2">
        <main class="dark:bg-primary px-3 sticky top-0 rounded-t-md">
          <div class="flex text-base font-bold items-center justify-between">
            <div
              class="flex cursor-pointer group relative hover:text-gray-50 transition ease-int-out duration-700"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                  />
                </svg>
              </span>
              <span class="ms-2">Your Library</span>
              <div class="hidden absolute -top-10 group-hover:block">
                <div
                  class="px-3 pb-2 pt-1 w-40 text-center bg-gray-800 rounded flex justify-center items-center"
                >
                  <span class="text-sm text-gray-100 font-semibold"
                    >Collapse Your Library</span
                  >
                </div>
              </div>
            </div>

            <!-- ======= -->

            <div class="flex gap-x-2 cursor-pointer">
              <div class="relative">
                <div
                  class="flex group relative items-center justify-center hover:bg-slate-800 hover:text-white p-1 w-8 h-8 rounded-full transition ease-int-out duration-500"
                  @click="btn_label"
                  @click.stop
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="3"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </span>

                  <div
                    class="hidden absolute -top-9 -left-[113px] group-hover:block"
                  >
                    <div
                      class="px-3 pb-2 pt-1 w-48 text-center bg-gray-800 rounded flex justify-center items-center"
                    >
                      <span class="text-sm text-gray-100 font-semibold"
                        >Create Playlist or Folder
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  class="absolute text-white text-base font-normal dark:bg-slate-800 w-56 p-2 z-10 gap-y-1 right-0 overflow-hidden rounded"
                  v-if="toggle_label"
                >
                  <!--===new list===-->

                  <div
                    class="flex py-3 justify-center hover:bg-slate-700 rounded"
                    @click="new_list"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                        />
                      </svg>
                    </span>
                    <span class="ms-2">Create a new playlist</span>
                  </div>

                  <!-- ==new folder=== -->

                  <div
                    class="flex py-3 items-center justify-center hover:bg-slate-700 rounded"
                    @click="new_folder"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                        />
                      </svg>
                    </span>
                    <span class="ms-2">Create a playlist folder</span>
                  </div>
                  <!-- ======= -->
                </div>
              </div>
              <div class="group relative">
                <div
                  class="flex items-center justify-center hover:bg-slate-800 hover:text-white p-1 w-8 h-8 rounded-full transition ease-int-out duration-500"
                  :class="Arrow_w"
                  @click="handleclick"
                >
                  <!-- @click="() => { btn_width(); change(); }" -->
                  <span>
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
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </div>
                <div
                  class="hidden -top-9 -left-[57px] absolute group-hover:block"
                >
                  <div
                    class="px-3 pb-2 pt-1 w-24 text-center bg-gray-800 rounded flex justify-center items-center"
                  >
                    <span
                      v-html="text_arrow"
                      class="text-sm text-gray-100 font-semibold"
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- ====== -->

          <div class="flex mt-7 text-base cursor-pointer">
            <span class="bg-gray-800 text-white px-4 pt-1 pb-2 rounded-full"
              >Playlist</span
            >
          </div>

          <!-- ===== -->
        </main>
        <div class="mainCScroll_side" id="mainScroll_side">
          <!-- ====================================== -->
          <ul class="text-gray-500" id="lis_sidbar">
            <!-- ==list1==== -->
            <li class="flex mt-5 mx-2 justify-between">
              <div class="group">
                <div
                  class="flex items-center rounded-md overflow-hidden"
                  :class="searching_clos"
                  @click.stop
                >
                  <span class="cursor-pointer" @click="toggleStyle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-9 w-9 hover:text-white hover:bg-gray-800 p-3 rounded-full transition ease-out duration-300"
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
                    placeholder="Search in your library"
                    id="search-playlist"
                    class="outline-none border-none dark:bg-transparent font-sans text-gray-300 pt-2 pb-3 pr-3"
                    v-bind:class="width_search"
                  />
                </div>
                <div
                  class="hidden absolute top-[200px] left-3 group-hover:block"
                  v-show="hide_search_msg"
                >
                  <div
                    class="px-3 pb-2 pt-1 w-44 text-center bg-gray-800 rounded flex justify-center items-center"
                  >
                    <span class="text-sm text-gray-100 font-semibold"
                      >Search In Your Library</span
                    >
                  </div>
                </div>
              </div>
              <div class="flex cursor-pointer hover:text-white hover:scale-105">
                <span>Recents</span>
                <span class="ms-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                </span>
              </div>
            </li>
            <!-- ==list2=== -->
            <li
              class="flex mt-5 items-center gap-x-3 hover:bg-gray-800 dark:hover:bg-gray-800 p-3 rounded cursor-pointer"
            >
              <div class="dark:bg-slate-600 p-3 rounded">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 9L19.5 6M19.5 12.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z"
                    ></path>
                  </svg>
                </span>
              </div>
              <div>
                <span class="text-white">My Playlist#1</span>
                <br />
                <span class="text-sm">Playlist.Vandy</span>
              </div>
            </li>

            <!-- ======= -->
          </ul>
        </div>
      </nav>
    </div>
  </aside>
</template>
<script>
import Header from "./Header.vue";
export default {
  name: "Sidebar",
  components: {
    Header,
  },
  props: {
    btn_search: {
      type: Function,
      required: true,
      default: function () {
        return () => console.log("Default function");
      },
    },
    btn_width: {
      type: Function,
      required: true,
      default: function () {
        return () => console.log("Default function");
      },
      change() {
        this.text_arrow =
          this.text_arrow === "Show more" ? "Show less" : "Show more";
      },
    },
    Arrow_w: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      text_arrow: "Show more",
      toggle_label: false,
      width_search: "event_search",
      searching_clos: "searching",
      hide_search_msg: true,

      // --------------------------->

      // --------------------------->
    };
  },
  methods: {
    change() {
      this.text_arrow =
        this.text_arrow === "Show more" ? "Show less" : "Show more";
    },
    handleclick() {
      this.change();
      this.btn_width();
    },
    //------------------>
    btn_label() {
      this.toggle_label = !this.toggle_label;
    },
    OnClickout() {
      this.toggle_label = false;
    },
    //---------------Create new List-------------------------------------------->

    new_list() {
      const new_lis = document.getElementById("lis_sidbar");
      const li = document.createElement("li");
      const div = document.createElement("div");
      const div2 = document.createElement("div");
      const span = document.createElement("span");

      span.innerHTML = `
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6 text-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 9L19.5 6M19.5 12.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z"
                      />
                    </svg>`;
      div2.innerHTML = `
                    <span class="text-white">My Playlist#1</span>
                    <br />
                    <span class="text-sm">Playlist.Seng</span>`;
      li.classList.add(
        "flex",
        "mt-5",
        "items-center",
        "gap-x-3",
        "hover:dark:bg-gray-800",
        "p-3",
        "rounded",
        "cursor-pointer"
      );
      div.classList.add("dark:bg-slate-600", "p-3", "rounded");
      div.append(span);
      li.append(div, div2);
      new_lis.appendChild(li);
    },
    // -------Create new folder---------->
    new_folder() {
      const new_lis = document.getElementById("lis_sidbar");
      const li = document.createElement("li");
      const div = document.createElement("div");
      const div2 = document.createElement("div");
      const span = document.createElement("span");

      span.innerHTML = `
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                        />
                      </svg>`;
      div2.innerHTML = `
                    <span class="text-white">New foldert#1</span>
                    <br />
                    <span class="text-sm">Add Your file</span>`;
      li.classList.add(
        "flex",
        "mt-5",
        "items-center",
        "gap-x-3",
        "hover:dark:bg-gray-800",
        "p-3",
        "rounded",
        "cursor-pointer"
      );
      div.classList.add("dark:bg-slate-600", "p-3", "rounded");
      div.append(span);
      li.append(div, div2);
      new_lis.appendChild(li);
    },

    //------------------------------->
    toggleStyle() {
      const set = document.querySelector(".event_search");
      const side = document.querySelector(".searching");
      if (set) {
        if (set.style.width === "170px") {
          set.style.width = "0";
          set.style.transition = "all 0.3s ease-in-out";
          side.style.backgroundColor = "transparent";
          this.hide_search_msg = true;
        } else {
          set.style.width = "170px";
          set.style.transition = "all 0.3s ease-in-out";
          side.style.backgroundColor = "#1F2937";
          this.hide_search_msg = false;
        }
      }
    },
    Auto_close() {
      const set = document.querySelector(".event_search");
      const aside = document.querySelector(".searching");
      if (set) {
        set.style.width = "0";
        set.style.transition = "all 0.3s ease-in-out";
        aside.style.backgroundColor = "transparent";
        this.hide_search_msg = true;
      }
    },
    // ---------------------------->
  },
  mounted() {
    document.addEventListener("click", this.OnClickout);
    document.addEventListener("click", this.Auto_close);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.OnClickout);
    document.removeEventListener("click", this.Auto_close);
  },
};
</script>
<style scoped>
.Arrow {
  animation: arrow 0.3s linear forwards;
}

@keyframes arrow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-180deg);
  }
}
.Arrow_two {
  animation: arrow_two 0.3s linear forwards;
}

@keyframes arrow_two {
  from {
    transform: rotate(-180deg);
  }
  to {
    transform: rotate(0deg);
  }
}
</style>
