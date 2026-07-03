# AwsTypeHeartbeatMetadata

## Example Usage

```typescript
import { AwsTypeHeartbeatMetadata } from "cribl-control-plane/models";

let value: AwsTypeHeartbeatMetadata = {
  enabled: false,
  instanceId: "<id>",
  region: "<value>",
  type: "<value>",
  zone: "<value>",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `enabled`                                                                                                    | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | If <code>true</code>, the AWS metadata collector is enabled on the node. Otherwise, <code>false</code>.      |
| `instanceId`                                                                                                 | *string*                                                                                                     | :heavy_check_mark:                                                                                           | AWS EC2 instance ID.                                                                                         |
| `region`                                                                                                     | *string*                                                                                                     | :heavy_check_mark:                                                                                           | AWS region name.                                                                                             |
| `tags`                                                                                                       | Record<string, *string*>                                                                                     | :heavy_minus_sign:                                                                                           | String-keyed tag map. Each property name is a tag key and the corresponding value is the tag's string value. |
| `type`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | AWS EC2 instance type.                                                                                       |
| `zone`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | AWS availability zone name.                                                                                  |