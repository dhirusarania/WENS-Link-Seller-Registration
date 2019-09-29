<template>
  <section>
    <section class="navbar-spacing padding-top-30">
      <div class="v-container">
        <vs-table stripe max-items="10" pagination :data="allOrder">
          <template slot="header">
            <div class="flex flex-column">
              <h3>All Orders</h3>
            </div>
          </template>
          <template slot="thead">
            <vs-th sort-key="order_id">Order ID</vs-th>
            <vs-th sort-key="product_name">Product Name</vs-th>
            <vs-th sort-key="product_price">Price</vs-th>
            <vs-th sort-key="delivery_status">Status</vs-th>
            <vs-th sort-key="created_date">Date</vs-th>
            <vs-th>Action</vs-th>
          </template>

          <template slot-scope="{data}">
            <vs-tr :key="indextr" v-for="(tr, indextr) in data">
              <vs-td :data="data[indextr].order_id">
                <p>{{data[indextr].order_id}}</p>
              </vs-td>

              <vs-td :data="data[indextr].product_name">
                <p class="clamp1">{{data[indextr].product_name}}</p>
              </vs-td>

              <vs-td :data="data[indextr].product_price">{{data[indextr].product_price}}</vs-td>

              <vs-td :data="data[indextr].delivery_status">
                <p v-if="data[indextr].delivery_status == 0">Placed</p>
                <p v-if="data[indextr].delivery_status == 1">Delivered</p>
                <p v-if="data[indextr].delivery_status == 2">Cancelled By Seller</p>
                <p v-if="data[indextr].delivery_status == 3">Cancelled By Buyer</p>
              </vs-td>

              <vs-td :data="data[indextr].created_date">{{data[indextr].created_date.split("T")[0]}} {{data[indextr].created_date.split("T")[1].split(":")[0]}} : {{data[indextr].created_date.split("T")[1].split(":")[1]}}</vs-td>

              <vs-td :data="data[indextr].id">
                <vs-button class="btnx" type="filled">Actions</vs-button>

                <vs-dropdown vs-trigger-click>
                  <vs-button class="btn-drop" type="filled" icon="expand_more"></vs-button>
                  <!-- <a href="#">Hola mundo</a> -->

                  <vs-dropdown-menu>
                    <vs-dropdown-item @click="deletePendingParcel(data[indextr].id)">Order Updates</vs-dropdown-item>
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
    allOrder: []
  }),

  mounted() {
    this.getAllOrder()
  },
  methods: {
    getAllOrder: function() {
      this.$store.dispatch('getAllOrder').then(res => {
        console.log(res)
        this.allOrder =  JSON.parse(JSON.stringify(res.data))
      })
    },
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