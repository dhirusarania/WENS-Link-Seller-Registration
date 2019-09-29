<template>
  <section>
    <section class="navbar-spacing padding-top-30">
      <div class="v-container">
        <vs-table stripe max-items="10" pagination :data="allproducts">
          <template slot="header">
            <div class="flex flex-column">
              <h3>All Products</h3>
            </div>
          </template>
          <template slot="thead">
            <vs-th sort-key="product_name">Product Name</vs-th>
            <vs-th sort-key="price">Price</vs-th>
            <vs-th sort-key="description">Description</vs-th>
            <vs-th sort-key="auction_status">Status</vs-th>
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

              <vs-td :data="data[indextr].auction_status">
                <p v-if="data[indextr].auction_status == -1 || data[indextr].auction_status == 1" class="clamp2">Not yet added</p>
                <p v-if="data[indextr].auction_status == 0" class="clamp2">Auction Ongoing</p>
              </vs-td>

              <vs-td :data="data[indextr].id">
                <vs-button class="btnx" type="filled">Actions</vs-button>

                <vs-dropdown vs-trigger-click>
                  <vs-button class="btn-drop" type="filled" icon="expand_more"></vs-button>
                  <!-- <a href="#">Hola mundo</a> -->

                  <vs-dropdown-menu>
                    <vs-dropdown-item @click="deletePendingParcel(data[indextr].id)">Delete</vs-dropdown-item>
                  </vs-dropdown-menu>
                </vs-dropdown>
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
        this.allproducts =  JSON.parse(JSON.stringify(res.data))
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
    deletePendingParcel: function(id) {
      this.$store.dispatch('deleteProduct', id).then(res => {
        console.log(res)
        this.getAllProducts()
      })
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