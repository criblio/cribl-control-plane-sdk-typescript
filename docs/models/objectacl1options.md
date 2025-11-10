# ObjectAcl1Options

Object ACL to assign to uploaded objects

## Example Usage

```typescript
import { ObjectAcl1Options } from "cribl-control-plane/models";

let value: ObjectAcl1Options = "bucket-owner-full-control";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"private" | "bucket-owner-read" | "bucket-owner-full-control" | "project-private" | "authenticated-read" | "public-read" | Unrecognized<string>
```