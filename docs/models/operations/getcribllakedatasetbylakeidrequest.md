# GetCriblLakeDatasetByLakeIdRequest

## Example Usage

```typescript
import { GetCriblLakeDatasetByLakeIdRequest } from "cribl-control-plane/models/operations";

let value: GetCriblLakeDatasetByLakeIdRequest = {
  lakeId: "<id>",
  storageLocationId: "<id>",
  format: "<value>",
  excludeDDSS: false,
  excludeDeleted: true,
  excludeInternal: true,
  excludeBYOS: false,
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `lakeId`                                                                                        | *string*                                                                                        | :heavy_check_mark:                                                                              | The <code>id</code> of the Lake that contains the Lake Datasets to list.                        |
| `storageLocationId`                                                                             | *string*                                                                                        | :heavy_minus_sign:                                                                              | Filter datasets by storage location ID. Use <code>default</code> for default storage location.  |
| `format`                                                                                        | *string*                                                                                        | :heavy_minus_sign:                                                                              | Filter datasets by format. Set to <code>ddss</code> to return only DDSS datasets.               |
| `excludeDDSS`                                                                                   | *boolean*                                                                                       | :heavy_minus_sign:                                                                              | Exclude DDSS format datasets from the response.                                                 |
| `excludeDeleted`                                                                                | *boolean*                                                                                       | :heavy_minus_sign:                                                                              | Exclude deleted datasets from the response.                                                     |
| `excludeInternal`                                                                               | *boolean*                                                                                       | :heavy_minus_sign:                                                                              | Exclude internal datasets (those with IDs starting with <code>cribl_</code>) from the response. |
| `excludeBYOS`                                                                                   | *boolean*                                                                                       | :heavy_minus_sign:                                                                              | Exclude BYOS (Bring Your Own Storage) datasets from the response.                               |