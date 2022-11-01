import { storeNames } from "../util/constants.mjs";

const plant1 = {
  id: "001",
  name: "ficus",
  description: "ficus plant",
  price: "20$",
  image_url: "http://imageurl.com/",
  category: "home-plants",
  metadata: {
    humidity: "50%",
    temperature: "20",
    watering: "3",
  },
};

export function createBasketPage(helpers) {
  const {
    createCustomElement,
    html,
    renderer,
    getAppState,
    getI18n,
    withStore,
    withI18n,
  } = helpers;
  createCustomElement(
    "basket-page",
    withStore(
      {
        layout: getAppState(storeNames.LAYOUT),
        basket: getAppState(storeNames.BASKET),
      },
      withI18n(getI18n(), {
        renderer,
        computed: {
          pageTitle() {
            return this.i18n ? this.i18n.t("basket.pageTitle") : "Basket";
          },
        },
        addPlant() {
          this.store.basket.addToBasket(plant1);
        },
        deletePlant() {
          this.store.basket.removeFromBasket(plant1.id);
        },
        showStoreContents() {
          console.log(this.store.basket.state.basketContents);
        },
        mounted() {
          this.store.layout.setPageTitle(this.pageTitle);
        },
        render() {
          return html`
            <section>
              <h1>${this.pageTitle}</h1>
              <button class="btn-primary" onclick="${this.addPlant}">
                Add Plant
              </button>
              <button class="btn-primary" onclick="${this.deletePlant}">
                Delete Plant
              </button>
              <div>
                ${this.store.basket.state.basketContents.map(
                  (product) => html` <span> ${product.description} </span> `
                )}
              </div>
              <button class="btn-primary" onclick="${this.showStoreContents}">
                Show me what's in the store
              </button>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                et nisl eget lacus maximus tincidunt. Mauris at viverra neque.
                Aenean vulputate orci id convallis gravida.
              </p>
            </section>
          `;
        },
      })
    )
  );
}
