  class C extends HTMLElement {
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
      msg.innerHTML = `hello from micro-frontend C!`;
      return msg;
    }

    renderForm() {
      const form = document.createElement("form");
      form.id = "c__form";

      form.onsubmit = ev => {
        ev.preventDefault();
        const value = this.shadowRoot.getElementById("c__form").amount.value;

        if (value >= 1) {
          const event = new CustomEvent("c__submit", { detail: parseInt(value) });
          window.dispatchEvent(event);
        }

        const input = this.shadowRoot.getElementById("c__amount");
        input.value = 0;
      };

      form.innerHTML = `
          <form>
            <fieldset>
              <label for="c__amount">Increase the counter</label>
              <input id="c__amount" type="number" name="amount" value="1" />
            </fieldset>
            <button type="submit">submit!</button>
          </form>
        `;

      return form;
    }

    render() {
      const wrapper = document.createElement("div");
      wrapper.className = "container";

      wrapper.appendChild(this.renderMsg());
      wrapper.appendChild(this.renderForm());

      return wrapper;
    }

    styles() {
      const style = document.createElement("style");

      style.textContent = `
            .container {
              background: #4caf50;
              color: #000;
              padding: 1rem;
            }

            button {
              padding: 0.5rem 1rem;
              background: #fff;
              border: 1px solid #888;
              border-radius: 4px;
            }

            form {
              margin-top: 0.5rem;
              padding: 0.5rem;
            }

            fieldset {
              border: none;
              padding: 0.5rem 0;
            }

            input[type="number"] {
              padding: 0.25rem;
              margin-left: 0.5rem;
              width: 60px;
              text-align: left;
            }
          `;

      return style;
    }
  }

  customElements.define("c-micro-frontend", C);
