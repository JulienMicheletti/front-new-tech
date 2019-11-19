// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  backend: {
    protocol: 'http',
    host: '0.0.0.0',
    port: '3000',
    endpoints: {
      allQuestionnaires: '/questionnaires',
      oneQuestionnaire: '/questionnaires/:id',
      allCategoryQuestionnaires: '/questionnaires/category/:category',
      addPlayer: '/questionnaires/addPlayer/:id',
    }
  }
};

