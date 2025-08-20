# GetCriblLakeDatasetByLakeIdAndIdRequest

## Example Usage

```typescript
import { GetCriblLakeDatasetByLakeIdAndIdRequest } from "cribl-control-plane/models/operations";

let value: GetCriblLakeDatasetByLakeIdAndIdRequest = {
  lakeId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `lakeId`                                                               | *string*                                                               | :heavy_check_mark:                                                     | The <code>id</code> of the Lake that contains the Lake Dataset to get. |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | The <code>id</code> of the Lake Dataset to get.                        |