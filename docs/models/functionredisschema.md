# FunctionRedisSchema

## Example Usage

```typescript
import { FunctionRedisSchema } from "cribl-control-plane/models";

let value: FunctionRedisSchema = {
  commands: [
    {
      outField: "<value>",
      command: "<value>",
      keyExpr: "<value>",
      argsExpr: "<value>",
    },
  ],
  enableClientSideCaching: false,
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `commands`                                                                                                                            | [models.Command](../models/command.md)[]                                                                                              | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |
| `deploymentType`                                                                                                                      | [models.DeploymentType](../models/deploymenttype.md)                                                                                  | :heavy_minus_sign:                                                                                                                    | How the Redis server is configured. Defaults to Standalone                                                                            |
| `authType`                                                                                                                            | [models.FunctionRedisAuthenticationMethod](../models/functionredisauthenticationmethod.md)                                            | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   |
| `maxBlockSecs`                                                                                                                        | *number*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | Maximum amount of time (seconds) to wait before assuming that Redis is down and passing events through. Use 0 to disable.             |
| `enableClientSideCaching`                                                                                                             | *boolean*                                                                                                                             | :heavy_minus_sign:                                                                                                                    | Enable client-side cache. Redundant when using Redis write operations. See more options at Settings > General > Limits > Redis Cache. |