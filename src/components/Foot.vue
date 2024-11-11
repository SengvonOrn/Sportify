<template>
  <div class="flex items-center justify-center">
    <div class="flex">
      <span class="cursor-pointer"
        ><img
          v-bind:src="preIcon"
          alt="1"
          class="brightness-200 invert"
          width="40"
      /></span>
      <!-- ============= -->
      <div
        class="flex items-center justify-center rounded-full relative cursor-pointer bg-white w-9 h-9 mx-6"
      >
        <span class="absolute">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            class="w-6 h-6 pl-1 flex justify-center"
          >
            <path
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
            />
          </svg>
        </span>
        <!-- <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-7 h-7"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="M14 19h4V5h-4M6 19h4V5H6z" />
          </svg>
        </span> -->
      </div>
      <!-- =================== -->
      <span class="cursor-pointer"
        ><img :src="nextIcon" alt="2" class="brightness-200 invert" width="40"
      /></span>
    </div>
  </div>
</template>
<script>
//===============>
import preIcon from "../../src/assets/Images/Previous_icon.png";
import nextIcon from "../../src/assets/Images/Next_icon.png";
export default {
  name: "Foot",
  data() {
    return {
      preIcon,
      nextIcon,
    };
  },
};
</script>

<style lang="scss" scoped></style>
