const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
});

const getPosts = () => {
  return instance.get(`/posts`);
};

const getUsers = userId => {
  return instance.get(`/users/${userId}`);
};

const getData = async () => {
  let response;
  const users = {};

  try {
    response = await getPosts();
    const posts = response.data;

    for (let key in posts) {
      const post = posts[key];
      if (users[post.userId]) {
        response = users[post.userId];
      } else {
        response = await getUsers(post.userId);
        users[post.userId] = response;
      }
      const user = response.data;
      post.user = user;
    }
    return posts;
  } catch (err) {
    console.log(err);
  }
};

const getResult = async () => {
  const result = await getData();
  console.log(result);
};

// result will be a bit long because of the size of the fetched data. Around 10-15secs.
getResult();
