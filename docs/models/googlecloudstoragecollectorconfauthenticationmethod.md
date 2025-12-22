# GoogleCloudStorageCollectorConfAuthenticationMethod

Enter account credentials manually, select a secret that references your credentials, or use Google Application Default Credentials

## Example Usage

```typescript
import { GoogleCloudStorageCollectorConfAuthenticationMethod } from "cribl-control-plane/models";

let value: GoogleCloudStorageCollectorConfAuthenticationMethod = "auto";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"auto" | "manual" | "secret" | Unrecognized<string>
```