# CreateInputSystemByPackQuery

## Example Usage

```typescript
import { CreateInputSystemByPackQuery } from "cribl-control-plane/models/operations";

let value: CreateInputSystemByPackQuery = {
  path: "/usr/ports",
  queryExpression: "<value>",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `path`                                                  | *string*                                                | :heavy_check_mark:                                      | The Path attribute from the relevant XML Select element |
| `queryExpression`                                       | *string*                                                | :heavy_check_mark:                                      | The XPath query inside the relevant XML Select element  |