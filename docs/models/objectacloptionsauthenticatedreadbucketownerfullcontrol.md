# ObjectAclOptionsAuthenticatedreadBucketownerfullcontrol

Object ACL to assign to uploaded objects

## Example Usage

```typescript
import { ObjectAclOptionsAuthenticatedreadBucketownerfullcontrol } from "cribl-control-plane/models";

let value: ObjectAclOptionsAuthenticatedreadBucketownerfullcontrol =
  "project-private";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"private" | "bucket-owner-read" | "bucket-owner-full-control" | "project-private" | "authenticated-read" | "public-read" | Unrecognized<string>
```