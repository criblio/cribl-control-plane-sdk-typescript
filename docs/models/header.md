# Header

## Example Usage

```typescript
import { Header } from "cribl-control-plane/models";

let value: Header = {
  value: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `name`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Name of the CEF header field. Header names are predefined by the CEF standard. |
| `value`                                                                        | *string*                                                                       | :heavy_check_mark:                                                             | JavaScript expression to compute the value (can be constant)                   |