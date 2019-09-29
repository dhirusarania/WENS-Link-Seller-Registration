<template>
  <section>
    <section class="navbar-spacing padding-top-30">
      <div class="v-container">
        <vs-table stripe max-items="10" pagination :data="allproducts">
          <template slot="header">
            <div class="flex flex-column">
              <h3>Select Products to Start Auction</h3>
            </div>
          </template>
          <template slot="thead">
            <vs-th sort-key="product_name">Product Name</vs-th>
            <vs-th sort-key="price">Price</vs-th>
            <vs-th sort-key="description">Description</vs-th>
            <vs-th>Action</vs-th>
          </template>

          <template slot-scope="{data}">
            <vs-tr :key="indextr" v-for="(tr, indextr) in data">
              <vs-td :data="data[indextr].product_name">
                <p class="clamp2">{{data[indextr].product_name}}</p>
              </vs-td>

              <vs-td :data="data[indextr].price">{{data[indextr].price}}</vs-td>

              <vs-td :data="data[indextr].description">
                <p class="clamp2">{{data[indextr].description}}</p>
              </vs-td>

              <vs-td v-if="data[indextr].auction_status == -1" :data="data[indextr].id">
                <vs-button
                  class="btn"
                  style="border-radius:5px!important"
                  type="filled"
                  @click="startAuction(data[indextr].id)"
                >Start Auction</vs-button>
              </vs-td>

              <vs-td v-if="data[indextr].auction_status == 0" :data="data[indextr].id">
                <p>Auction Running</p>
              </vs-td>

              <vs-td v-if="data[indextr].auction_status == 1" :data="data[indextr].id">
                <p>Auction Completed</p>
              </vs-td>
            </vs-tr>
          </template>
        </vs-table>
      </div>
    </section>
  </section>
</template>



<script>
export default {
  data: () => ({
    allproducts: []
  }),

  mounted() {
    this.getAllProducts()
  },
  methods: {
    getAllProducts: function() {
      this.$store.dispatch('allProducts').then(res => {
        console.log(res)
        this.allproducts = JSON.parse(JSON.stringify(res.data))
      })
    },
    getSubcategories: function() {
      this.$store
        .dispatch('getsubCategory', this.category_selected)
        .then(res => {
          console.log(res)
          this.subcategory = res.data
        })
    },
    getBrand: function() {
      this.$store.dispatch('getBrand', this.subcategory_selected).then(res => {
        console.log(res)
        this.brand = res.data
      })
    },
    startAuction: function(id) {
        
      localStorage.setItem('auction_item', id) 
      this.$router.push('/auction/startauction')
    }
  }
}
</script>



<style scoped>
.form-group {
  padding-bottom: 10px;
}

.input_span_left {
  position: absolute;
  left: 16px;
  top: 25px;
  bottom: 0;
  /* margin: auto 0; */
  width: 40px;
  height: 33px;
  background-color: #5866a8;
  line-height: 33px;
  text-align: center;
  border-radius: 4px 0 0 4px;
  font-weight: bold;
}

.dropzone {
  min-height: 150px;
  border: 2px dashed rgb(255, 255, 255);
  padding: 20px 20px;
  background-color: transparent;
}

button {
  white-space: nowrap;
}
</style>