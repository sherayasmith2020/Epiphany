const getDb = require('../util/database').getDb;

class Post {
  constructor(title) {
    this.title = title;
  }

  save() {
    const db = getDb();
    return db.collection('Posts')
      .insertOne(this)
      .then(result => {
        console.log(result);
        console.log("Success!")
      })
    .catch(err => {
      console.log(err);
    });
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection('Posts')
      .find()
      .toArray()
      .then(posts => {
        console.log(posts);
        return posts;
      })
      .catch(err => {
        console.log(err);
      });
  }
}



module.exports = Post;