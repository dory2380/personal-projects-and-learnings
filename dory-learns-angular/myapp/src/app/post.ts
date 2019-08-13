export class Post {
  title: string;
  text: string;
  createdAt: Date;
  author: string;
  published: boolean;

  constructor(
    title: string,
    text: string,
    createdAt: Date,
    author: string,
    published: boolean
  ) {
    this.title = title;
    this.text = text;
    this.createdAt = createdAt;
    this.author = author;
    this.published = published;
  }
}
