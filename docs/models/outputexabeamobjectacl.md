# OutputExabeamObjectACL

Object ACL to assign to uploaded objects

## Example Usage

```typescript
import { OutputExabeamObjectACL } from "cribl-control-plane/models";

let value: OutputExabeamObjectACL = "bucket-owner-full-control";
```

## Values

```typescript
"private" | "bucket-owner-read" | "bucket-owner-full-control" | "project-private" | "authenticated-read" | "public-read"
```