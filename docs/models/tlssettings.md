# TlsSettings

## Example Usage

```typescript
import { TlsSettings } from "cribl-control-plane/models";

let value: TlsSettings = {
  defaultCipherList: "<value>",
  defaultEcdhCurve: "<value>",
  maxVersion: "<value>",
  minVersion: "<value>",
  rejectUnauthorized: true,
};
```

## Fields

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `defaultCipherList`                                                                                                                         | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | Cipher suite list to use for TLS connections. <code>DEFAULT</code> means the system default.                                                |
| `defaultEcdhCurve`                                                                                                                          | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | ECDH curve name for TLS key exchange. Use <code>auto</code> to let Node.js choose.                                                          |
| `maxVersion`                                                                                                                                | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | Maximum TLS protocol version to accept.                                                                                                     |
| `minVersion`                                                                                                                                | *string*                                                                                                                                    | :heavy_check_mark:                                                                                                                          | Minimum TLS protocol version to accept.                                                                                                     |
| `rejectUnauthorized`                                                                                                                        | *boolean*                                                                                                                                   | :heavy_check_mark:                                                                                                                          | If <code>true</code>, reject TLS certificates that cannot be verified against a valid Certificate Authority. Otherwise, <code>false</code>. |