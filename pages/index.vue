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
          <nuxt-link to="/list" class="btn btn-primary text-secondary-content">Search airdrops</nuxt-link>
        </div>
      </div>
    </div>
    <div class="mt-12 w-full max-w-screen-xl lg:px-0 -mr-16 lg:mx-auto">
      <div class="overflow-hidden w-full rounded-3xl shadow-box shadow-gray-500/20 shadow-2xl">
        <div class="overflow-hidden h-auto">
          <div><img alt="#" :src="colorMode.preference === 'system' ? '/light.png' : `${colorMode.preference}.png`"></div>
        </div>
      </div>
    </div>
    <div class="max-w-screen-xl px-8 pb-12 mx-auto mt-12 md:px-12 lg:px-32">
      <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
        <UserCard
            avatar="/jb.webp"
            username="Jean Brasse"
            address="0xbabb038737a7ae0dca02075e79ed5b7704c29827"
            ens="jeanbrasse.eth"
            discord="jeanbrasse.eth#6115"
            twitter="https://twitter.com/JeanBrasse_"
            hey="https://hey.xyz/u/jeanbrasse"
        />
        <UserCard
            avatar="/dydymoon.webp"
            username="Dydymoon"
            address="0x806346b423ddb4727c1f5dc718886430aa7ce9cf"
            ens="dydymoon.eth"
            discord="dydymoon.eth#3133"
            twitter="https://twitter.com/dydymoon1"
            hey="https://hey.xyz/u/dydymoon"
        />
        <UserCard
            avatar="/starny.webp"
            username="Starny"
            address="0x79603115Df2Ba00659ADC63192325CF104ca529C"
            ens="starny.eth"
            discord="Starny.lens#3390"
            twitter="https://twitter.com/starnydefi"
            hey="https://hey.xyz/u/starny"
        />
        <UserCard
            avatar="/manu.webp"
            username="ManuRedPills"
            address="0x62e0466e04739eb2e7e81242b5a7fa05f61afbcc"
            ens="manuredpills.eth"
            discord="ManuRedPills#7871"
            twitter="https://twitter.com/ManuRedPills"
            hey="https://hey.xyz/u/manuredpills"
        />
        <UserCard
            avatar="/stengarl.webp"
            username="Stengarl"
            discord="Stengarl#8915"
            twitter="https://twitter.com/stengarl"
            hey="https://hey.xyz/u/stengarl"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

</script>

<style scoped>

</style>
