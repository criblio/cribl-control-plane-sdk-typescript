# UrlWebhook

## Example Usage

```typescript
import { UrlWebhook } from "cribl-control-plane/models/operations";

let value: UrlWebhook = {
  url: "https://hospitable-wafer.name",
  weight: 8541.66,
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `url`                                                                             | *string*                                                                          | :heavy_check_mark:                                                                | URL of a webhook endpoint to send events to, such as http://localhost:10200       |
| `weight`                                                                          | *number*                                                                          | :heavy_minus_sign:                                                                | Assign a weight (>0) to each endpoint to indicate its traffic-handling capability |