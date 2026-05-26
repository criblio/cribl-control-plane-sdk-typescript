# DatasetMetadata

## Example Usage

```typescript
import { DatasetMetadata } from "cribl-control-plane/models";

let value: DatasetMetadata = {
  earliest: "-30d",
  enableAcceleration: false,
  fieldList: [
    "<value 1>",
    "<value 2>",
  ],
  scanMode: "detailed",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            | Example                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `earliest`                                                                                                                             | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | Rolling time window that defines how far back acceleration scans.                                                                      | -30d                                                                                                                                   |
| `enableAcceleration`                                                                                                                   | *boolean*                                                                                                                              | :heavy_check_mark:                                                                                                                     | If <code>true</code>, the system automatically backfills and refreshes Dataset metadata.                                               |                                                                                                                                        |
| `fieldList`                                                                                                                            | *string*[]                                                                                                                             | :heavy_check_mark:                                                                                                                     | Fields for which acceleration gathers statistics. Required when scan mode is <code>detailed</code>.                                    |                                                                                                                                        |
| `latestRunInfo`                                                                                                                        | [models.DatasetMetadataRunInfo](../models/datasetmetadataruninfo.md)                                                                   | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |                                                                                                                                        |
| `scanMode`                                                                                                                             | [models.ScanMode](../models/scanmode.md)                                                                                               | :heavy_check_mark:                                                                                                                     | Acceleration scan mode. <code>quick</code> collects object-level metadata; <code>detailed</code> also collects field-level statistics. |                                                                                                                                        |