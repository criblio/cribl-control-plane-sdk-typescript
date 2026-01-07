# CollectorHealthCheckCollectRequestHeader2

## Example Usage

```typescript
import { CollectorHealthCheckCollectRequestHeader2 } from "cribl-control-plane/models";

let value: CollectorHealthCheckCollectRequestHeader2 = {
  name: "<value>",
  value: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | Header Name                                                            |
| `value`                                                                | *string*                                                               | :heavy_check_mark:                                                     | JavaScript expression to compute the header value (can be a constant). |