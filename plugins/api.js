import Sanity from "~/helpers/api";
export default (ctx, inject) => {
  inject(
    "api",
    () => new Sanity(process.env.SANITY_PROJECT_ID, process.env.SANITY_DATA_SET)
  );
};
