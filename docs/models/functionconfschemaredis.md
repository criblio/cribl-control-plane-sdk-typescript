# FunctionConfSchemaRedis

## Example Usage

```typescript
import { FunctionConfSchemaRedis } from "cribl-control-plane/models";

let value: FunctionConfSchemaRedis = {
  commands: [
    {
      outField: "<value>",
      command: "<value>",
      keyExpr: "<value>",
      argsExpr: "<value>",
    },
  ],
  deploymentType: "cluster",
  authType: "textSecret",
  maxBlockSecs: 6819.98,
  enableClientSideCaching: false,
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `commands`                                                                                                                            | [models.Command](../models/command.md)[]                                                                                              | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   |
| `deploymentType`                                                                                                                      | [models.DeploymentType](../models/deploymenttype.md)                                                                                  | :heavy_minus_sign:                                                                                                                    | How the Redis server is configured. Defaults to Standalone                                                                            |
| `authType`                                                                                                                            | [models.FunctionConfSchemaRedisAuthenticationMethod](../models/functionconfschemaredisauthenticationmethod.md)                        | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   |
| `maxBlockSecs`                                                                                                                        | *number*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | Maximum amount of time (seconds) to wait before assuming that Redis is down and passing events through. Use 0 to disable.             |
| `enableClientSideCaching`                                                                                                             | *boolean*                                                                                                                             | :heavy_minus_sign:                                                                                                                    | Enable client-side cache. Redundant when using Redis write operations. See more options at Settings > General > Limits > Redis Cache. |