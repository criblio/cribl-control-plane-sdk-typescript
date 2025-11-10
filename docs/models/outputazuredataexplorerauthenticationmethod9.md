# OutputAzureDataExplorerAuthenticationMethod9

The type of OAuth 2.0 client credentials grant flow to use

## Example Usage

```typescript
import { OutputAzureDataExplorerAuthenticationMethod9 } from "cribl-control-plane/models";

let value: OutputAzureDataExplorerAuthenticationMethod9 = "clientSecret";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"clientSecret" | "clientTextSecret" | "certificate" | Unrecognized<string>
```