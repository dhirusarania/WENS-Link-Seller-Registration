<template>
  <section>
    <section class="navbar-spacing padding-top-30">
      <div class="no-margin">
        <div class="row">
          <div class="col-sm-12 col-lg-12 no-padding">
            <div class="holder">
              <div>
                <h3 class="white-text">Start Auction of {{singleProduct.product_name}}</h3>
                <p>General Information</p>
                <div class="row">
                  <div class="col-12 col-sm-3">
                    <img
                      :src="'http://127.0.0.1:8000/media/products/' + images[0]"
                      style="height:300px;width: 100%;object-fit: contain;"
                    />
                  </div>
                  <div class="col-12 col-sm-9">
                    <p style="font-size:16px">Product Name: {{singleProduct.product_name}}</p>
                    <p style="font-size:16px">MRP: {{singleProduct.price}}</p>

                    <div class="row">
                      <div class="form-group col-sm-6">
                        <label for="exampleInputEmail1">Bidding Starting Price</label>
                        <input
                          type="number"
                          class="form-control"
                          id="min-price"
                          placeholder
                          autocomplete="s"
                          style="padding-left:50px"
                        />
                        <span class="input_span_left">$</span>
                      </div>
                      <div class="form-group col-sm-6">
                        <label for="exampleInputEmail1">Incremental Price</label>
                        <input
                          type="number"
                          class="form-control"
                          id="inc-price"
                          placeholder
                          autocomplete="s"
                          style="padding-left:50px"
                        />
                        <span class="input_span_left">$</span>
                      </div>
                      <div class="form-group col-sm-12 col-md-3">
                        <label for="exampleInputPassword1">Start Date</label>
                        <datetime
                          v-model="date"
                          type="datetime"
                          use12-hour
                          input-class="form-control"
                        ></datetime>
                      </div>
                      <div class="form-group col-sm-12 col-md-3">
                        <label for="exampleInputPassword1">End Date</label>
                        <datetime
                          v-model="enddate"
                          type="datetime"
                          use12-hour
                          input-class="form-control"
                        ></datetime>
                      </div>
                      <div class="form-group col-sm-12 col-md-3">
                        <label for="exampleInputPassword1">Quantity</label>
                        <input
                          type="number"
                          class="form-control"
                          id="quantity"
                          placeholder
                          autocomplete="s"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex justify-center margin-bottom-30">
                <button type="button" @click="startAuction" class="btn btn-primary">Start Auction</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>



<script>
export default {
  data: () => ({
    singleProduct: [],
    images: [],
    date: '',
    enddate: ''
  }),

  mounted() {
    this.$store.dispatch('singleProduct').then(res => {
      this.singleProduct = JSON.parse(JSON.stringify(res.data))
      this.images = JSON.parse(this.singleProduct.images)
    })

    this.date = new Date().toISOString()

    var date = new Date()
    date.setDate(date.getDate() + 7)

    this.enddate = date.toISOString()
  },
  methods: {
    formatDate: function(date) {
      var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear()

      if (month.length < 2) month = '0' + month
      if (day.length < 2) day = '0' + day

      return [year, month, day].join('-')
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
    startAuction: function() {
      var payload = new FormData()

      payload.append('seller_id', localStorage.getItem('currentUserID'))
      payload.append('product_info', localStorage.getItem('auction_item'))
      payload.append('quantity', $('#quantity').val())
      payload.append('start_date', this.date)
      payload.append('end_date', this.enddate)
      payload.append('min_bid', $('#min-price').val())
      payload.append('increment', $('#inc-price').val())
      payload.append('max_bid', 0)
      payload.append('seller_id', localStorage.getItem('currentUserID'))
      payload.append('status', 0)

      this.$store.dispatch('addAuction', payload).then(res => {
        console.log(res)
        this.$router.push("/products/all")
      })
    },
    dropzone: function() {
      // $('.reorder').on('click', function() {
      //   $('ul.nav').sortable({ tolerance: 'pointer' })
      //   $('.reorder').html('Save Reordering')
      //   $('.reorder').attr('id', 'updateReorder')
      //   $('#reorder-msg').slideDown('')
      //   $('.img-link').attr('href', 'javascript:;')
      //   $('.img-link').css('cursor', 'move')
      //   $('#updateReorder').click(function(e) {
      //     if (!$('#updateReorder i').length) {
      //       $(this)
      //         .html('')
      //         .prepend('<i class="fa fa-spin fa-spinner"></i>')
      //       $('ul.nav').sortable('destroy')
      //       $('#reorder-msg')
      //         .html(
      //           "Reordering Photos - This could take a moment. Please don't navigate away from this page."
      //         )
      //         .removeClass('light_box')
      //         .addClass('notice notice_error')
      //       var h = []
      //       $('ul.nav li').each(function() {
      //         h.push(
      //           $(this)
      //             .attr('id')
      //             .substr(9)
      //         )
      //       })
      //       $.ajax({
      //         type: 'POST',
      //         url: '<?php echo HOME_AJAX; ?>update.php',
      //         data: { ids: ' ' + h + '' },
      //         success: function(data) {
      //           if (data == 1 || parseInt(data) == 1) {
      //             //window.location.reload();
      //           }
      //         }
      //       })
      //       return false
      //     }
      //     e.preventDefault()
      //   })
      // })
      // $(function() {
      //   $('#myDrop').sortable({
      //     items: '.dz-preview',
      //     cursor: 'move',
      //     opacity: 0.5,
      //     containment: '#myDrop',
      //     distance: 20,
      //     tolerance: 'pointer'
      //   })
      //   $('#myDrop').disableSelection()
      // })
      //Dropzone script
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
  border-radius: 10px;
  background-color: transparent;
}
</style>