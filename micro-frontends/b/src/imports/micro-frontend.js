class B extends HTMLElement {
  constructor() {
    super();

    this.state = {
      count: 0,
    };

    this.addCountListener();

    const shadow = this.attachShadow({ mode: "open" });
    const wrapper = this.render();
    const styles = this.styles();

    shadow.appendChild(wrapper);
    shadow.appendChild(styles);

    this.shadow = shadow;
  }

  renderMsg() {
    const span = document.createElement("span");
    span.innerHTML = `here is a micro-frontend from team b!`;
    return span;
  }

  renderCount() {
    const state = this.state;
    const count = document.createElement("span");

    count.className = "count";
    count.id = "b__count";

    count.innerHTML = state.count;
    return count;
  }

  onUpdateCount(amt = 1) {
    this.state.count += amt;
    const countEl = this.shadowRoot.getElementById("b__count");
    countEl.innerHTML = this.state.count;
  }

  addCountListener() {
    // This micro-frontend has a dependency on micro-frontend "a", when the button in team "a"
    // is clicked the counter will update
    window.addEventListener("a__click", () => this.onUpdateCount());
    // In addition, when the form in micro-frontend "c" is updated, the counter will update.
    // Make sure that the data from micro-frontend "c" is cast into a number, since the front-ends are \
    // isolated from each other we can't assume that the data is sanitized
    window.addEventListener("c__submit", ({ detail }) =>
      this.onUpdateCount(+detail)
    );
  }

  render() {
    const wrapper = document.createElement("div");
    wrapper.className = "container";
    wrapper.id = "b__wrapper";

    wrapper.appendChild(this.renderMsg());
    wrapper.appendChild(this.renderCount());

    return wrapper;
  }

  styles() {
    const style = document.createElement("style");

    style.textContent = `
            .container {
              background: #1565c0;
              color: #fff;
              padding: 1rem;
              display: flex;
              justify-content: space-between;
            }
          `;

    return style;
  }
}

customElements.define("b-micro-frontend", B);
