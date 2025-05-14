// Function to format date
function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Function to create a new post
function createPost(imageUrl, title, date, caption) {
    const post = document.createElement('div');
    post.className = 'post';
    
    post.innerHTML = `
        <div class="post-image">
            <img src="${imageUrl}" alt="${title}">
        </div>
        <div class="post-content">
            <h2>${title}</h2>
            <p class="date">${formatDate(date)}</p>
            <p class="caption">${caption}</p>
        </div>
    `;
    
    return post;
}

// Function to add a new post to the page
function addNewPost(imageUrl, title, date, caption) {
    const postsContainer = document.querySelector('.posts');
    if (postsContainer) {
        const newPost = createPost(imageUrl, title, date, caption);
        postsContainer.prepend(newPost);
    }
}

// Function to load posts from a data structure
function loadPosts(posts) {
    const postsContainer = document.querySelector('.posts');
    if (postsContainer) {
        postsContainer.innerHTML = '';
        
        posts.forEach(post => {
            const newPost = createPost(
                post.imageUrl,
                post.title,
                new Date(post.date),
                post.caption
            );
            postsContainer.appendChild(newPost);
        });
    }
}

// Example posts data structure:
const examplePosts = [
    {
        imageUrl: 'images/weekend1-graph.jpg',
        title: 'Weekend 1',
        date: '2024-03-17',
        caption: 'Initial weekend energy consumption baseline established.'
    },
    {
        imageUrl: 'images/weekend2-graph.jpg',
        title: 'Weekend 2',
        date: '2024-03-24',
        caption: 'Energy usage patterns show significant improvement.'
    }
];

// To load example posts, uncomment the following line:
// loadPosts(examplePosts); 