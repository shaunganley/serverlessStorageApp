export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "<serverless-app-file-storage-bucket-region>",
    BUCKET: "<serverless-app-file-storage-bucket-name>"
  },
  cognito: {
    REGION: "<serverless-app-cognito-region>",
    USER_POOL_ID: "<serverless-app-cognito-user-pool-id>",
    APP_CLIENT_ID: "<serverless-app-cognito-app-client-id>",
    IDENTITY_POOL_ID: "<serverless-app-cognito-identity-pool-id>"
  }
};