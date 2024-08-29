class A extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    const wrapper = this.render();
    const styles = this.styles();

    shadow.appendChild(wrapper);
    shadow.appendChild(styles);
  }

  renderMsg() {
    const msg = document.createElement("span");
    msg.innerHTML = `hello from micro-frontend A!`;
    return msg;
  }

  renderBtn(msg = "😎") {
    const btn = document.createElement("button");
    btn.className = "btn";

    btn.onclick = () => {
      const event = new Event("a__click");
      window.dispatchEvent(event);
    };

    btn.innerHTML = `click me! 🎉`;
    return btn;
  }

  render() {
    const wrapper = document.createElement("div");

    wrapper.className = "container";
    wrapper.append(this.renderMsg());
    wrapper.append(this.renderBtn());

    return wrapper;
  }

  styles() {
    const style = document.createElement("style");

    style.textContent = `
        .container {
          background: #e91e63;
          color: white;
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .btn {
          padding: 0.25rem;
          background: #fff;
          border: 1px solid #888;
          border-radius: 4px;
        }
      `;

    return style;
  }
}

customElements.define("a-micro-frontend", A);
