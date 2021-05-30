const config = {
    s3: {
      REGION: "us-west-1",
      BUCKET: "notes-app-uploads",
    },
    apiGateway: {
      REGION: "us-west-1",
      URL: "https://jpa4oqxjo3.execute-api.us-west-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-west-1",
      USER_POOL_ID: "us-west-1_GgWHLxllh",
      APP_CLIENT_ID: "2fv8qk12mm08nm59v5rj8aqb9h",
      IDENTITY_POOL_ID: "us-west-1:5ee4b342-43d6-40b4-ab17-08949cdb3355",
    },
  };
  
  export default config;