# OutputGoogleCloudStorageObjectACL

Object ACL to assign to uploaded objects

## Example Usage

```typescript
import { OutputGoogleCloudStorageObjectACL } from "cribl-control-plane/models";

let value: OutputGoogleCloudStorageObjectACL = "bucket-owner-full-control";
```

## Values

```typescript
"private" | "bucket-owner-read" | "bucket-owner-full-control" | "project-private" | "authenticated-read" | "public-read"
```