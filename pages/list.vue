<template>
  <div class="mx-32">
    <div class="w-full rounded-md my-2 p-4 flex gap-2">
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
    </div>
    <div class="overflow-x-auto">
      <table class="table">
        <!-- head -->
        <thead>
        <tr>
          <th>Protocol</th>
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
const searchChain = ref('Blockchain')

const chains = ['Solana', 'Multichain']

const { data: airdrop } = await useAsyncData('airdrop', async () => {
  console.log('fetching')
  const { data } = await client.from('airdrop').select('*').order('created_at')
  return data

})

async function searchData() {

  if (!searchString.value && !searchChain.value) {
    const { data } = await client.from('airdrop').select('*').order('created_at')
    airdrop.value = data
    return
  }

  const { data } = await client.from('airdrop').select('*')
      .like('protocol', `%${searchString.value}%`)
      .eq('blockchain', searchChain.value)
      .order('created_at')
  airdrop.value = data
}

watch(searchString, () => {
  searchData()
})
</script>


<style scoped>

</style>
