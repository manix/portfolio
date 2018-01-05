const Model = require("luri-model");

const DEFAULT_LANG = "en";
const LANG_PROP = "_lang_code";

let lang = require("./lang.json");

class Translator extends Model {

  set(prop, value) {
    if (prop === "_lang_code") {
      if (value === this.get("_lang_code")) {
        return;
      }

      this.set(lang[value]);
    }

    return super.set(prop, value);
  }

  prop(prop, def = { node: "span" }, renderer = null) {
    return super.prop(prop, def, renderer);
  }
}

module.exports = new Translator();
module.exports.set(LANG_PROP, DEFAULT_LANG);

window.lang = module.exports;
window.t = module.exports.prop.bind(module.exports);