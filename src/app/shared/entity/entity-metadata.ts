import { EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Questionnaire: {}
};

// sert a definir les pluriels des entites
const pluralNames = {Questionnaire: 'Questionnaires'};

export const entityConfig = {
  entityMetadata,
  pluralNames
};
