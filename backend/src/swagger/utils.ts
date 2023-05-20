export const idChangeMongoToSwagger = (m2sItem: any) => {
  m2sItem.required.push('id');
  m2sItem.properties.id = { type: 'string' };
  return m2sItem;
};
