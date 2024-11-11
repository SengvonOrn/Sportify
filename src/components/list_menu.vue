<template>
  <div class="bg-gray-700 z-10 py-3 rounded w-28 shadow-2xl" @mouseover.stop>
    <ul class="text-white text-xs font-bold leading-6">
      <!--=============================================-->
      <li
        class="flex items-center justify-between hover:bg-slate-400 pl-3 py-2 cursor-pointer relative group"
      >
        File
        <span class="size-3 mr-3"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <!-- ========== -->
        <ul
          class="hidden absolute left-28 mt-48 bg-gray-700 py-3 rounded w-72 shadow-2xl leading-6 group-hover:block"
        >
          <li
            class="flex items-center px-4 mb-2 py-2 justify-between hover:bg-slate-400"
          >
            New Playlist <span>Ctrl+N</span>
          </li>
          <li
            class="flex items-center px-4 mb-2 py-2 justify-between hover:bg-slate-400"
          >
            New Playlist Folder <span>Ctrl+shift+N</span>
          </li>
          <div class="flex border-b-1 mb-2"></div>
          <li class="flex items-center px-4 mb-2 py-2 hover:bg-slate-400">
            Private session
          </li>
          <div class="flex border-b-1 mb-2"></div>
          <li
            class="flex items-center justify-between px-4 mb-2 py-2 hover:bg-slate-400"
          >
            Log Out <span>Ctrl + shift + w</span>
          </li>
          <div class="flex border-b-1 mb-2"></div>
          <li
            class="flex items-center justify-between px-4 py-2 hover:bg-slate-400"
          >
            Exit <span>Ctrl + W</span>
          </li>
        </ul>
      </li>
      <!-- ========= -->
      <li
        class="flex items-center justify-between hover:bg-slate-400 pl-3 py-2 cursor-pointer group"
      >
        Edit
        <span class="size-3 mr-3"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <ul
          class="hidden absolute left-28 mt-88 bg-gray-700 py-3 rounded w-40 shadow-2xl leading-6 group-hover:block"
        >
          <li
            class="flex items-center px-4 mb-2 py-2 justify-between hover:bg-slate-400"
          >
            Undo <span>Ctrl+Z</span>
          </li>
          <li
            class="flex items-center px-4 mb-2 py-2 justify-between hover:bg-slate-400"
          >
            Redo <span>Ctrl+Y</span>
          </li>
          <div class="flex border-b-1 mb-2"></div>
          <li
            class="flex items-center justify-between px-4 mb-2 py-2 hover:bg-slate-400"
          >
            Cut <span>Ctrl+X</span>
          </li>
          <li
            class="flex items-center justify-between px-4 mb-2 py-2 hover:bg-slate-400"
          >
            Copy <span>Ctrl+C</span>
          </li>
          <li
            class="flex items-center justify-between px-4 mb-2 py-2 hover:bg-slate-400"
          >
            Past <span>Ctrl+V</span>
          </li>
          <li
            class="flex items-center justify-between px-4 mb-2 py-2 hover:bg-slate-400"
          >
            Delet <span>Del</span>
          </li>
          <div class="flex border-b-1 mb-2"></div>
          <li
            class="flex items-center justify-between px-4 mb-2 py-2 hover:bg-slate-400"
          >
            Select all <span>Ctrl+A</span>
          </li>

          <div class="flex border-b-1 mb-2"></div>
          <li
            class="flex items-center justify-between px-4 mb-2 py-2 hover:bg-slate-400"
          >
            Search <span>Ctrl+L</span>
          </li>
          <li
            class="flex items-center justify-between px-4 mb-2 py-2 hover:bg-slate-400"
          >
            Filter <span>Ctrl+F</span>
          </li>
          <div class="flex border-b-1 mb-2"></div>
          <li
            class="flex items-center justify-between px-4 py-2 hover:bg-slate-400"
          >
            Preferences... <span>Ctrl+P</span>
          </li>
        </ul>
      </li>
      <!-- =================================== -->
      <li
        class="flex items-center justify-between hover:bg-slate-400 pl-3 py-2 cursor-pointer group"
      >
        View
        <span class="size-3 mr-3"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <ul
          class="hidden absolute left-28 mt-20 bg-gray-700 py-3 rounded w-52 shadow-2xl leading-6 group-hover:block"
        >
          <li
            class="flex items-center px-4 mb-2 py-2 justify-between hover:bg-slate-400"
          >
            Zoom In <span>Ctrl+=</span>
          </li>
          <li
            class="flex items-center px-4 mb-2 py-2 justify-between hover:bg-slate-400"
          >
            Zoom Out <span>Ctrl+-</span>
          </li>
          <li
            class="flex items-center justify-between px-4 py-2 hover:bg-slate-400"
          >
            Reset Zoom <span>Ctrl + O</span>
          </li>
        </ul>
      </li>
      <!--==========================-->
      <li
        class="flex items-center justify-between hover:bg-slate-400 pl-3 py-2 cursor-pointer group"
      >
        Playlists
        <span class="size-3 mr-3"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <ul
          class="hidden absolute left-28 mt-86 bg-gray-700 py-3 rounded w-60 shadow-2xl leading-6 group-hover:block"
        >
          <li
            class="flex items-center px-4 mb-2 py-2 justify-between hover:bg-slate-400"
          >
            Play <span>Next</span>
          </li>
          <div class="flex border-b-1 mb-2"></div>
          <li
            class="flex items-center px-4 mb-2 py-2 justify-between hover:bg-slate-400"
          >
            Next <span>Ctrl+Right Arrow</span>
          </li>
          <div class="flex border-b-1 mb-2"></div>
          <li
            class="flex items-center justify-between px-4 mb-2 py-2 hover:bg-slate-400"
          >
            Previuse <span>Ctrl+Left Arrow</span>
          </li>
          <li
            class="flex items-center justify-between px-4 mb-2 py-2 hover:bg-slate-400"
          >
            Seek Forward <span>Sift+ Right Arrow</span>
          </li>
          <li
            class="flex items-center justify-between px-4 mb-2 py-2 hover:bg-slate-400"
          >
            Seek Backfard <span>Sift+ Left Arrow</span>
          </li>
          <div class="flex border-b-1 mb-2"></div>
          <li
            class="flex items-center justify-between px-4 mb-2 py-2 hover:bg-slate-400"
          >
            Suffle <span>Ctrl + S</span>
          </li>
          <li
            class="flex items-center justify-between px-4 mb-2 py-2 hover:bg-slate-400"
          >
            Repeat <span>Ctrl + R</span>
          </li>
          <div class="flex border-b-1 mb-2"></div>
          <li
            class="flex items-center justify-between px-4 py-2 hover:bg-slate-400"
          >
            Volume Up <span>Ctrl + Up Arrow</span>
          </li>
          <li
            class="flex items-center justify-between px-4 py-2 hover:bg-slate-400"
          >
            Volume Down <span>Ctrl + Down Arrow</span>
          </li>
        </ul>
      </li>
      <!--===========================-->

      <li
        class="flex items-center justify-between hover:bg-slate-400 pl-3 py-2 cursor-pointer group"
      >
        Help
        <span class="size-3 mr-3"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <ul
          class="hidden absolute left-28 mt-60 bg-gray-700 py-3 rounded w-56 shadow-2xl leading-6 group-hover:block"
        >
          <li
            class="flex items-center px-4 mb-2 py-2 justify-between hover:bg-slate-400"
          >
            Sportify Help <span>Ctrl+F</span>
          </li>
          <li class="flex items-center px-4 mb-2 py-2 hover:bg-slate-400">
            Sportify Community
          </li>

          <li class="flex items-center px-4 mb-2 py-2 hover:bg-slate-400">
            Your Account
          </li>
          <div class="flex border-b-1 mb-2"></div>
          <li class="flex items-center px-4 mb-2 py-2 hover:bg-slate-400">
            Third-Party Software
          </li>
          <div class="flex border-b-1 mb-2"></div>
          <li
            class="flex items-center justify-between hover:bg-slate-400 pl-3 py-2 cursor-pointer"
            @mouseover="hover_show_drop"
          >
            Troubleshooting

            <span class="size-3 mr-3"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
            <ul
              class="absolute left-56 mt-32 bg-gray-700 py-3 rounded w-80 shadow-2xl leading-6"
              v-show="list_tls"
            >
              <li class="flex items-center px-4 mb-2 py-2 hover:bg-slate-400">
                Disable Hardware Acceleration and Restart
              </li>

              <li
                class="flex items-center justify-between px-4 mb-2 py-2 hover:bg-slate-400"
              >
                <span>Reload</span>
                <span>Ctrl + Shift + R</span>
              </li>
              <li class="flex items-center px-4 mb-2 py-2 hover:bg-slate-400">
                Reset App Data and Restart
              </li>
              <li class="flex items-center px-4 py-2 hover:bg-slate-400">
                Show Logs in Explorer
              </li>
            </ul>
          </li>
          <div class="flex border-b-1 mb-2 mt-2"></div>
          <li class="flex items-center px-4 py-2 hover:bg-slate-400">
            About Spotify
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "list_menu",
  data() {
    return {
      toggle: false,
      list_tls: false,
    };
  },
  methods: {
    // toggleDropdown() {
    //   setTimeout(() => (this.toggle = true), 500);
    // },
    onClickOutside() {
      this.toggled = false;
    },
    hover_show_drop() {
      this.list_tls = true;
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
