/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
  return loadTemplates([
    // Actor partials.
    'systems/godbound/templates/actor/parts/actor-features.hbs',
    'systems/godbound/templates/actor/parts/actor-items.hbs',
    'systems/godbound/templates/actor/parts/actor-words.hbs',
    'systems/godbound/templates/actor/parts/actor-effects.hbs',
    // Item partials
    'systems/godbound/templates/item/parts/item-effects.hbs',
  ]);
};
