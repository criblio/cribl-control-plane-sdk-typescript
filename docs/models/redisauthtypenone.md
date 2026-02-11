# RedisAuthTypeNone

## Example Usage

```typescript
import { RedisAuthTypeNone } from "cribl-control-plane/models";

let value: RedisAuthTypeNone = {
  authType: "none",
  commands: [],
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `authType`                                                                                                                            | *"none"*                                                                                                                              | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |
| `commands`                                                                                                                            | [models.RedisAuthTypeNoneCommand](../models/redisauthtypenonecommand.md)[]                                                            | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |
| `deploymentType`                                                                                                                      | [models.RedisAuthTypeNoneDeploymentType](../models/redisauthtypenonedeploymenttype.md)                                                | :heavy_minus_sign:                                                                                                                    | How the Redis server is configured. Defaults to Standalone                                                                            |
| `maxBlockSecs`                                                                                                                        | *number*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | Maximum amount of time (seconds) to wait before assuming that Redis is down and passing events through. Use 0 to disable.             |
| `enableClientSideCaching`                                                                                                             | *boolean*                                                                                                                             | :heavy_minus_sign:                                                                                                                    | Enable client-side cache. Redundant when using Redis write operations. See more options at Settings > General > Limits > Redis Cache. |