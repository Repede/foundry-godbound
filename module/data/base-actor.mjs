import GodboundDataModel from "./base-model.mjs";

export default class GodboundActorBase extends GodboundDataModel {

  static defineSchema() {
    const fields = foundry.data.fields;
    const requiredInteger = { required: true, nullable: false, integer: true };
    const schema = {};

    schema.health = new fields.SchemaField({
      value: new fields.NumberField({ ...requiredInteger, initial: 10, min: 0 }),
      max: new fields.NumberField({ ...requiredInteger, initial: 10 })
    });
    schema.effort = new fields.SchemaField({
      value: new fields.NumberField({ ...requiredInteger, initial: 2, min: 0 }),
      max: new fields.NumberField({ ...requiredInteger, initial: 2 })
    });
    schema.biography = new fields.StringField({ required: true, blank: true }); // equivalent to passing ({initial: ""}) for StringFields

    return schema;
  }

}