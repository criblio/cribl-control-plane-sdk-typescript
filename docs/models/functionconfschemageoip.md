# FunctionConfSchemaGeoip

## Example Usage

```typescript
import { FunctionConfSchemaGeoip } from "cribl-control-plane/models";

let value: FunctionConfSchemaGeoip = {
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

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `file`                                                                                                       | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Select an uploaded Maxmind database, or specify path to a Maxmind database with .mmdb extension              |
| `inField`                                                                                                    | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Field name in which to find an IP to look up. Can be nested.                                                 |
| `outField`                                                                                                   | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Field name in which to store the GeoIP lookup results                                                        |
| `additionalFields`                                                                                           | [models.FunctionConfSchemaGeoipAdditionalField](../models/functionconfschemageoipadditionalfield.md)[]       | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `outFieldMappings`                                                                                           | [models.FunctionConfSchemaGeoipOutputFieldMappings](../models/functionconfschemageoipoutputfieldmappings.md) | :heavy_minus_sign:                                                                                           | Search-specific mappings for granular control over event enrichment                                          |