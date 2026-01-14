# PipelineFunctionRedisConf

## Example Usage

```typescript
import { PipelineFunctionRedisConf } from "cribl-control-plane/models";

let value: PipelineFunctionRedisConf = {
  commands: [],
  deploymentType: "standalone",
  authType: "manual",
  maxBlockSecs: 2430.43,
  enableClientSideCaching: true,
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `commands`                                                                                                                            | [models.PipelineFunctionRedisCommand](../models/pipelinefunctionrediscommand.md)[]                                                    | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |
| `deploymentType`                                                                                                                      | [models.PipelineFunctionRedisDeploymentType](../models/pipelinefunctionredisdeploymenttype.md)                                        | :heavy_minus_sign:                                                                                                                    | How the Redis server is configured. Defaults to Standalone                                                                            |
| `authType`                                                                                                                            | [models.PipelineFunctionRedisAuthenticationMethod](../models/pipelinefunctionredisauthenticationmethod.md)                            | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   |
| `maxBlockSecs`                                                                                                                        | *number*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | Maximum amount of time (seconds) to wait before assuming that Redis is down and passing events through. Use 0 to disable.             |
| `enableClientSideCaching`                                                                                                             | *boolean*                                                                                                                             | :heavy_minus_sign:                                                                                                                    | Enable client-side cache. Redundant when using Redis write operations. See more options at Settings > General > Limits > Redis Cache. |