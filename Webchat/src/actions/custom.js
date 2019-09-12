import config from '../config'
import axios from 'axios'

export const initChat = (conversationId) => {
  const url_post = config.apiCAI + "/dialog"

  $.ajax({
    url: url_post,
    type: 'post',
    headers: {
      "Authorization": "Token " + config.token
    },
    data: {
      "message": {
        "content": "Hello SAP Conversational AI",
        "type": "text"
      },
      "conversation_id": conversationId
    },
    success: function(data) {
      console.log(data)
    },
    error: function() {
      alert("Error")
    }
  })
}
export const updateMemory = (conversationId) => {

  const url = config.apiCAI + "/users/" + config.userSlug + "/bots/" + config.botSlug + "/versions/" + config.version + "/builder/conversation_states/" + conversationId

  $.ajax({
    url: url,
    type: 'PUT',
    headers: {
      "Authorization": "Token " + config.token
    },
    data: {
      "language": "pt",
      "merge_memory": true,
      "memory": {
        "user": {
          "id": "12345",
          "name": "Iron Man"
        }
      }
    },
    success: function(data) {
      console.log(data)
      window.tokenLoad = true
    },
    error: function() {
      alert("Error")
    }
  })
}
