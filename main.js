<template>
  <!-- Get JSON Data .... -->
  <div class="products">
    <ul>
      <li v-for="product in products" :key="product.id">
        <h3>{{ product.brand }}</h3>
        <h3>{{ product.category }}</h3>
        <h3>{{ product.description }}</h3>
        <img :src="product.thumbnail" alt="Product Thumbnail" />
        <h3>{{ product.rating }} stars</h3>
      </li>
    </ul>
  </div>
  <!-- ////////////////////////////////////////////// -->
</template>

<script>
export default {
  name: "App",
  components: {
   
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    async getProducts() {
      await fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => (this.products = data.products));
    },
  },
  async mounted() {
    await this.getProducts();
  },
  computed: {
  },
};
</script>
<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
