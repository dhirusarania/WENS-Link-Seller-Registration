<template>
  <div class="content-wrapper">
    <div class="content-header row"></div>
    <div class="content-body">
      <div class="chat-overlay"></div>
      <section class="chat-app-window">
        <div class="start-chat-area d-none">
          <span class="mb-1 start-chat-icon feather icon-message-square"></span>
          <h4 class="py-50 px-1 sidebar-toggle start-chat-text">Start Conversation</h4>
        </div>
        <div class="active-chat">
          <div class="chat_navbar">
            <header class="chat_header d-flex justify-content-between align-items-center p-lg-3">
              <div class="vs-con-items d-flex align-items-center">
                <div class="sidebar-toggle d-block d-lg-none mr-1">
                  <i class="feather icon-menu font-large-1"></i>
                </div>
                <h6 class="mb-0">{{customerName}}</h6>
              </div>
              <span class="favorite">
                <i class="feather icon-star font-medium-5"></i>
              </span>
            </header>
          </div>
          <perfect-scrollbar class="user-chats ps--active-y">
            <div class="chats">
              <div v-for="p in getMessageByCustomerId" :key="p.id">
                <div class="chat" v-if="p.moov == 1">
                  <div class="chat-body">
                    <div class="chat-content" :data-msgid="p.id">
                      <p>{{p.message}}</p>
                      <div v-if="p.attachments.length != 0" class="attachment-section-right">
                        <i data-feather="paperclip"></i>
                        <a
                          download
                          :href="'https://specialmansolution.com/project8/img/uploads/' + p.attachments[0].file"
                        >{{p.attachments[0].file}}</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="chat chat-left" v-if="p.moov == 0">
                  <div class="chat-body">
                    <div class="chat-content" :data-msgid="p.id">
                      <p>{{p.message}}</p>
                      <div v-if="p.attachments.length != 0" class="attachment-section-left">
                        <i data-feather="paperclip" class="svg-size"></i>
                        <a
                          download
                          :href="'https://specialmansolution.com/project8/img/uploads/' + p.attachments[0].file"
                        >{{p.attachments[0].file}}</a>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- <div class="chat chat-left attachments" v-if="p.attachments.length != 0 && p.moov == 0">
                  <div class="chat-body">
                    <div class="chat-content" :data-msgid="p.id">
                      <i data-feather="paperclip"></i>
                      <a
                        download
                        :href="'https://specialmansolution.com/project8/img/uploads/' + p.attachments[0].file"
                      >{{p.attachments[0].file}}</a>
                    </div>
                  </div>
                </div>-->

                <!-- <div class="chat attachments" v-if="p.attachments.length != 0 && p.moov == 1">
                  <div class="chat-body">
                    <div class="chat-content" :data-msgid="p.id">
                      <i data-feather="paperclip"></i>
                      <a
                        download
                        :href="'https://specialmansolution.com/project8/img/uploads/' + p.attachments[0].file"
                      >{{p.attachments[0].file}}</a>
                    </div>
                  </div>
                </div> -->

                <!-- <div class="divider">
                <div class="divider-text">Yesterday</div>
                </div>-->
              </div>
            </div>
          </perfect-scrollbar>
          <div class="chat-app-form">
            <form class="chat-app-input d-flex" @submit="enter_chat" action="javascript:void(0);">
              <input
                type="text"
                class="form-control message mr-1 ml-50"
                id="message"
                placeholder="Type your message"
                style="height:40px!important"
                autocomplete="off"
              />
              <div
                style="display: flex;justify-content: center;align-items: center;margin: 0 15px;"
              >
                <label style="cursor:pointer">
                  <i data-feather="paperclip"></i>
                  <input
                    type="file"
                    id="file"
                    ref="file"
                    v-on:change="handleFileUpload"
                    style="display:none;"
                  />
                </label>
              </div>
              <button
                type="button"
                class="btn btn-primary send waves-effect waves-light"
                @click="enter_chat"
              >
                <i class="fa fa-paper-plane-o d-lg-none"></i>
                <span class="d-none d-lg-block">Send</span>
              </button>
            </form>
          </div>
        </div>
      </section>
      <!-- User Chat profile right area -->
      <div class="user-profile-sidebar">
        <header class="user-profile-header">
          <span class="close-icon">
            <i class="feather icon-x"></i>
          </span>
          <div class="header-profile-sidebar">
            <div class="avatar">
              <img src="img/avatar-s-1.png" alt="user_avatar" height="70" width="70" />
              <span class="avatar-status-busy avatar-status-lg"></span>
            </div>
            <h4 class="chat-user-name">Felecia Rower</h4>
          </div>
        </header>
        <div class="user-profile-sidebar-area p-2 ps">
          <h6>About</h6>
          <p>Toffee caramels jelly-o tart gummi bears cake I love ice cream lollipop. Sweet liquorice croissant candy danish dessert icing. Cake macaroon gingerbread toffee sweet.</p>
        </div>
      </div>
      <!--/ User Chat profile right area -->
    </div>
  </div>
