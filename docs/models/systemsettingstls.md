# SystemSettingsTls

## Example Usage

```typescript
import { SystemSettingsTls } from "cribl-control-plane/models";

let value: SystemSettingsTls = {
  defaultCipherList: "<value>",
  defaultEcdhCurve: "<value>",
  maxVersion: "<value>",
  minVersion: "<value>",
  rejectUnauthorized: false,
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `defaultCipherList`  | *string*             | :heavy_check_mark:   | N/A                  |
| `defaultEcdhCurve`   | *string*             | :heavy_check_mark:   | N/A                  |
| `maxVersion`         | *string*             | :heavy_check_mark:   | N/A                  |
| `minVersion`         | *string*             | :heavy_check_mark:   | N/A                  |
| `rejectUnauthorized` | *boolean*            | :heavy_check_mark:   | N/A                  |