export interface Tweet extends TweetBody {
    _id: string
    _createdAt: string
    updatedAt: string
    _rev: string
    _type: "tweet"
    blockTweet: boolean
}

export type TweetBody = {
    text: string
    username: string
    profileImg: string
    image?: string
}

export interface Comment extends CommentBody {
    _id: string
    _createdAt: string
    updatedAt: string
    _rev: string
    _type: "tweet"
    blockTweet: boolean
}

export type CommentBody = {
    text: string
    username: string
    profileImg: string
    comment: string
}