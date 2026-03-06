# RestartRequest

## Example Usage

```typescript
import { RestartRequest } from "cribl-control-plane/models";

let value: RestartRequest = {
  guids: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `guids`                                       | *string*[]                                    | :heavy_check_mark:                            | GUIDs of the Worker or Edge Nodes to restart. |