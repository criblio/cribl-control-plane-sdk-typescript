# CollectorHealthCheckCollectRequestHeader6

## Example Usage

```typescript
import { CollectorHealthCheckCollectRequestHeader6 } from "cribl-control-plane/models";

let value: CollectorHealthCheckCollectRequestHeader6 = {
  name: "<value>",
  value: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | Header Name                                                            |
| `value`                                                                | *string*                                                               | :heavy_check_mark:                                                     | JavaScript expression to compute the header value (can be a constant). |