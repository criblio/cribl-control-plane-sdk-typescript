# OutpostNodeInfo

Node information for the Outpost through which a Worker connects to the Leader.

## Example Usage

```typescript
import { OutpostNodeInfo } from "cribl-control-plane/models";

let value: OutpostNodeInfo = {
  guid: "<id>",
  host: "ambitious-gown.biz",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `groupname`                                               | *string*                                                  | :heavy_minus_sign:                                        | Name of the Outpost Group that contains the Outpost Node. |
| `guid`                                                    | *string*                                                  | :heavy_check_mark:                                        | Unique identifier for the Outpost Node.                   |
| `host`                                                    | *string*                                                  | :heavy_check_mark:                                        | Hostname or IP address for the Outpost Node.              |