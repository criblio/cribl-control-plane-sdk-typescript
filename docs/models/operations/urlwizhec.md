# UrlWizHec

## Example Usage

```typescript
import { UrlWizHec } from "cribl-control-plane/models/operations";

let value: UrlWizHec = {
  url: "https://amazing-scenario.info",
  weight: 136.04,
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `url`                                                                                        | *string*                                                                                     | :heavy_check_mark:                                                                           | URL to an endpoint to send events to, such as http://localhost:8088/services/collector/event |
| `weight`                                                                                     | *number*                                                                                     | :heavy_minus_sign:                                                                           | Assign a weight (>0) to each endpoint to indicate its traffic-handling capability            |