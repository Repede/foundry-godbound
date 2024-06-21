import GodboundItemBase from "./base-item.mjs";

export default class GodboundWord extends GodboundItemBase {

  static defineSchema() {
    const fields = foundry.data.fields;
    const schema = super.defineSchema();

    return schema;
  }
}