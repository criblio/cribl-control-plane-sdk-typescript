# RedisAuthTypeTextSecret

## Example Usage

```typescript
import { RedisAuthTypeTextSecret } from "cribl-control-plane/models";

let value: RedisAuthTypeTextSecret = {
  authType: "textSecret",
  textSecret: "<value>",
  commands: [
    {
      command: "<value>",
      keyExpr: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `authType`                                                                                                                            | *"textSecret"*                                                                                                                        | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |
| `textSecret`                                                                                                                          | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | Secret that references Redis admin password                                                                                           |
| `commands`                                                                                                                            | [models.RedisAuthTypeTextSecretCommand](../models/redisauthtypetextsecretcommand.md)[]                                                | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |
| `deploymentType`                                                                                                                      | [models.RedisAuthTypeTextSecretDeploymentType](../models/redisauthtypetextsecretdeploymenttype.md)                                    | :heavy_minus_sign:                                                                                                                    | How the Redis server is configured. Defaults to Standalone                                                                            |
| `maxBlockSecs`                                                                                                                        | *number*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | Maximum amount of time (seconds) to wait before assuming that Redis is down and passing events through. Use 0 to disable.             |
| `enableClientSideCaching`                                                                                                             | *boolean*                                                                                                                             | :heavy_minus_sign:                                                                                                                    | Enable client-side cache. Redundant when using Redis write operations. See more options at Settings > General > Limits > Redis Cache. |