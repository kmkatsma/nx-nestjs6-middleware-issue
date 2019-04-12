module.exports = {
  name: 'api-api',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/api/api/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
