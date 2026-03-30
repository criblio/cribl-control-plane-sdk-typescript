# DatabaseConnections

## Overview

### Available Operations

* [create](#create) - Create Database Connection
* [delete](#delete) - Delete a Database Connection
* [get](#get) - Get a Database Connection
* [update](#update) - Update a Database Connection

## create

Create a new Database Connection.

### Example Usage: DatabaseConnectionExamplesMySQLWithConnectionString

<!-- UsageSnippet language="typescript" operationID="createDatabaseConnectionConfig" method="post" path="/lib/database-connections" example="DatabaseConnectionExamplesMySQLWithConnectionString" -->
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
    connectionString: "mysql://admin:password123@mysql.example.com:3306/production?ssl=true",
    connectionTimeout: 10000,
    databaseType: "mysql",
    description: "Production MySQL database for customer data",
    id: "mysql-prod-db",
    tags: "production,mysql,customer-data",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { databaseConnectionsCreate } from "cribl-control-plane/funcs/databaseConnectionsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await databaseConnectionsCreate(criblControlPlane, {
    authType: "connectionString",
    connectionString: "mysql://admin:password123@mysql.example.com:3306/production?ssl=true",
    connectionTimeout: 10000,
    databaseType: "mysql",
    description: "Production MySQL database for customer data",
    id: "mysql-prod-db",
    tags: "production,mysql,customer-data",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("databaseConnectionsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: DatabaseConnectionExamplesMySQLWithSecret

<!-- UsageSnippet language="typescript" operationID="createDatabaseConnectionConfig" method="post" path="/lib/database-connections" example="DatabaseConnectionExamplesMySQLWithSecret" -->
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
    authType: "secret",
    connectionTimeout: 15000,
    databaseType: "mysql",
    description: "Analytics MySQL database",
    id: "mysql-analytics-db",
    tags: "analytics,mysql",
    textSecret: "mysql-analytics-connection",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { databaseConnectionsCreate } from "cribl-control-plane/funcs/databaseConnectionsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await databaseConnectionsCreate(criblControlPlane, {
    authType: "secret",
    connectionTimeout: 15000,
    databaseType: "mysql",
    description: "Analytics MySQL database",
    id: "mysql-analytics-db",
    tags: "analytics,mysql",
    textSecret: "mysql-analytics-connection",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("databaseConnectionsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: DatabaseConnectionExamplesOracleWithConnectionString

<!-- UsageSnippet language="typescript" operationID="createDatabaseConnectionConfig" method="post" path="/lib/database-connections" example="DatabaseConnectionExamplesOracleWithConnectionString" -->
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
    connectionString: "oracle.example.com:1521/ORCL",
    connectionTimeout: 15000,
    databaseType: "oracle",
    description: "Oracle ERP database",
    id: "oracle-erp",
    password: "Oracle_Pass456!",
    tags: "erp,oracle,finance",
    user: "erp_user",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { databaseConnectionsCreate } from "cribl-control-plane/funcs/databaseConnectionsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await databaseConnectionsCreate(criblControlPlane, {
    authType: "connectionString",
    connectionString: "oracle.example.com:1521/ORCL",
    connectionTimeout: 15000,
    databaseType: "oracle",
    description: "Oracle ERP database",
    id: "oracle-erp",
    password: "Oracle_Pass456!",
    tags: "erp,oracle,finance",
    user: "erp_user",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("databaseConnectionsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: DatabaseConnectionExamplesOracleWithCredentialsSecrets

<!-- UsageSnippet language="typescript" operationID="createDatabaseConnectionConfig" method="post" path="/lib/database-connections" example="DatabaseConnectionExamplesOracleWithCredentialsSecrets" -->
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
    authType: "secrets",
    connectionTimeout: 15000,
    credsSecrets: "oracle-secure-credentials",
    databaseType: "oracle",
    description: "High-security Oracle database with credential secrets",
    id: "oracle-secure-db",
    tags: "secure,oracle,sensitive-data",
    textSecret: "oracle-secure-connection",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { databaseConnectionsCreate } from "cribl-control-plane/funcs/databaseConnectionsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await databaseConnectionsCreate(criblControlPlane, {
    authType: "secrets",
    connectionTimeout: 15000,
    credsSecrets: "oracle-secure-credentials",
    databaseType: "oracle",
    description: "High-security Oracle database with credential secrets",
    id: "oracle-secure-db",
    tags: "secure,oracle,sensitive-data",
    textSecret: "oracle-secure-connection",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("databaseConnectionsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: DatabaseConnectionExamplesOracleWithSecret

<!-- UsageSnippet language="typescript" operationID="createDatabaseConnectionConfig" method="post" path="/lib/database-connections" example="DatabaseConnectionExamplesOracleWithSecret" -->
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
    authType: "secret",
    connectionTimeout: 20000,
    databaseType: "oracle",
    description: "Oracle data warehouse",
    id: "oracle-warehouse",
    password: "Warehouse_Pass789!",
    tags: "warehouse,oracle,reporting",
    textSecret: "oracle-warehouse-connection",
    user: "warehouse_user",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { databaseConnectionsCreate } from "cribl-control-plane/funcs/databaseConnectionsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await databaseConnectionsCreate(criblControlPlane, {
    authType: "secret",
    connectionTimeout: 20000,
    databaseType: "oracle",
    description: "Oracle data warehouse",
    id: "oracle-warehouse",
    password: "Warehouse_Pass789!",
    tags: "warehouse,oracle,reporting",
    textSecret: "oracle-warehouse-connection",
    user: "warehouse_user",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("databaseConnectionsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: DatabaseConnectionExamplesPostgreSQLWithConnectionString

<!-- UsageSnippet language="typescript" operationID="createDatabaseConnectionConfig" method="post" path="/lib/database-connections" example="DatabaseConnectionExamplesPostgreSQLWithConnectionString" -->
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
    connectionString: "postgresql://warehouse_user:SecurePass456@postgres.example.com:5432/warehouse?sslmode=require",
    connectionTimeout: 15000,
    databaseType: "postgres",
    description: "Data warehouse PostgreSQL database",
    id: "postgres-warehouse",
    tags: "warehouse,postgres,reporting",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { databaseConnectionsCreate } from "cribl-control-plane/funcs/databaseConnectionsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await databaseConnectionsCreate(criblControlPlane, {
    authType: "connectionString",
    connectionString: "postgresql://warehouse_user:SecurePass456@postgres.example.com:5432/warehouse?sslmode=require",
    connectionTimeout: 15000,
    databaseType: "postgres",
    description: "Data warehouse PostgreSQL database",
    id: "postgres-warehouse",
    tags: "warehouse,postgres,reporting",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("databaseConnectionsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: DatabaseConnectionExamplesPostgreSQLWithSecret

<!-- UsageSnippet language="typescript" operationID="createDatabaseConnectionConfig" method="post" path="/lib/database-connections" example="DatabaseConnectionExamplesPostgreSQLWithSecret" -->
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
    authType: "secret",
    connectionTimeout: 10000,
    databaseType: "postgres",
    description: "Logs PostgreSQL database",
    id: "postgres-logs",
    tags: "logs,postgres",
    textSecret: "postgres-logs-connection",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { databaseConnectionsCreate } from "cribl-control-plane/funcs/databaseConnectionsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await databaseConnectionsCreate(criblControlPlane, {
    authType: "secret",
    connectionTimeout: 10000,
    databaseType: "postgres",
    description: "Logs PostgreSQL database",
    id: "postgres-logs",
    tags: "logs,postgres",
    textSecret: "postgres-logs-connection",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("databaseConnectionsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: DatabaseConnectionExamplesSQLServerWithConfigObject

<!-- UsageSnippet language="typescript" operationID="createDatabaseConnectionConfig" method="post" path="/lib/database-connections" example="DatabaseConnectionExamplesSQLServerWithConfigObject" -->
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
    authType: "configObj",
    configObj: "{\"server\":\"sqlserver.example.com\",\"database\":\"Reporting\",\"user\":\"report_user\",\"password\":\"Report_Pass123!\",\"options\":{\"encrypt\":true,\"trustServerCertificate\":false,\"connectTimeout\":20000}}",
    databaseType: "sqlserver",
    description: "Reporting SQL Server database with custom config",
    id: "sqlserver-reporting",
    requestTimeout: 60000,
    tags: "reporting,sqlserver,analytics",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { databaseConnectionsCreate } from "cribl-control-plane/funcs/databaseConnectionsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await databaseConnectionsCreate(criblControlPlane, {
    authType: "configObj",
    configObj: "{\"server\":\"sqlserver.example.com\",\"database\":\"Reporting\",\"user\":\"report_user\",\"password\":\"Report_Pass123!\",\"options\":{\"encrypt\":true,\"trustServerCertificate\":false,\"connectTimeout\":20000}}",
    databaseType: "sqlserver",
    description: "Reporting SQL Server database with custom config",
    id: "sqlserver-reporting",
    requestTimeout: 60000,
    tags: "reporting,sqlserver,analytics",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("databaseConnectionsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: DatabaseConnectionExamplesSQLServerWithConnectionString

<!-- UsageSnippet language="typescript" operationID="createDatabaseConnectionConfig" method="post" path="/lib/database-connections" example="DatabaseConnectionExamplesSQLServerWithConnectionString" -->
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
    connectionString: "Server=sqlserver.example.com;Database=ERP;User Id=erp_admin;Password=ERP_Pass789!;Encrypt=true",
    connectionTimeout: 15000,
    databaseType: "sqlserver",
    description: "ERP SQL Server database",
    id: "sqlserver-erp",
    requestTimeout: 30000,
    tags: "erp,sqlserver,finance",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { databaseConnectionsCreate } from "cribl-control-plane/funcs/databaseConnectionsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await databaseConnectionsCreate(criblControlPlane, {
    authType: "connectionString",
    connectionString: "Server=sqlserver.example.com;Database=ERP;User Id=erp_admin;Password=ERP_Pass789!;Encrypt=true",
    connectionTimeout: 15000,
    databaseType: "sqlserver",
    description: "ERP SQL Server database",
    id: "sqlserver-erp",
    requestTimeout: 30000,
    tags: "erp,sqlserver,finance",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("databaseConnectionsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: DatabaseConnectionExamplesSQLServerWithSecret

<!-- UsageSnippet language="typescript" operationID="createDatabaseConnectionConfig" method="post" path="/lib/database-connections" example="DatabaseConnectionExamplesSQLServerWithSecret" -->
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
    authType: "secret",
    connectionTimeout: 15000,
    databaseType: "sqlserver",
    description: "CRM SQL Server database",
    id: "sqlserver-crm",
    requestTimeout: 15000,
    tags: "crm,sqlserver,sales",
    textSecret: "sqlserver-crm-connection",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { databaseConnectionsCreate } from "cribl-control-plane/funcs/databaseConnectionsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await databaseConnectionsCreate(criblControlPlane, {
    authType: "secret",
    connectionTimeout: 15000,
    databaseType: "sqlserver",
    description: "CRM SQL Server database",
    id: "sqlserver-crm",
    requestTimeout: 15000,
    tags: "crm,sqlserver,sales",
    textSecret: "sqlserver-crm-connection",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("databaseConnectionsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.DatabaseConnectionConfig](../../models/databaseconnectionconfig.md)                                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CountedDatabaseConnectionConfig](../../models/counteddatabaseconnectionconfig.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## delete

Delete the specified Database Connection.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteDatabaseConnectionConfigById" method="delete" path="/lib/database-connections/{id}" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.databaseConnections.delete({
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { databaseConnectionsDelete } from "cribl-control-plane/funcs/databaseConnectionsDelete.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await databaseConnectionsDelete(criblControlPlane, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("databaseConnectionsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteDatabaseConnectionConfigByIdRequest](../../models/operations/deletedatabaseconnectionconfigbyidrequest.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CountedDatabaseConnectionConfig](../../models/counteddatabaseconnectionconfig.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## get

Get the specified Database Connection.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getDatabaseConnectionConfigById" method="get" path="/lib/database-connections/{id}" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.databaseConnections.get({
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { databaseConnectionsGet } from "cribl-control-plane/funcs/databaseConnectionsGet.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await databaseConnectionsGet(criblControlPlane, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("databaseConnectionsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetDatabaseConnectionConfigByIdRequest](../../models/operations/getdatabaseconnectionconfigbyidrequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CountedDatabaseConnectionConfig](../../models/counteddatabaseconnectionconfig.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## update

Update the specified Database Connection.</br></br>Provide a complete representation of the Database Connection that you want to update in the request body. This endpoint does not support partial updates. Cribl removes any omitted fields when updating the Database Connection.</br></br>Confirm that the configuration in your request body is correct before sending the request. If the configuration is incorrect, the updated Database Connection might not function as expected.

### Example Usage: DatabaseConnectionExamplesMySQLWithConnectionString

<!-- UsageSnippet language="typescript" operationID="updateDatabaseConnectionConfigById" method="patch" path="/lib/database-connections/{id}" example="DatabaseConnectionExamplesMySQLWithConnectionString" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.databaseConnections.update({
    id: "<id>",
    databaseConnectionConfig: {
      authType: "connectionString",
      connectionString: "mysql://admin:password123@mysql.example.com:3306/production?ssl=true",
      connectionTimeout: 10000,
      databaseType: "mysql",
      description: "Production MySQL database for customer data",
      id: "mysql-prod-db",
      tags: "production,mysql,customer-data",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { databaseConnectionsUpdate } from "cribl-control-plane/funcs/databaseConnectionsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await databaseConnectionsUpdate(criblControlPlane, {
    id: "<id>",
    databaseConnectionConfig: {
      authType: "connectionString",
      connectionString: "mysql://admin:password123@mysql.example.com:3306/production?ssl=true",
      connectionTimeout: 10000,
      databaseType: "mysql",
      description: "Production MySQL database for customer data",
      id: "mysql-prod-db",
      tags: "production,mysql,customer-data",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("databaseConnectionsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: DatabaseConnectionExamplesMySQLWithSecret

<!-- UsageSnippet language="typescript" operationID="updateDatabaseConnectionConfigById" method="patch" path="/lib/database-connections/{id}" example="DatabaseConnectionExamplesMySQLWithSecret" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.databaseConnections.update({
    id: "<id>",
    databaseConnectionConfig: {
      authType: "secret",
      connectionTimeout: 15000,
      databaseType: "mysql",
      description: "Analytics MySQL database",
      id: "mysql-analytics-db",
      tags: "analytics,mysql",
      textSecret: "mysql-analytics-connection",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { databaseConnectionsUpdate } from "cribl-control-plane/funcs/databaseConnectionsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await databaseConnectionsUpdate(criblControlPlane, {
    id: "<id>",
    databaseConnectionConfig: {
      authType: "secret",
      connectionTimeout: 15000,
      databaseType: "mysql",
      description: "Analytics MySQL database",
      id: "mysql-analytics-db",
      tags: "analytics,mysql",
      textSecret: "mysql-analytics-connection",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("databaseConnectionsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: DatabaseConnectionExamplesOracleWithConnectionString

<!-- UsageSnippet language="typescript" operationID="updateDatabaseConnectionConfigById" method="patch" path="/lib/database-connections/{id}" example="DatabaseConnectionExamplesOracleWithConnectionString" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.databaseConnections.update({
    id: "<id>",
    databaseConnectionConfig: {
      authType: "connectionString",
      connectionString: "oracle.example.com:1521/ORCL",
      connectionTimeout: 15000,
      databaseType: "oracle",
      description: "Oracle ERP database",
      id: "oracle-erp",
      password: "Oracle_Pass456!",
      tags: "erp,oracle,finance",
      user: "erp_user",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { databaseConnectionsUpdate } from "cribl-control-plane/funcs/databaseConnectionsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await databaseConnectionsUpdate(criblControlPlane, {
    id: "<id>",
    databaseConnectionConfig: {
      authType: "connectionString",
      connectionString: "oracle.example.com:1521/ORCL",
      connectionTimeout: 15000,
      databaseType: "oracle",
      description: "Oracle ERP database",
      id: "oracle-erp",
      password: "Oracle_Pass456!",
      tags: "erp,oracle,finance",
      user: "erp_user",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("databaseConnectionsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: DatabaseConnectionExamplesOracleWithCredentialsSecrets

<!-- UsageSnippet language="typescript" operationID="updateDatabaseConnectionConfigById" method="patch" path="/lib/database-connections/{id}" example="DatabaseConnectionExamplesOracleWithCredentialsSecrets" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.databaseConnections.update({
    id: "<id>",
    databaseConnectionConfig: {
      authType: "secrets",
      connectionTimeout: 15000,
      credsSecrets: "oracle-secure-credentials",
      databaseType: "oracle",
      description: "High-security Oracle database with credential secrets",
      id: "oracle-secure-db",
      tags: "secure,oracle,sensitive-data",
      textSecret: "oracle-secure-connection",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { databaseConnectionsUpdate } from "cribl-control-plane/funcs/databaseConnectionsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await databaseConnectionsUpdate(criblControlPlane, {
    id: "<id>",
    databaseConnectionConfig: {
      authType: "secrets",
      connectionTimeout: 15000,
      credsSecrets: "oracle-secure-credentials",
      databaseType: "oracle",
      description: "High-security Oracle database with credential secrets",
      id: "oracle-secure-db",
      tags: "secure,oracle,sensitive-data",
      textSecret: "oracle-secure-connection",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("databaseConnectionsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: DatabaseConnectionExamplesOracleWithSecret

<!-- UsageSnippet language="typescript" operationID="updateDatabaseConnectionConfigById" method="patch" path="/lib/database-connections/{id}" example="DatabaseConnectionExamplesOracleWithSecret" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.databaseConnections.update({
    id: "<id>",
    databaseConnectionConfig: {
      authType: "secret",
      connectionTimeout: 20000,
      databaseType: "oracle",
      description: "Oracle data warehouse",
      id: "oracle-warehouse",
      password: "Warehouse_Pass789!",
      tags: "warehouse,oracle,reporting",
      textSecret: "oracle-warehouse-connection",
      user: "warehouse_user",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { databaseConnectionsUpdate } from "cribl-control-plane/funcs/databaseConnectionsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await databaseConnectionsUpdate(criblControlPlane, {
    id: "<id>",
    databaseConnectionConfig: {
      authType: "secret",
      connectionTimeout: 20000,
      databaseType: "oracle",
      description: "Oracle data warehouse",
      id: "oracle-warehouse",
      password: "Warehouse_Pass789!",
      tags: "warehouse,oracle,reporting",
      textSecret: "oracle-warehouse-connection",
      user: "warehouse_user",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("databaseConnectionsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: DatabaseConnectionExamplesPostgreSQLWithConnectionString

<!-- UsageSnippet language="typescript" operationID="updateDatabaseConnectionConfigById" method="patch" path="/lib/database-connections/{id}" example="DatabaseConnectionExamplesPostgreSQLWithConnectionString" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.databaseConnections.update({
    id: "<id>",
    databaseConnectionConfig: {
      authType: "connectionString",
      connectionString: "postgresql://warehouse_user:SecurePass456@postgres.example.com:5432/warehouse?sslmode=require",
      connectionTimeout: 15000,
      databaseType: "postgres",
      description: "Data warehouse PostgreSQL database",
      id: "postgres-warehouse",
      tags: "warehouse,postgres,reporting",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { databaseConnectionsUpdate } from "cribl-control-plane/funcs/databaseConnectionsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await databaseConnectionsUpdate(criblControlPlane, {
    id: "<id>",
    databaseConnectionConfig: {
      authType: "connectionString",
      connectionString: "postgresql://warehouse_user:SecurePass456@postgres.example.com:5432/warehouse?sslmode=require",
      connectionTimeout: 15000,
      databaseType: "postgres",
      description: "Data warehouse PostgreSQL database",
      id: "postgres-warehouse",
      tags: "warehouse,postgres,reporting",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("databaseConnectionsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: DatabaseConnectionExamplesPostgreSQLWithSecret

<!-- UsageSnippet language="typescript" operationID="updateDatabaseConnectionConfigById" method="patch" path="/lib/database-connections/{id}" example="DatabaseConnectionExamplesPostgreSQLWithSecret" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.databaseConnections.update({
    id: "<id>",
    databaseConnectionConfig: {
      authType: "secret",
      connectionTimeout: 10000,
      databaseType: "postgres",
      description: "Logs PostgreSQL database",
      id: "postgres-logs",
      tags: "logs,postgres",
      textSecret: "postgres-logs-connection",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { databaseConnectionsUpdate } from "cribl-control-plane/funcs/databaseConnectionsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await databaseConnectionsUpdate(criblControlPlane, {
    id: "<id>",
    databaseConnectionConfig: {
      authType: "secret",
      connectionTimeout: 10000,
      databaseType: "postgres",
      description: "Logs PostgreSQL database",
      id: "postgres-logs",
      tags: "logs,postgres",
      textSecret: "postgres-logs-connection",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("databaseConnectionsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: DatabaseConnectionExamplesSQLServerWithConfigObject

<!-- UsageSnippet language="typescript" operationID="updateDatabaseConnectionConfigById" method="patch" path="/lib/database-connections/{id}" example="DatabaseConnectionExamplesSQLServerWithConfigObject" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.databaseConnections.update({
    id: "<id>",
    databaseConnectionConfig: {
      authType: "configObj",
      configObj: "{\"server\":\"sqlserver.example.com\",\"database\":\"Reporting\",\"user\":\"report_user\",\"password\":\"Report_Pass123!\",\"options\":{\"encrypt\":true,\"trustServerCertificate\":false,\"connectTimeout\":20000}}",
      databaseType: "sqlserver",
      description: "Reporting SQL Server database with custom config",
      id: "sqlserver-reporting",
      requestTimeout: 60000,
      tags: "reporting,sqlserver,analytics",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { databaseConnectionsUpdate } from "cribl-control-plane/funcs/databaseConnectionsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await databaseConnectionsUpdate(criblControlPlane, {
    id: "<id>",
    databaseConnectionConfig: {
      authType: "configObj",
      configObj: "{\"server\":\"sqlserver.example.com\",\"database\":\"Reporting\",\"user\":\"report_user\",\"password\":\"Report_Pass123!\",\"options\":{\"encrypt\":true,\"trustServerCertificate\":false,\"connectTimeout\":20000}}",
      databaseType: "sqlserver",
      description: "Reporting SQL Server database with custom config",
      id: "sqlserver-reporting",
      requestTimeout: 60000,
      tags: "reporting,sqlserver,analytics",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("databaseConnectionsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: DatabaseConnectionExamplesSQLServerWithConnectionString

<!-- UsageSnippet language="typescript" operationID="updateDatabaseConnectionConfigById" method="patch" path="/lib/database-connections/{id}" example="DatabaseConnectionExamplesSQLServerWithConnectionString" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.databaseConnections.update({
    id: "<id>",
    databaseConnectionConfig: {
      authType: "connectionString",
      connectionString: "Server=sqlserver.example.com;Database=ERP;User Id=erp_admin;Password=ERP_Pass789!;Encrypt=true",
      connectionTimeout: 15000,
      databaseType: "sqlserver",
      description: "ERP SQL Server database",
      id: "sqlserver-erp",
      requestTimeout: 30000,
      tags: "erp,sqlserver,finance",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { databaseConnectionsUpdate } from "cribl-control-plane/funcs/databaseConnectionsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await databaseConnectionsUpdate(criblControlPlane, {
    id: "<id>",
    databaseConnectionConfig: {
      authType: "connectionString",
      connectionString: "Server=sqlserver.example.com;Database=ERP;User Id=erp_admin;Password=ERP_Pass789!;Encrypt=true",
      connectionTimeout: 15000,
      databaseType: "sqlserver",
      description: "ERP SQL Server database",
      id: "sqlserver-erp",
      requestTimeout: 30000,
      tags: "erp,sqlserver,finance",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("databaseConnectionsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: DatabaseConnectionExamplesSQLServerWithSecret

<!-- UsageSnippet language="typescript" operationID="updateDatabaseConnectionConfigById" method="patch" path="/lib/database-connections/{id}" example="DatabaseConnectionExamplesSQLServerWithSecret" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.databaseConnections.update({
    id: "<id>",
    databaseConnectionConfig: {
      authType: "secret",
      connectionTimeout: 15000,
      databaseType: "sqlserver",
      description: "CRM SQL Server database",
      id: "sqlserver-crm",
      requestTimeout: 15000,
      tags: "crm,sqlserver,sales",
      textSecret: "sqlserver-crm-connection",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { databaseConnectionsUpdate } from "cribl-control-plane/funcs/databaseConnectionsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await databaseConnectionsUpdate(criblControlPlane, {
    id: "<id>",
    databaseConnectionConfig: {
      authType: "secret",
      connectionTimeout: 15000,
      databaseType: "sqlserver",
      description: "CRM SQL Server database",
      id: "sqlserver-crm",
      requestTimeout: 15000,
      tags: "crm,sqlserver,sales",
      textSecret: "sqlserver-crm-connection",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("databaseConnectionsUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateDatabaseConnectionConfigByIdRequest](../../models/operations/updatedatabaseconnectionconfigbyidrequest.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CountedDatabaseConnectionConfig](../../models/counteddatabaseconnectionconfig.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |