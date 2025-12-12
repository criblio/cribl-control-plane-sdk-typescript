# FunctionGeoipSchema

## Example Usage

```typescript
import { FunctionGeoipSchema } from "cribl-control-plane/models";

let value: FunctionGeoipSchema = {
  file: "<value>",
  additionalFields: [
    {
      extraInField: "<value>",
      extraOutField: "<value>",
    },
  ],
  outFieldMappings: {},
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `file`                                                                                          | *string*                                                                                        | :heavy_check_mark:                                                                              | Select an uploaded Maxmind database, or specify path to a Maxmind database with .mmdb extension |
| `inField`                                                                                       | *string*                                                                                        | :heavy_minus_sign:                                                                              | Field name in which to find an IP to look up. Can be nested.                                    |
| `outField`                                                                                      | *string*                                                                                        | :heavy_minus_sign:                                                                              | Field name in which to store the GeoIP lookup results                                           |
| `additionalFields`                                                                              | [models.AdditionalField](../models/additionalfield.md)[]                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `outFieldMappings`                                                                              | [models.OutputFieldMappings](../models/outputfieldmappings.md)                                  | :heavy_minus_sign:                                                                              | Search-specific mappings for granular control over event enrichment                             |