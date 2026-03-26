# RedisDeploymentTypeStandaloneCommand

## Example Usage

```typescript
import { RedisDeploymentTypeStandaloneCommand } from "cribl-control-plane/models";

let value: RedisDeploymentTypeStandaloneCommand = {
  command: "<value>",
  keyExpr: "<value>",
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `outField`                                                                                                        | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | Name of the field in which to store the returned value. Leave blank to discard returned value.                    |
| `command`                                                                                                         | *string*                                                                                                          | :heavy_check_mark:                                                                                                | Redis command to perform. For a complete list visit: https://redis.io/commands                                    |
| `keyExpr`                                                                                                         | *string*                                                                                                          | :heavy_check_mark:                                                                                                | A JavaScript expression to compute the value of the key to operate on. Can also be a constant such as 'username'. |
| `argsExpr`                                                                                                        | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | A JavaScript expression to compute arguments to the operation. Can return an array.                               |