<!-- Start SDK Example Usage [usage] -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.databaseConnections.create({
    authType: "connectionString",
    configObj: "<value>",
    connectionString:
      "mysql://admin:password123@mysql.example.com:3306/production?ssl=true",
    connectionTimeout: 10000,
    credsSecrets: "<value>",
    databaseType: "mysql",
    description: "Production MySQL database for customer data",
    id: "mysql-prod-db",
    password: "QpvMa8DI_lUJL_b",
    requestTimeout: 4657.19,
    tags: "production,mysql,customer-data",
    user: "Dolores.Feil",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->