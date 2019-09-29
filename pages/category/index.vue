<template>
  <section>
    <section class="navbar-spacing padding-top-30">
      <div class="v-container">
        <div class="row">
          <div class="col-12">
            <vs-table stripe max-items="10" pagination :data="category">
              <template slot="header">
                <div class="flex flex-column">
                  <h3>All Categories</h3>
                </div>
              </template>
              <template slot="thead">
                <vs-th sort-key="name">Name</vs-th>
                <vs-th>Action</vs-th>
              </template>

              <template slot-scope="{data}">
                <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                  <vs-td :data="data[indextr].name">
                    <p class="clamp2">{{data[indextr].name}}</p>
                  </vs-td>

                  <vs-td :data="data[indextr].id">
                    <vs-button
                      class="mr-2 vs-button-border"
                      vs-type="border"
                      size="small"
                      color="danger"
                      icon="delete_sweep"
                      @click="deleteCategory(data[indextr].id)"
                    ></vs-button>
                  </vs-td>
                </vs-tr>
              </template>
            </vs-table>
          </div>
          <div class="col-12">
            <vs-table stripe max-items="10" pagination :data="subcategory">
              <template slot="header">
                <div class="flex flex-column">
                  <h3>All subcategory</h3>
                </div>
              </template>
              <template slot="thead">
                <vs-th sort-key="name">Name</vs-th>
                <vs-th>Action</vs-th>
              </template>

              <template slot-scope="{data}">
                <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                  <vs-td :data="data[indextr].name">
                    <p class="clamp2">{{data[indextr].name}}</p>
                  </vs-td>

                  <vs-td :data="data[indextr].id">
                    <vs-button
                      class="mr-2 vs-button-border"
                      vs-type="border"
                      size="small"
                      color="danger"
                      icon="delete_sweep"
                      @click="deleteSubCategory(data[indextr].id)"
                    ></vs-button>
                  </vs-td>
                </vs-tr>
              </template>
            </vs-table>
          </div>
          <div class="col-12">
            <vs-table stripe max-items="10" pagination :data="brand">
              <template slot="header">
                <div class="flex flex-column">
                  <h3>All brand</h3>
                </div>
              </template>
              <template slot="thead">
                <vs-th sort-key="name">Name</vs-th>
                <vs-th>Action</vs-th>
              </template>

              <template slot-scope="{data}">
                <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                  <vs-td :data="data[indextr].name">
                    <p class="clamp2">{{data[indextr].name}}</p>
                  </vs-td>

                  <vs-td :data="data[indextr].id">
                    <vs-button
                      class="mr-2 vs-button-border"
                      vs-type="border"
                      size="small"
                      color="danger"
                      icon="delete_sweep"
                      @click="deleteBrand(data[indextr].id)"
                    ></vs-button>
                  </vs-td>
                </vs-tr>
              </template>
            </vs-table>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>



<script>
export default {
  data: () => ({
    allproducts: [],
    category: [],
    category_selected: 0,
    subcategory: [],
    subcategory_selected: 0,
    brand: [],
    brand_selected: 0
  }),

  mounted() {
    this.getCategory()
    this.getSubcategories()
    this.getBrand()
  },
  methods: {
    getCategory: function() {
      this.$store.dispatch('getCategory').then(res => {
        console.log(res)
        this.category = JSON.parse(JSON.stringify(res.data))
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
    deleteCategory: function(id) {
      this.$store.dispatch('deleteCategory', id).then(res => {
        console.log(res)
        this.getCategory()
        this.getSubcategories()
        this.getBrand()
      })
    },
    deleteSubCategory: function(id) {
      this.$store.dispatch('deleteSubCategory', id).then(res => {
        console.log(res)
        this.getSubcategories()
        this.getBrand()
      })
    },
    deleteBrand: function(id) {
      this.$store.dispatch('deleteBrand', id).then(res => {
        console.log(res)
        this.getBrand()
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