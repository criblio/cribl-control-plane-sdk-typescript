# Groups.Mappings

## Overview

### Available Operations

* [activate](#activate) - Set a Mapping Ruleset as the active configuration for the specified Cribl product
* [create](#create) - Create a new Mapping Ruleset for the specified Cribl product
* [list](#list) - List all Mapping Rulesets for the specified Cribl product
* [delete](#delete) - Delete the specified Mapping Ruleset from the Worker Group or Edge Fleet
* [get](#get) - Retrieve a Specific Mapping Ruleset
* [update](#update) - Update an existing Mapping Ruleset for a Worker Group or Edge Fleet

## activate

Set a specific Mapping Ruleset as the currently active configuration for the specified Cribl product.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createAdminProductsMappingsActivateByProduct" method="post" path="/admin/products/{product}/mappings/activate" example="MappingRulesetActivateExamplesActivate" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.groups.mappings.activate({
    product: "stream",
    rulesetId: {
      id: "default",
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
import { groupsMappingsActivate } from "cribl-control-plane/funcs/groupsMappingsActivate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await groupsMappingsActivate(criblControlPlane, {
    product: "stream",
    rulesetId: {
      id: "default",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("groupsMappingsActivate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateAdminProductsMappingsActivateByProductRequest](../../models/operations/createadminproductsmappingsactivatebyproductrequest.md)                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CountedRulesetId](../../models/countedrulesetid.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## create

Create and save a new Mapping Ruleset for the specified Cribl product.<br><br>Note: This functionality is not supported for Cribl Stream Workers on Cribl.Cloud.

### Example Usage: MappingRulesetCreateExamplesAWSEC2InstanceMapping

<!-- UsageSnippet language="typescript" operationID="createAdminProductsMappingsByProduct" method="post" path="/admin/products/{product}/mappings" example="MappingRulesetCreateExamplesAWSEC2InstanceMapping" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.groups.mappings.create({
    product: "edge",
    mappingRuleset: {
      id: "aws-ec2-mapping",
      conf: {
        functions: [
          {
            id: "eval",
            filter: "aws?.tags?.Environment === \"Production\"",
            disabled: false,
            final: true,
            description: "Map Production EC2 instances",
            conf: {
              add: [
                {
                  name: "groupId",
                  value: "'aws_prod_fleet'",
                },
              ],
            },
          },
          {
            id: "eval",
            filter: "aws?.tags?.Team === \"DevOps\"",
            disabled: false,
            final: true,
            description: "Map DevOps team EC2 instances",
            conf: {
              add: [
                {
                  name: "groupId",
                  value: "'devops_fleet'",
                },
              ],
            },
          },
          {
            id: "eval",
            filter: "!cribl.group",
            disabled: false,
            final: true,
            description: "Default mapping",
            conf: {
              add: [
                {
                  name: "groupId",
                  value: "'default_fleet'",
                },
              ],
            },
          },
        ],
      },
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
import { groupsMappingsCreate } from "cribl-control-plane/funcs/groupsMappingsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await groupsMappingsCreate(criblControlPlane, {
    product: "edge",
    mappingRuleset: {
      id: "aws-ec2-mapping",
      conf: {
        functions: [
          {
            id: "eval",
            filter: "aws?.tags?.Environment === \"Production\"",
            disabled: false,
            final: true,
            description: "Map Production EC2 instances",
            conf: {
              add: [
                {
                  name: "groupId",
                  value: "'aws_prod_fleet'",
                },
              ],
            },
          },
          {
            id: "eval",
            filter: "aws?.tags?.Team === \"DevOps\"",
            disabled: false,
            final: true,
            description: "Map DevOps team EC2 instances",
            conf: {
              add: [
                {
                  name: "groupId",
                  value: "'devops_fleet'",
                },
              ],
            },
          },
          {
            id: "eval",
            filter: "!cribl.group",
            disabled: false,
            final: true,
            description: "Default mapping",
            conf: {
              add: [
                {
                  name: "groupId",
                  value: "'default_fleet'",
                },
              ],
            },
          },
        ],
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("groupsMappingsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: MappingRulesetCreateExamplesComplexMapping

<!-- UsageSnippet language="typescript" operationID="createAdminProductsMappingsByProduct" method="post" path="/admin/products/{product}/mappings" example="MappingRulesetCreateExamplesComplexMapping" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.groups.mappings.create({
    product: "edge",
    mappingRuleset: {
      id: "complex-mapping",
      conf: {
        functions: [
          {
            id: "eval",
            filter: "(conn_ip.startsWith(\"10.10.42.\") && cpus > 6) || env.CRIBL_HOME.match(\"DMZ\")",
            disabled: false,
            final: true,
            description: "Map high-performance nodes in specific network or DMZ",
            conf: {
              add: [
                {
                  name: "groupId",
                  value: "'high_perf_fleet'",
                },
              ],
            },
          },
          {
            id: "eval",
            filter: "platform === \"linux\" && memory > 16000 && cribl.tags.includes(\"Database\")",
            disabled: false,
            final: true,
            description: "Map Linux nodes with high memory for database workloads",
            conf: {
              add: [
                {
                  name: "groupId",
                  value: "'database_fleet'",
                },
              ],
            },
          },
          {
            id: "eval",
            filter: "!cribl.group",
            disabled: false,
            final: true,
            description: "Default mapping",
            conf: {
              add: [
                {
                  name: "groupId",
                  value: "'default_fleet'",
                },
              ],
            },
          },
        ],
      },
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
import { groupsMappingsCreate } from "cribl-control-plane/funcs/groupsMappingsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await groupsMappingsCreate(criblControlPlane, {
    product: "edge",
    mappingRuleset: {
      id: "complex-mapping",
      conf: {
        functions: [
          {
            id: "eval",
            filter: "(conn_ip.startsWith(\"10.10.42.\") && cpus > 6) || env.CRIBL_HOME.match(\"DMZ\")",
            disabled: false,
            final: true,
            description: "Map high-performance nodes in specific network or DMZ",
            conf: {
              add: [
                {
                  name: "groupId",
                  value: "'high_perf_fleet'",
                },
              ],
            },
          },
          {
            id: "eval",
            filter: "platform === \"linux\" && memory > 16000 && cribl.tags.includes(\"Database\")",
            disabled: false,
            final: true,
            description: "Map Linux nodes with high memory for database workloads",
            conf: {
              add: [
                {
                  name: "groupId",
                  value: "'database_fleet'",
                },
              ],
            },
          },
          {
            id: "eval",
            filter: "!cribl.group",
            disabled: false,
            final: true,
            description: "Default mapping",
            conf: {
              add: [
                {
                  name: "groupId",
                  value: "'default_fleet'",
                },
              ],
            },
          },
        ],
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("groupsMappingsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: MappingRulesetCreateExamplesContainerBasedMapping

<!-- UsageSnippet language="typescript" operationID="createAdminProductsMappingsByProduct" method="post" path="/admin/products/{product}/mappings" example="MappingRulesetCreateExamplesContainerBasedMapping" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.groups.mappings.create({
    product: "stream",
    mappingRuleset: {
      id: "container-mapping",
      conf: {
        functions: [
          {
            id: "eval",
            filter: "hostOs?.platform === \"linux\" && hostOs?.cpu_count > 4",
            disabled: false,
            final: true,
            description: "Map containerized nodes on high-CPU Linux hosts",
            conf: {
              add: [
                {
                  name: "groupId",
                  value: "'container_high_cpu_fleet'",
                },
              ],
            },
          },
          {
            id: "eval",
            filter: "hostOs?.id",
            disabled: false,
            final: true,
            description: "Map all containerized Edge Nodes",
            conf: {
              add: [
                {
                  name: "groupId",
                  value: "'container_fleet'",
                },
              ],
            },
          },
          {
            id: "eval",
            filter: "!cribl.group",
            disabled: false,
            final: true,
            description: "Default mapping for non-containerized nodes",
            conf: {
              add: [
                {
                  name: "groupId",
                  value: "'default_fleet'",
                },
              ],
            },
          },
        ],
      },
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
import { groupsMappingsCreate } from "cribl-control-plane/funcs/groupsMappingsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await groupsMappingsCreate(criblControlPlane, {
    product: "stream",
    mappingRuleset: {
      id: "container-mapping",
      conf: {
        functions: [
          {
            id: "eval",
            filter: "hostOs?.platform === \"linux\" && hostOs?.cpu_count > 4",
            disabled: false,
            final: true,
            description: "Map containerized nodes on high-CPU Linux hosts",
            conf: {
              add: [
                {
                  name: "groupId",
                  value: "'container_high_cpu_fleet'",
                },
              ],
            },
          },
          {
            id: "eval",
            filter: "hostOs?.id",
            disabled: false,
            final: true,
            description: "Map all containerized Edge Nodes",
            conf: {
              add: [
                {
                  name: "groupId",
                  value: "'container_fleet'",
                },
              ],
            },
          },
          {
            id: "eval",
            filter: "!cribl.group",
            disabled: false,
            final: true,
            description: "Default mapping for non-containerized nodes",
            conf: {
              add: [
                {
                  name: "groupId",
                  value: "'default_fleet'",
                },
              ],
            },
          },
        ],
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("groupsMappingsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: MappingRulesetCreateExamplesDefaultRuleset

<!-- UsageSnippet language="typescript" operationID="createAdminProductsMappingsByProduct" method="post" path="/admin/products/{product}/mappings" example="MappingRulesetCreateExamplesDefaultRuleset" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.groups.mappings.create({
    product: "edge",
    mappingRuleset: {
      id: "simple-default-mappings",
      conf: {
        functions: [
          {
            id: "eval",
            filter: "!cribl.group",
            disabled: false,
            final: true,
            description: "Simple default Mapping Ruleset",
            conf: {
              add: [
                {
                  name: "groupId",
                  value: "'default_fleet'",
                },
              ],
            },
          },
        ],
      },
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
import { groupsMappingsCreate } from "cribl-control-plane/funcs/groupsMappingsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await groupsMappingsCreate(criblControlPlane, {
    product: "edge",
    mappingRuleset: {
      id: "simple-default-mappings",
      conf: {
        functions: [
          {
            id: "eval",
            filter: "!cribl.group",
            disabled: false,
            final: true,
            description: "Simple default Mapping Ruleset",
            conf: {
              add: [
                {
                  name: "groupId",
                  value: "'default_fleet'",
                },
              ],
            },
          },
        ],
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("groupsMappingsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: MappingRulesetCreateExamplesOSBasedMapping

<!-- UsageSnippet language="typescript" operationID="createAdminProductsMappingsByProduct" method="post" path="/admin/products/{product}/mappings" example="MappingRulesetCreateExamplesOSBasedMapping" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.groups.mappings.create({
    product: "stream",
    mappingRuleset: {
      id: "os-based-mapping",
      conf: {
        functions: [
          {
            id: "eval",
            filter: "platform === \"linux\"",
            disabled: false,
            final: true,
            description: "Map Linux Edge Nodes",
            conf: {
              add: [
                {
                  name: "groupId",
                  value: "'linux_fleet'",
                },
              ],
            },
          },
          {
            id: "eval",
            filter: "platform === \"win32\"",
            disabled: false,
            final: true,
            description: "Map Windows Edge Nodes",
            conf: {
              add: [
                {
                  name: "groupId",
                  value: "'windows_fleet'",
                },
              ],
            },
          },
          {
            id: "eval",
            filter: "platform === \"darwin\"",
            disabled: false,
            final: true,
            description: "Map macOS Edge Nodes",
            conf: {
              add: [
                {
                  name: "groupId",
                  value: "'macos_fleet'",
                },
              ],
            },
          },
          {
            id: "eval",
            filter: "!cribl.group",
            disabled: false,
            final: true,
            description: "Default mapping for unmapped nodes",
            conf: {
              add: [
                {
                  name: "groupId",
                  value: "'default_fleet'",
                },
              ],
            },
          },
        ],
      },
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
import { groupsMappingsCreate } from "cribl-control-plane/funcs/groupsMappingsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await groupsMappingsCreate(criblControlPlane, {
    product: "stream",
    mappingRuleset: {
      id: "os-based-mapping",
      conf: {
        functions: [
          {
            id: "eval",
            filter: "platform === \"linux\"",
            disabled: false,
            final: true,
            description: "Map Linux Edge Nodes",
            conf: {
              add: [
                {
                  name: "groupId",
                  value: "'linux_fleet'",
                },
              ],
            },
          },
          {
            id: "eval",
            filter: "platform === \"win32\"",
            disabled: false,
            final: true,
            description: "Map Windows Edge Nodes",
            conf: {
              add: [
                {
                  name: "groupId",
                  value: "'windows_fleet'",
                },
              ],
            },
          },
          {
            id: "eval",
            filter: "platform === \"darwin\"",
            disabled: false,
            final: true,
            description: "Map macOS Edge Nodes",
            conf: {
              add: [
                {
                  name: "groupId",
                  value: "'macos_fleet'",
                },
              ],
            },
          },
          {
            id: "eval",
            filter: "!cribl.group",
            disabled: false,
            final: true,
            description: "Default mapping for unmapped nodes",
            conf: {
              add: [
                {
                  name: "groupId",
                  value: "'default_fleet'",
                },
              ],
            },
          },
        ],
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("groupsMappingsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: MappingRulesetCreateExamplesOutpostBasedMapping

<!-- UsageSnippet language="typescript" operationID="createAdminProductsMappingsByProduct" method="post" path="/admin/products/{product}/mappings" example="MappingRulesetCreateExamplesOutpostBasedMapping" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.groups.mappings.create({
    product: "edge",
    mappingRuleset: {
      id: "outpost-mapping",
      conf: {
        functions: [
          {
            id: "eval",
            filter: "outpost.host === \"5ab6c676be6a\"",
            disabled: false,
            final: true,
            description: "Map Edge Nodes from Outpost A",
            conf: {
              add: [
                {
                  name: "groupId",
                  value: "'outpost_a_fleet'",
                },
              ],
            },
          },
          {
            id: "eval",
            filter: "outpost.guid === \"550e8400-e29b-41d4-a716-446655440000\"",
            disabled: false,
            final: true,
            description: "Map Edge Nodes from Outpost B by GUID",
            conf: {
              add: [
                {
                  name: "groupId",
                  value: "'outpost_b_fleet'",
                },
              ],
            },
          },
          {
            id: "eval",
            filter: "!cribl.group",
            disabled: false,
            final: true,
            description: "Default mapping",
            conf: {
              add: [
                {
                  name: "groupId",
                  value: "'default_fleet'",
                },
              ],
            },
          },
        ],
      },
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
import { groupsMappingsCreate } from "cribl-control-plane/funcs/groupsMappingsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await groupsMappingsCreate(criblControlPlane, {
    product: "edge",
    mappingRuleset: {
      id: "outpost-mapping",
      conf: {
        functions: [
          {
            id: "eval",
            filter: "outpost.host === \"5ab6c676be6a\"",
            disabled: false,
            final: true,
            description: "Map Edge Nodes from Outpost A",
            conf: {
              add: [
                {
                  name: "groupId",
                  value: "'outpost_a_fleet'",
                },
              ],
            },
          },
          {
            id: "eval",
            filter: "outpost.guid === \"550e8400-e29b-41d4-a716-446655440000\"",
            disabled: false,
            final: true,
            description: "Map Edge Nodes from Outpost B by GUID",
            conf: {
              add: [
                {
                  name: "groupId",
                  value: "'outpost_b_fleet'",
                },
              ],
            },
          },
          {
            id: "eval",
            filter: "!cribl.group",
            disabled: false,
            final: true,
            description: "Default mapping",
            conf: {
              add: [
                {
                  name: "groupId",
                  value: "'default_fleet'",
                },
              ],
            },
          },
        ],
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("groupsMappingsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: MappingRulesetCreateExamplesTagBasedMapping

<!-- UsageSnippet language="typescript" operationID="createAdminProductsMappingsByProduct" method="post" path="/admin/products/{product}/mappings" example="MappingRulesetCreateExamplesTagBasedMapping" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.groups.mappings.create({
    product: "stream",
    mappingRuleset: {
      id: "tag-based-mapping",
      conf: {
        functions: [
          {
            id: "eval",
            filter: "cribl.tags.includes(\"WinLaptop\")",
            disabled: false,
            final: true,
            description: "Map Windows Laptop Edge Nodes",
            conf: {
              add: [
                {
                  name: "groupId",
                  value: "'laptop_fleet'",
                },
              ],
            },
          },
          {
            id: "eval",
            filter: "cribl.tags.includes(\"Production\")",
            disabled: false,
            final: true,
            description: "Map Production Edge Nodes",
            conf: {
              add: [
                {
                  name: "groupId",
                  value: "'production_fleet'",
                },
              ],
            },
          },
          {
            id: "eval",
            filter: "!cribl.group",
            disabled: false,
            final: true,
            description: "Default mapping",
            conf: {
              add: [
                {
                  name: "groupId",
                  value: "'default_fleet'",
                },
              ],
            },
          },
        ],
      },
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
import { groupsMappingsCreate } from "cribl-control-plane/funcs/groupsMappingsCreate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await groupsMappingsCreate(criblControlPlane, {
    product: "stream",
    mappingRuleset: {
      id: "tag-based-mapping",
      conf: {
        functions: [
          {
            id: "eval",
            filter: "cribl.tags.includes(\"WinLaptop\")",
            disabled: false,
            final: true,
            description: "Map Windows Laptop Edge Nodes",
            conf: {
              add: [
                {
                  name: "groupId",
                  value: "'laptop_fleet'",
                },
              ],
            },
          },
          {
            id: "eval",
            filter: "cribl.tags.includes(\"Production\")",
            disabled: false,
            final: true,
            description: "Map Production Edge Nodes",
            conf: {
              add: [
                {
                  name: "groupId",
                  value: "'production_fleet'",
                },
              ],
            },
          },
          {
            id: "eval",
            filter: "!cribl.group",
            disabled: false,
            final: true,
            description: "Default mapping",
            conf: {
              add: [
                {
                  name: "groupId",
                  value: "'default_fleet'",
                },
              ],
            },
          },
        ],
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("groupsMappingsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateAdminProductsMappingsByProductRequest](../../models/operations/createadminproductsmappingsbyproductrequest.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CountedMappingRuleset](../../models/countedmappingruleset.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## list

Retrieve a list of all existing Mapping Rulesets for the specified Cribl product.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAdminProductsMappingsByProduct" method="get" path="/admin/products/{product}/mappings" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.groups.mappings.list({
    product: "edge",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CriblControlPlaneCore } from "cribl-control-plane/core.js";
import { groupsMappingsList } from "cribl-control-plane/funcs/groupsMappingsList.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await groupsMappingsList(criblControlPlane, {
    product: "edge",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("groupsMappingsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAdminProductsMappingsByProductRequest](../../models/operations/getadminproductsmappingsbyproductrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CountedMappingRuleset](../../models/countedmappingruleset.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## delete

Permanently remove the specified Mapping Ruleset from the Worker Group or Edge Fleet.<br><br>Note: This functionality is not supported for Cribl Stream Workers on Cribl.Cloud.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteAdminProductsMappingsByProductAndId" method="delete" path="/admin/products/{product}/mappings/{id}" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.groups.mappings.delete({
    product: "stream",
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
import { groupsMappingsDelete } from "cribl-control-plane/funcs/groupsMappingsDelete.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await groupsMappingsDelete(criblControlPlane, {
    product: "stream",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("groupsMappingsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteAdminProductsMappingsByProductAndIdRequest](../../models/operations/deleteadminproductsmappingsbyproductandidrequest.md)                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CountedMappingRuleset](../../models/countedmappingruleset.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## get

Get the details for a single Mapping Ruleset, identified by its id, for a Worker Group or Edge Fleet.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAdminProductsMappingsByProductAndId" method="get" path="/admin/products/{product}/mappings/{id}" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.groups.mappings.get({
    product: "stream",
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
import { groupsMappingsGet } from "cribl-control-plane/funcs/groupsMappingsGet.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await groupsMappingsGet(criblControlPlane, {
    product: "stream",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("groupsMappingsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAdminProductsMappingsByProductAndIdRequest](../../models/operations/getadminproductsmappingsbyproductandidrequest.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CountedMappingRuleset](../../models/countedmappingruleset.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |

## update

Modify the configuration of the specified Mapping Ruleset for a Worker Group or Edge Fleet.

### Example Usage: MappingRulesetUpdateExamplesEnableDisabledRule

<!-- UsageSnippet language="typescript" operationID="updateAdminProductsMappingsByProductAndId" method="patch" path="/admin/products/{product}/mappings/{id}" example="MappingRulesetUpdateExamplesEnableDisabledRule" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.groups.mappings.update({
    product: "edge",
    id: "<id>",
    mappingRuleset: {
      id: "default",
      conf: {
        functions: [
          {
            id: "eval",
            filter: "!cribl.group",
            disabled: false,
            final: true,
            description: "Default Mappings",
            conf: {
              add: [
                {
                  name: "groupId",
                  value: "'default_fleet'",
                },
              ],
            },
          },
        ],
      },
      active: true,
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
import { groupsMappingsUpdate } from "cribl-control-plane/funcs/groupsMappingsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await groupsMappingsUpdate(criblControlPlane, {
    product: "edge",
    id: "<id>",
    mappingRuleset: {
      id: "default",
      conf: {
        functions: [
          {
            id: "eval",
            filter: "!cribl.group",
            disabled: false,
            final: true,
            description: "Default Mappings",
            conf: {
              add: [
                {
                  name: "groupId",
                  value: "'default_fleet'",
                },
              ],
            },
          },
        ],
      },
      active: true,
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("groupsMappingsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: MappingRulesetUpdateExamplesUpdateComplexRule

<!-- UsageSnippet language="typescript" operationID="updateAdminProductsMappingsByProductAndId" method="patch" path="/admin/products/{product}/mappings/{id}" example="MappingRulesetUpdateExamplesUpdateComplexRule" -->
```typescript
import { CriblControlPlane } from "cribl-control-plane";

const criblControlPlane = new CriblControlPlane({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await criblControlPlane.groups.mappings.update({
    product: "stream",
    id: "<id>",
    mappingRuleset: {
      id: "complex-mapping",
      conf: {
        functions: [
          {
            id: "eval",
            filter: "(conn_ip.startsWith(\"10.10.42.\") && cpus > 6) || env.CRIBL_HOME.match(\"DMZ\")",
            disabled: false,
            final: true,
            description: "Map high-performance nodes in specific network or DMZ",
            conf: {
              add: [
                {
                  name: "groupId",
                  value: "'high_perf_fleet'",
                },
              ],
            },
          },
          {
            id: "eval",
            filter: "!cribl.group",
            disabled: false,
            final: true,
            description: "Default mapping",
            conf: {
              add: [
                {
                  name: "groupId",
                  value: "'default_fleet'",
                },
              ],
            },
          },
        ],
      },
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
import { groupsMappingsUpdate } from "cribl-control-plane/funcs/groupsMappingsUpdate.js";

// Use `CriblControlPlaneCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const criblControlPlane = new CriblControlPlaneCore({
  serverURL: "https://api.example.com",
  security: {
    bearerAuth: process.env["CRIBLCONTROLPLANE_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await groupsMappingsUpdate(criblControlPlane, {
    product: "stream",
    id: "<id>",
    mappingRuleset: {
      id: "complex-mapping",
      conf: {
        functions: [
          {
            id: "eval",
            filter: "(conn_ip.startsWith(\"10.10.42.\") && cpus > 6) || env.CRIBL_HOME.match(\"DMZ\")",
            disabled: false,
            final: true,
            description: "Map high-performance nodes in specific network or DMZ",
            conf: {
              add: [
                {
                  name: "groupId",
                  value: "'high_perf_fleet'",
                },
              ],
            },
          },
          {
            id: "eval",
            filter: "!cribl.group",
            disabled: false,
            final: true,
            description: "Default mapping",
            conf: {
              add: [
                {
                  name: "groupId",
                  value: "'default_fleet'",
                },
              ],
            },
          },
        ],
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("groupsMappingsUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateAdminProductsMappingsByProductAndIdRequest](../../models/operations/updateadminproductsmappingsbyproductandidrequest.md)                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CountedMappingRuleset](../../models/countedmappingruleset.md)\>**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.ErrorT                        | 500                                  | application/json                     |
| errors.CriblControlPlaneDefaultError | 4XX, 5XX                             | \*/\*                                |