<template>
  <div class="chatbody">
    <div class="chat-container">
      <div class="chat-header">
          <h2>CHAT GPT</h2>
      </div>
      <div class="chat-messages" id="chat-messages">
          <!-- Messages will appear here -->
          <p>{{ responseMessage }}</p>
      </div>
      <div class="chat-input">
        <input type="text" v-model="requestMessage" placeholder="Type a message..." v-on:keyup.enter="clickSend">
        <q-btn flat label="전송" @click.prevent="clickSend" />
      </div>
    </div>
    <c-dialog :param="popupOptions"></c-dialog>
  </div>
</template>

<script>
import selectConfig from '@/js/selectConfig';
export default {
  name: 'gpt-test',
  props: {
  },
  data() {
    return {
      popupOptions: {
        target: null,
        title: '',
        visible: false,
        width: '80%',
        param: {},
        closeCallback: null,
      },
      openai: null,
      requestMessage: '',
      response: '',
      responseMessage: '',
    };
  },
  watch: {
  },
  beforeCreate() {},
  created() {},
  beforeMount() {
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
  },
  methods: {
    init() {
      this.editable = this.$route.meta.editable;
      
      // api scope
      this.listUrl = selectConfig.gpt.dashboard.list.url;
      
      // this.getList();
    },
    clickSend() {
      this.$chatgpt.requestMessage(this.requestMessage);
    }
    // clickSend() {
    //   this.response = this.$chatgpt.chat.completions.create({
    //     messages: [
    //       {
    //         role: 'user',
    //         content: this.requestMessage,
    //       },
    //     ],
    //     model: 'gpt-4o-mini',
    //   })

    //   console.log(this.response)
    // },
    // getList() {
    //   let chatCompletion = client.chat.completions.create({
    //   messages: [{ role: 'user', content: 'Say this is a test' }],
    //   model: 'gpt-3.5-turbo',
    // });
    // },
  }
};
</script>
<style lang="css">
.chatbody {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
    margin: 0;
}

.chat-container {
    width: 800px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.chat-header {
    background-color: #007bff;
    color: white;
    padding: 15px;
    text-align: center;
}

.chat-messages {
    flex-grow: 1;
    padding: 15px;
    overflow-y: auto;
    border-bottom: 1px solid #ddd;
}

.chat-messages .message {
    margin-bottom: 15px;
}

.chat-messages .message.user {
    text-align: right;
}

.chat-messages .message .message-content {
    display: inline-block;
    padding: 10px 15px;
    border-radius: 20px;
    background-color: #f1f1f1;
    max-width: 70%;
}

.chat-messages .message.user .message-content {
    background-color: #007bff;
    color: white;
}

.chat-input {
    display: flex;
    padding: 15px;
    border-top: 1px solid #ddd;
}

.chat-input input {
    flex-grow: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 20px;
    margin-right: 10px;
}

.chat-input button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
}

.chat-input button:hover {
    background-color: #0056b3;
}
</style>