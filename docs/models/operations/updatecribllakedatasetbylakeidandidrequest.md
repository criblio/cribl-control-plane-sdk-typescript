# UpdateCriblLakeDatasetByLakeIdAndIdRequest

## Example Usage

```typescript
import { UpdateCriblLakeDatasetByLakeIdAndIdRequest } from "cribl-control-plane/models/operations";

let value: UpdateCriblLakeDatasetByLakeIdAndIdRequest = {
  lakeId: "<id>",
  id: "<id>",
  criblLakeDatasetUpdate: {
    searchConfig: {
      metadata: {
        earliest: "-30d",
        enableAcceleration: true,
        fieldList: [
          "<value 1>",
        ],
        scanMode: "detailed",
      },
    },
  },
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `lakeId`                                                                  | *string*                                                                  | :heavy_check_mark:                                                        | The <code>id</code> of the Lake that contains the Lake Dataset to update. |
| `id`                                                                      | *string*                                                                  | :heavy_check_mark:                                                        | The <code>id</code> of the Lake Dataset to update.                        |
| `criblLakeDatasetUpdate`                                                  | [models.CriblLakeDatasetUpdate](../../models/cribllakedatasetupdate.md)   | :heavy_check_mark:                                                        | CriblLakeDatasetUpdate object.                                            |