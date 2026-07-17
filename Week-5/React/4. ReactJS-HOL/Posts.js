import React, { Component } from 'react';

// A handy list of English titles and descriptions to replace the Latin API text
const englishBlogs = [
  { title: "Mastering React Class Components", body: "Class components are the foundation of older React apps. Understanding lifecycle methods like componentDidMount helps you manage side effects and state updates flawlessly." },
  { title: "Demystifying Component Lifecycle Hooks", body: "Every React component goes through a lifecycle: mounting, updating, and unmounting. Hooks let us inject logic at precise moments during a component's lifetime." },
  { title: "Working with REST APIs in Modern Web Apps", body: "Fetching data from external servers using the fetch API allows your frontend interface to display dynamic, real-time data to your users smoothly." },
  { title: "Why CSS Modules are a Lifesaver", body: "Global CSS scoping often causes class name collisions that break layouts. CSS modules fix this by automatically generating unique, localized class scopes." }
];

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postsList: [],
      error: null
    };
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response failed!');
        }
        return response.json();
      })
      .then(data => {
        this.setState({ postsList: data });
      })
      .catch(err => {
        throw err; 
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert("An error occurred while loading posts: " + error.message);
    this.setState({ error: error.message });
  }

  render() {
    if (this.state.error) {
      return <div style={{ color: 'red', textAlign: 'center' }}><h3>Something went wrong!</h3></div>;
    }

    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
        <h2 style={{ textAlign: 'center', color: '#333' }}>Blog Posts Feed</h2>
        
        {/* We loop through the API data but map index positions to our readable English list */}
        {this.state.postsList.slice(0, 4).map((post, index) => {
          const localPost = englishBlogs[index] || { title: post.title, body: post.body };
          return (
            <div key={post.id} style={{ borderBottom: '1px solid #ccc', margin: '15px 0', paddingBottom: '10px' }}>
              <h3 style={{ color: '#007bff' }}>{localPost.title}</h3>
              <p style={{ color: '#555' }}>{localPost.body}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Posts;