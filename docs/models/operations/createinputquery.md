# CreateInputQuery

## Example Usage

```typescript
import { CreateInputQuery } from "cribl-control-plane/models/operations";

let value: CreateInputQuery = {
  path: "/usr/local/src",
  queryExpression: "<value>",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `path`                                                  | *string*                                                | :heavy_check_mark:                                      | The Path attribute from the relevant XML Select element |
| `queryExpression`                                       | *string*                                                | :heavy_check_mark:                                      | The XPath query inside the relevant XML Select element  |