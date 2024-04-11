<template>
  <section class="relative overflow-hidden">
    <div class="max-w-screen-xl px-8 py-24 mx-auto md:px-12 lg:px-32 lg:pb-0">
      <div>
        <h1 class="mt-8 text-4xl font-semibold tracking-tighter text-secondary md:text-6xl">
          All airdrop rumors<span class="md:block">in one place</span>
        </h1>
        <p class="mt-4 text-base-content lg:text-base">
          Gm and welcome ser, follow us on Discord / Twitter / Lens
        </p>
        <div class="flex flex-wrap items-center gap-2 mt-10">
          <nuxt-link to="/list" class="btn btn-primary text-secondary-content">View content</nuxt-link>
        </div>
      </div>
    </div>
    <div class="mt-12 w-full max-w-screen-xl lg:px-0 -mr-16 lg:mx-auto">
      <div class="bg-white overflow-hidden w-full rounded-3xl shadow-box shadow-gray-500/20">
        <div class="overflow-hidden h-auto">
          <div><img alt="#" src="https://picsum.photos/1500/1000"></div>
        </div>
      </div>
    </div>
    <div class="max-w-screen-xl px-8 pb-12 mx-auto mt-12 md:px-12 lg:px-32">
      <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
        <div><p class="font-mono text-base font-medium tracking-tighter uppercase text-primary"> Real-time
          financial analytics </p>
          <p class="mt-2 text-sm text-base-content">This feature can include customizable charts, graphs, and
            financial dashboards that help users monitor their investments and expenses.</p></div>
        <div><p class="font-mono text-base font-medium tracking-tighter uppercase text-primary"> Secure digital
          wallet </p>
          <p class="mt-2 text-sm text-base-content"> Offer a secure and user-friendly digital wallet where users
            can manage their digital assets, cryptocurrencies, and traditional currencies.</p></div>
        <div><p class="font-mono text-base font-medium tracking-tighter uppercase text-primary"> Personalized
          financial advice </p>
          <p class="mt-2 text-sm text-base-content">Implement a feature that offers personalized financial advice
            and investment recommendations based on the user's goals.</p></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
