<template>
  <section>
    <section class="navbar-spacing padding-top-30">
      <div class="no-margin">
        <div class="row">
          <div class="col-sm-12 col-lg-12 no-padding">
            <div class="holder">
              <div style="display:flex; justify-content: space-between;align-items: center;">
                <div>
                  <h3 class="white-text">Add New Product</h3>
                  <p>General Information</p>
                </div>
                <div>
                  <label for>Product Status</label>
                  <vs-switch v-model="isActive" />
                </div>
              </div>

              <form class="row padding-top-20">
                <div class="form-group col-sm-12">
                  <label for="exampleInputEmail1">Product Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="product_name"
                    aria-describedby="emailHelp"
                    placeholder="Add Product Name"
                  />
                </div>
                <div class="form-group col-sm-12">
                  <label for="exampleInputPassword1">Write a Product Description</label>
                  <!-- <input
                  type="text"
                  class="form-control"
                  id="Description"
                  aria-describedby="emailHelp"
                  placeholder="Name"
                  autocomplete="ss"
                  >-->
                  <textarea
                    placeholder="Write parcel description here"
                    class="form-control"
                    id="description"
                  ></textarea>
                </div>
                <div class="form-group col-sm-12 col-md-4">
                  <label for="exampleInputPassword1">Category</label>
                  <vs-select
                    class="selectExample"
                    id="OnforwardingCharge"
                    v-model="category_selected"
                    @change="getSubcategories"
                  >
                    <vs-select-item
                      :key="index"
                      :value="item.id"
                      :text="item.name"
                      v-for="(item,index) in category"
                    />
                  </vs-select>
                </div>
                <div class="form-group col-sm-12 col-md-4">
                  <label for="exampleInputPassword1">Sub Category</label>
                  <vs-select
                    class="selectExample"
                    id="OnforwardingCharge"
                    v-model="subcategory_selected"
                    @change="getBrand"
                  >
                    <vs-select-item
                      :key="index"
                      :value="item.id"
                      :text="item.name"
                      v-for="(item,index) in subcategory"
                    />
                  </vs-select>
                </div>
                <div class="form-group col-sm-12 col-md-4">
                  <label for="exampleInputPassword1">Brand</label>
                  <vs-select class="selectExample" id="OnforwardingCharge" v-model="brand_selected">
                    <vs-select-item
                      :key="index"
                      :value="item.id"
                      :text="item.name"
                      v-for="(item,index) in brand"
                    />
                  </vs-select>
                </div>
                <div class="form-group col-sm-12 col-md-6">
                  <label for="exampleInputPassword1">Product Price</label>
                  <input
                    type="number"
                    class="form-control"
                    id="price"
                    placeholder
                    autocomplete="s"
                    style="padding-left:50px"
                  />
                  <span class="input_span_left">$</span>
                </div>
                <div class="form-group col-sm-12 col-md-6">
                  <label for="exampleInputPassword1">Product Discount</label>
                  <input
                    type="number"
                    class="form-control"
                    id="discount"
                    placeholder
                    autocomplete="s"
                    style="padding-left:50px"
                  />
                  <span class="input_span_left">$</span>
                </div>
              </form>
            </div>

            <div class="holder">
              <h4 class="white-text">Images</h4>
              <p>Upload Images. (Max 5)</p>
              <div class>
                <div class="dropzone dz-clickable" id="myDrop">
                  <div class="dz-default dz-message" data-dz-message>
                    <span>Drop files here to upload</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex justify-center margin-bottom-30">
              <button type="button" @click="addProduct" class="btn btn-primary">Submit</button>
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
    category: [],
    category_selected: 0,
    subcategory: [],
    subcategory_selected: 0,
    brand: [],
    brand_selected: 0,
    isActive: false,
    images: [],
    myDropzone: 0
  }),

  mounted() {
        
         var vm = this;

        Dropzone.autoDiscover = false

        this.myDropzone = new Dropzone('div#myDrop', {
          paramName: 'file', // The name that will be used to transfer the file
          addRemoveLinks: true,
          uploadMultiple: true,
          autoProcessQueue: true,
          parallelUploads: 50,
          maxFilesize: 5, // MB
          acceptedFiles: '.png, .jpeg, .jpg',
          url: vm.$store.state.api.imageUpload,
          headers: {
            // remove Cache-Control and X-Requested-With
            // to be sent along with the request
            'Cache-Control': null,
            'X-Requested-With': null
          }
        })

         this.myDropzone.on('sending', function(file, xhr, formData) {
          var filenames = []
          console.log('success')
          $('.dz-preview .dz-filename').each(function() {
            filenames.push(
              $(this)
                .find('span')
                .text()
            )
          })

          formData.append('filenames', filenames)
        })

        /* Add Files Script*/
         this.myDropzone.on('success', function(file, message) {
          console.log('success')
          console.log(message.filename)
          vm.images.push(message.filename)
        })

        this.myDropzone.on('error', function(data) {
          $('#msg').html(
            '<div class="alert alert-danger">There is some thing wrong, Please try again!</div>'
          )
        })

         this.myDropzone.on('complete', function(file) {
          //   myDropzone.removeFile(file)
        })

         this.myDropzone.on('removedfile', function(file) {
          //   myDropzone.removeFile(file)
            console.log(file)

          vm.images = vm.images.filter(v => v != "static/products/" + file.name)

        })

         this.myDropzone.on('addedfile', function(file) {
          console.log('added file')
        })

        $('#add_file').on('click', function() {
          console.log('success')
           this.myDropzone.processQueue()
        })


    this.$store.dispatch('getCategory').then(res => {
      console.log(res)
      this.category = res.data
    })
  },
  methods: {
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
    addProduct: function() {
      var payload = new FormData()

      payload.append('product_name', $('#product_name').val())
      payload.append('description', $('#description').val())
      payload.append('images', JSON.stringify(this.images))
      payload.append('category', this.category_selected)
      payload.append('subcategory', this.subcategory_selected)
      payload.append('brand', this.brand_selected)
      payload.append('price', $('#price').val())
      payload.append('discount', $('#discount').val())
      payload.append('seller_id', localStorage.getItem('currentUserID'))

      if (this.isActive == true) {
        payload.append('status', 1)
      } else {
        payload.append('status', 0)
      }

      this.$store.dispatch('addProduct', payload).then(res => {
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