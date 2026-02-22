# ItemsTypeUrls

## Example Usage

```typescript
import { ItemsTypeUrls } from "cribl-control-plane/models";

let value: ItemsTypeUrls = {
  url: "https://complicated-embarrassment.info/",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `url`                                                                             | *string*                                                                          | :heavy_check_mark:                                                                | URL of a Cribl Worker to send events to, such as http://localhost:10200           |
| `weight`                                                                          | *number*                                                                          | :heavy_minus_sign:                                                                | Assign a weight (>0) to each endpoint to indicate its traffic-handling capability |