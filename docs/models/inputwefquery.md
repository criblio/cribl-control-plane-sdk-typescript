# InputWefQuery

## Example Usage

```typescript
import { InputWefQuery } from "cribl-control-plane/models";

let value: InputWefQuery = {
  path: "/private/tmp",
  queryExpression: "<value>",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `path`                                                  | *string*                                                | :heavy_check_mark:                                      | The Path attribute from the relevant XML Select element |
| `queryExpression`                                       | *string*                                                | :heavy_check_mark:                                      | The XPath query inside the relevant XML Select element  |