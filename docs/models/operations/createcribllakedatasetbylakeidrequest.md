# CreateCriblLakeDatasetByLakeIdRequest

## Example Usage

```typescript
import { CreateCriblLakeDatasetByLakeIdRequest } from "cribl-control-plane/models/operations";

let value: CreateCriblLakeDatasetByLakeIdRequest = {
  lakeId: "<id>",
  criblLakeDataset: {
    id: "<id>",
    searchConfig: {
      metadata: {
        earliest: "-30d",
        enableAcceleration: false,
        fieldList: [
          "<value 1>",
          "<value 2>",
          "<value 3>",
        ],
        scanMode: "quick",
      },
    },
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `lakeId`                                                       | *string*                                                       | :heavy_check_mark:                                             | The <code>id</code> of the Lake to create the Lake Dataset in. |
| `criblLakeDataset`                                             | [models.CriblLakeDataset](../../models/cribllakedataset.md)    | :heavy_check_mark:                                             | CriblLakeDataset object.                                       |