import { EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Category: {},
  Questionnaire: {}
};

// sert a definir les pluriels des entites
const pluralNames = { Category: 'Categories', Questionnaire: 'Questionnaires'};

export const entityConfig = {
  entityMetadata,
  pluralNames
};
