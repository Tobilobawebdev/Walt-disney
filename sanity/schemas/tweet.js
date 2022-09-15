
export default {
  name: 'tweet',
  title: 'Tweet',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Text in Tweet',
      type: 'string',
    },
    {
      name: "username",
      title: "Username",
      type: "string"
    },
    {
      name: "profileImg",
      title: "Profile Image",
      type: "string"
    },
    {
      name: "blockTweet",
      title: "Block Tweet",
      description: "ADMIN controls: Toggle is tweet deemed inappropriate",
      type: "boolean"
    },
    {
      name: "image",
      title: "Tweet Image",
      type: "string"
    }
  ],
  
}