</template>


<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    customerName: ''
  }),

  mounted() {
    this.$vs.loading()
    feather.replace({ color: 'white' })
    console.log(this.$store.getters.get_selectedUserMessage)
    this.$store
      .dispatch(
        'getMessageByCustomerId',
        this.$store.getters.get_selectedUserMessage
      )
      .then(res => {
        console.log("res")
        console.log(res)
        if(res.data.messagedata.length != 0){
        console.log(res.data.messagedata[0].id)
        this.customerName = this.$store.getters.get_MessageByCustomerName
        }
        this.$vs.loading.close()
      })
  },

  computed: {
    ...mapState(['getMessageByCustomerId']),

    doneTodosCount() {
      return this.$store.getters.get_selectedUserMessage
    }
  },

  watch: {
    doneTodosCount(newCount, oldCount) {
      // Our fancy notification (2).
      console.log(`We have ${newCount} fruits now, yaay!`)
      this.$store
        .dispatch(
          'getMessageByCustomerId',
          this.$store.getters.get_selectedUserMessage
        )
        .then(res => {
          this.customerName = this.$store.getters.get_MessageByCustomerName
          console.log(res)
          $('.user-chats').scrollTop($('.user-chats')[0].scrollHeight)


                  this.$store
          .dispatch('resetCounter', newCount)
          .then(res => {
            console.log('cleared')
          })

          feather.replace({ color: 'white' })
        })
    }
  },

  methods: {
    enter_chat: function() {
      if (document.getElementById('message').value != '') {
        var payload = {
          customer_id: this.$store.getters.get_selectedUserMessage,
          type: 'text',
          message: document.getElementById('message').value
        }

        document.getElementById('message').value = ''

        console.log(payload)

        this.$store.dispatch('sendMessage', payload).then(res => {
          console.log(res)

          if (res.data.status == 200) {
            if ($('#file').get(0).files.length === 0) {
              this.$store
                .dispatch(
                  'getMessageByCustomerId',
                  this.$store.getters.get_selectedUserMessage
                )
                .then(res => {
                  $('.user-chats').scrollTop($('.user-chats')[0].scrollHeight)
                })
            } else {
              var formData = new FormData()
              var imagefile = document.querySelector('#file')
              formData.append('file[0]', imagefile.files[0])
              formData.append('message_id', res.data.messagedata.id)

              this.$store.dispatch('addAttachment', formData).then(res => {
                this.$store
                  .dispatch(
                    'getMessageByCustomerId',
                    this.$store.getters.get_selectedUserMessage
                  )
                  .then(res => {
                    $('.user-chats').scrollTop($('.user-chats')[0].scrollHeight)
                    feather.replace({ color: 'white' })
                  })
              })

              $('#file').empty()
            }
            this.$root.$emit('myEvent', 'new message!')
          }
        })
      }
    },

    handleFileUpload: function(e) {
      console.log('sss')
    }
  }
}
</script>

<style scoped>
/* .attachments{

  background-color: #262c49!important;

} */

a {
  color: white;
}

svg {
  height: 1em;
  margin-top: -4px;
  pointer-events: none;
  vertical-align: middle;
  width: 1em;
}

.attachment-section-left {
  padding: 20px 13px;
  background-color: #4d577e;
  margin-top: 10px;
  border-radius: 5px;
}
.attachment-section-right {
  padding: 20px 13px;
  background-color: #4137b7;
  margin-top: 10px;
  border-radius: 5px;
}
</style>

