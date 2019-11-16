import { EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Category: {},
  Quiz: {}
};

// because the plural of "category" is not "categorys"
const pluralNames = { Category: 'Category', Quiz: 'Quizzes'};

export const entityConfig = {
  entityMetadata,
  pluralNames
};
