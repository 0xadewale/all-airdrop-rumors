<template>
  <div class="mx-2 mb-4 md:mx-32">
    <div class="w-full rounded-md my-2 p-4 flex flex-col lg:flex-row">
      <div class="flex flex-col md:flex-row gap-2 w-full items-start md:items-center">
        <input
            type="text"
            class="input input-bordered w-full max-w-xs"
            placeholder="Protocol"
            v-model="searchString"
        />
        <select
            class="select select-bordered w-full max-w-xs"
            v-model="searchChain"
            @change="searchData"
        >
          <option disabled selected>Blockchain</option>
          <option
              v-for="chain in chains"
              :key="chain"
              :value="chain"
          >
            {{ chain }}
          </option>
        </select>
        <div class="form-control w-24">
          <label class="cursor-pointer label">
            <span class="label-text">Live</span>
            <input v-model="searchLive" type="checkbox" class="toggle toggle-success" @change="searchData" />
          </label>
        </div>
        <button class="btn btn-link px-0" @click="resetFilters">
          Reset filters
        </button>
      </div>
      <div>
        <!-- add button -->
      </div>
    </div>
    <div class="overflow-x-auto">
      <table class="table">
        <!-- head -->
        <thead>
        <tr>
          <th>Protocol</th>
          <th>Status</th>
          <th>Blockchain</th>
          <th>actions</th>
          <th>Date</th>
          <th>Site</th>
          <th>Twitter</th>
          <th>Note</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in airdrop" :key="item.id">
          <td>{{ item.protocol }}</td>
          <td>
            <div v-if="item.status === 'live'" class="badge badge-success badge-outline">Live</div>
            <div v-if="item.status === 'ended'" class="badge badge-error badge-outline">Ended</div>
          </td>
          <td>{{ item.blockchain }}</td>
          <td>{{ item.actions }}</td>
          <td>{{ item.date }}</td>
          <td><a :href="item.url" target="_blank" class="text-secondary">
            {{ item.url }}
          </a></td>
          <td><a :href="item.twitter" target="_blank" class="text-secondary">
            {{ item.twitter }}
          </a>
          </td>
          <td>{{ item.note }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
const client = useSupabaseClient()
const searchString = ref('')
const searchChain = ref('')
const searchLive = ref(false)

const chains = [
  'Multichain',
  'Ethereum',
  'Avalanche',
  'BNBchain',
  'Binance Smart Chain',
  'Optimism',
  'Polygon',
  'Gnosis',
  'Algorand',
  'Aptos',
  'Atom',
  'Bob',
  'Callisto',
  'Cardano',
  'Cosmos',
  'Cronos',
  'Elrond',
  'Fantom',
  'Icon',
  'Juno',
  'Metis',
  'Near',
  'Ronin',
  'Secret Network',
  'Solana',
  'Starknet',
  'Tezos',
  'VeChain',
  'Waves',
  'XRP',
  'Zksync',
]

const { data: airdrop } = await useAsyncData('airdrop', async () => {
  console.log('fetching')
  const { data } = await client.from('airdrop').select('*').order('created_at')
  return data

})

function resetFilters() {
  searchString.value = ''
  searchChain.value = ''
  searchLive.value = false
  searchData()
}

async function searchData() {

  if (!searchString.value && !searchChain.value && !searchLive.value) {
    const { data } = await client.from('airdrop').select('*').order('created_at')
    airdrop.value = data
    return
  }

  if (searchLive.value) {
    const { data } = await client.from('airdrop').select('*')
        .like('protocol', `%${searchString.value}%`)
        .like('blockchain', `%${searchChain.value}%`)
        .eq('status', 'live')
        .order('created_at')
    airdrop.value = data
    return
  }

  const { data } = await client.from('airdrop').select('*')
      .like('protocol', `%${searchString.value}%`)
      .like('blockchain', `%${searchChain.value}%`)
      .order('created_at')
  airdrop.value = data
}

watch(searchString, () => {
  searchData()
})
</script>


<style scoped>

</style>
