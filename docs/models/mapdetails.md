# MapDetails

## Example Usage

```typescript
import { MapDetails } from "cribl-control-plane/models";

let value: MapDetails = {
  latitudeField: "<value>",
  longitudeField: "<value>",
  mapSourceID: "<id>",
  mapType: "<value>",
  nameField: "<value>",
  pointScale: 7858.61,
  valueField: "<value>",
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `latitudeField`               | *string*                      | :heavy_minus_sign:            | N/A                           |
| `longitudeField`              | *string*                      | :heavy_minus_sign:            | N/A                           |
| `mapSourceID`                 | *string*                      | :heavy_minus_sign:            | N/A                           |
| `mapType`                     | *string*                      | :heavy_minus_sign:            | N/A                           |
| `nameField`                   | *string*                      | :heavy_minus_sign:            | N/A                           |
| `pointScale`                  | *models.MapDetailsPointScale* | :heavy_minus_sign:            | N/A                           |
| `valueField`                  | *string*                      | :heavy_minus_sign:            | N/A                           |