const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-greg",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://lai8ts4qi7.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_MhKPaeasY",
    APP_CLIENT_ID: "3n7e2ekhv4tas0teg2sfu24ve5",
    IDENTITY_POOL_ID: "us-east-1:0b051129-7c12-4fb3-81b3-55f2eaa5e226",
  },
};

export default config;