import { PelisCollection, Peli } from "./models";

type Options = {
  id?: number;
  search?: {
    title?: string;
    tag?: string;
  };
};

class PelisController {

  model: PelisCollection;
  
  constructor() {
    this.model = new PelisCollection();
  }

  get(options?:Options):Peli[] {
    if (options?.id) {
      return this.model.getById(options.id);
    } else if (options?.search) {
      return this.model.search(options.search);
    } else {
      return this.model.getAll();
    }
  }
}
export { PelisController };
