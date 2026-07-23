# Author

Author of the Git commit, including email and display name.

## Example Usage

```typescript
import { Author } from "cribl-control-plane/models";

let value: Author = {
  email: "Skye_Davis@yahoo.com",
  name: "<value>",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `email`                             | *string*                            | :heavy_check_mark:                  | Email address of the commit author. |
| `name`                              | *string*                            | :heavy_check_mark:                  | Display name of the commit author.  |