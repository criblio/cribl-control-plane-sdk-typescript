# GetOutputSystemSamplesByPackAndIdRequest

## Example Usage

```typescript
import { GetOutputSystemSamplesByPackAndIdRequest } from "cribl-control-plane/models/operations";

let value: GetOutputSystemSamplesByPackAndIdRequest = {
  id: "<id>",
  pack: "<value>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `id`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | The <code>id</code> of the Destination to get sample event data for. |
| `pack`                                                               | *string*                                                             | :heavy_check_mark:                                                   | The <code>id</code> of the Pack to get.                              |