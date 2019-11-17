import { EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Questionnaires: {}
};

// sert a definir les pluriels des entites
const pluralNames = {Questionnaires: 'Questionnaires'};

export const entityConfig = {
  entityMetadata,
  pluralNames
};
