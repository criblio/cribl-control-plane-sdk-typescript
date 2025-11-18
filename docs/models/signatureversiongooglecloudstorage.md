# SignatureVersionGoogleCloudStorage

Signature version to use for signing Google Cloud Storage requests

## Example Usage

```typescript
import { SignatureVersionGoogleCloudStorage } from "cribl-control-plane/models";

let value: SignatureVersionGoogleCloudStorage = "v2";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"v2" | "v4" | Unrecognized<string>
```