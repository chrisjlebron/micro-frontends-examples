import posts from './posts.json' with { type: 'json' };

class Posts extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    const wrapper = this.render();
    const styles = this.styles();

    shadow.appendChild(wrapper);
    shadow.appendChild(styles);
  }

  renderTitle() {
    const title = document.createElement('h1');
    title.innerHTML = `Posts micro-frontend`;
    return title;
  }

  renderPost(post = {}) {
    if (!post.id) return 'no post located!'

    const article = document.createElement('article');
    article.className = 'post';
    article.id = `post-${post.id}`;

    const heading = document.createElement('h1');
    heading.id = post.title.split(' ').join('-').toLowerCase(); // e.g. "the-post-title"
    heading.innerHTML = post.title;

    article.append(heading);
    article.insertAdjacentHTML('beforeend', post.content);

    return article;
  }

  render() {
    const wrapper = document.createElement('section');

    wrapper.className = 'container';
    wrapper.append(this.renderTitle());

    for (const post of posts) {
      wrapper.append(this.renderPost(post))
    }

    return wrapper;
  }

  styles() {
    const style = document.createElement('style');

    style.textContent = `
        .container {
          background: #eeeeee;
          color: black;
          padding: 1rem;
          align-items: center;
        }

        .post {
          margin: 1rem 0;
          padding: 0 1rem;
          background: #fff;
          border: 1px solid #888;
          border-radius: 4px;
        }
      `;

    return style;
  }
}

customElements.define('posts-micro-frontend', Posts);
