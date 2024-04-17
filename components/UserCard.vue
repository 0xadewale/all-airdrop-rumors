<template>
  <div class="rounded-lg shadow-lg overflow-hidden">
    <img class="w-full object-cover object-center" :src="avatar" alt="user img" />
    <div class="py-4 px-6">
      <h2 class="text-2xl font-semibold text-base-content">
        {{ username }}
      </h2>
      <div v-if="ens" class="flex items-center mt-4 text-base-content/80">
        <Icon name="token:eth" size="20px" />
        <div class="tooltip tooltip-right tooltip-primary" data-tip="Copy to clipboard">
          <h3 class="px-2 text-sm cursor-pointer" @click="copy(address)">{{ ens }}</h3>
        </div>
      </div>
      <div class="flex items-center mt-4 text-base-content/80">
        <Icon name="fa6-brands:discord" size="20px" />
        <div class="tooltip tooltip-bottom tooltip-primary" data-tip="Copy to clipboard">
          <h3 class="px-2 text-sm cursor-pointer" @click="copy(discord)">{{ discord }}</h3>
        </div>
      </div>
      <div class="flex items-center justify-end mt-4 text-base-content" :class="ens ? '' : 'md:mt-14'">
        <a :href="twitter" class="btn btn-ghost">
          <Icon name="line-md:twitter-x" size="20px" />
        </a>
        <a :href="hey" class="btn btn-ghost">
          <img src="/logo-lenster.svg" alt="Lens logo" class="h-6" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
<script setup lang="ts">

const props = defineProps({
  avatar: { type: String, required: true },
  username: { type: String, required: true },
  address: { type: String, required: false },
  ens: { type: String, required: false },
  discord: { type: String, required: true },
  twitter: { type: String, required: true },
  hey: { type: String, required: true }
})

function copy(text: string) {
  navigator.clipboard.writeText(text)
}
</script>
