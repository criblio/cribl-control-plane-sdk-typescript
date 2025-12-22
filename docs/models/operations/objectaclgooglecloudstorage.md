# ObjectACLGoogleCloudStorage

Object ACL to assign to uploaded objects

## Example Usage

```typescript
import { ObjectACLGoogleCloudStorage } from "cribl-control-plane/models/operations";

let value: ObjectACLGoogleCloudStorage = "bucket-owner-read";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"private" | "bucket-owner-read" | "bucket-owner-full-control" | "project-private" | "authenticated-read" | "public-read" | Unrecognized<string>
```