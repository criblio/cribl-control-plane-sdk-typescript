# DnsLookupField

## Example Usage

```typescript
import { DnsLookupField } from "cribl-control-plane/models";

let value: DnsLookupField = {
  inFieldName: "<value>",
  outFieldName: "<value>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `inFieldName`                                                                      | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `resourceRecordType`                                                               | [models.ResourceRecordType](../models/resourcerecordtype.md)                       | :heavy_minus_sign:                                                                 | The DNS record type (RR) to return. Defaults to 'A'.                               |
| `outFieldName`                                                                     | *string*                                                                           | :heavy_minus_sign:                                                                 | Name of field to add lookup results to. Leave blank to overwrite the lookup field. |