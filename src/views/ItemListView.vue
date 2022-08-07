<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-6">
        <div class="d-flex flex-row">
          <h2>Seznam</h2>
          <h2>New</h2>
        </div>
		<div class="items">
			<Item v-for="item in items" :key="item.id" :item="item"/>
		</div>
      </div>
    </div>
  </div>
</template>

<script>
import Item from "@/components/Item.vue";

export default {
  name: "ItemListView",
  components: {
    Item
  },
  data() {
    return {
      items: [
	 	{
			id: 1,
			title: 'Mozarella',
			bought: false
		}
	  ]
    }
  }
};
</script>
