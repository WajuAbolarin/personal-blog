import Sanity from "~/helpers/api";
// import {MockApi} from "~/helpers/mockapi";


export default (ctx, inject) => {
  // console.log(ctx)
  inject("api", () => new Sanity("11y83f9z", "production"));
  // inject("api", () => new MockApi());
}

