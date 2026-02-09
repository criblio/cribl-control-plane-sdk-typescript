# ItemsTypeAuthTokensExt

## Example Usage

```typescript
import { ItemsTypeAuthTokensExt } from "cribl-control-plane/models";

let value: ItemsTypeAuthTokensExt = {
  token: "<value>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `token`                                                                              | *string*                                                                             | :heavy_check_mark:                                                                   | Shared secret to be provided by any client (Authorization: <token>)                  |
| `description`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `metadata`                                                                           | [models.ItemsTypeNotificationMetadata](../models/itemstypenotificationmetadata.md)[] | :heavy_minus_sign:                                                                   | Fields to add to events referencing this token                                       |