# Tags1

Categorization tags for the Pack.

## Example Usage

```typescript
import { Tags1 } from "cribl-control-plane/models";

let value: Tags1 = {
  domain: [
    "security",
    "observability",
  ],
  technology: [
    "aws",
    "splunk",
  ],
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    | Example                                        |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `dataType`                                     | *string*[]                                     | :heavy_minus_sign:                             | List of data type tags for the Pack.           |                                                |
| `domain`                                       | *string*[]                                     | :heavy_minus_sign:                             | List of domain tags for the Pack.              | [<br/>"security",<br/>"observability"<br/>]    |
| `technology`                                   | *string*[]                                     | :heavy_minus_sign:                             | List of technology tags for the Pack.          | [<br/>"aws",<br/>"splunk"<br/>]                |
| `streamtags`                                   | *string*[]                                     | :heavy_minus_sign:                             | List of stream tags for routing and filtering. |                                                |