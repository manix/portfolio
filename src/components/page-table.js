require("./page-table.scss");

module.exports = class PageTable extends luri.Component {

  constructor(title, data) {
    super();

    this.title = title,
      this.data = data;
  }

  props() {
    return {
      class: "table",
      html: [
        this.title,
        Object.keys(this.data).map(key => {
          return {
            class: "row",
            html: [
              {
                class: "col",
                html: key
              }, {
                class: "col",
                html: this.data[key]
              },
            ]
          }
        })
      ]
    };
  }

}
