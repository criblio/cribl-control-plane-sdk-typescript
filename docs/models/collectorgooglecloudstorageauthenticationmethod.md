# CollectorGoogleCloudStorageAuthenticationMethod

Enter account credentials manually, select a secret that references your credentials, or use Google Application Default Credentials

## Example Usage

```typescript
import { CollectorGoogleCloudStorageAuthenticationMethod } from "cribl-control-plane/models";

let value: CollectorGoogleCloudStorageAuthenticationMethod = "auto";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"auto" | "manual" | "secret" | Unrecognized<string>
```