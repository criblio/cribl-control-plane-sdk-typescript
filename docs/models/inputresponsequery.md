# InputResponseQuery

## Example Usage

```typescript
import { InputResponseQuery } from "cribl-control-plane/models";

let value: InputResponseQuery = {
  path: "/etc/namedb",
  queryExpression: "<value>",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `path`                                                  | *string*                                                | :heavy_check_mark:                                      | The Path attribute from the relevant XML Select element |
| `queryExpression`                                       | *string*                                                | :heavy_check_mark:                                      | The XPath query inside the relevant XML Select element  |