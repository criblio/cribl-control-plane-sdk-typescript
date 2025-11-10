# Collectors1

## Example Usage

```typescript
import { Collectors1 } from "cribl-control-plane/models";

let value: Collectors1 = {
  hostsfile: {},
  interfaces: {},
  disk: {},
  metadata: {},
  routes: {},
  dns: {},
  user: {},
  firewall: {},
  services: {},
  ports: {},
  loginUsers: {},
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `hostsfile`                                                              | [models.HostsFile1](../models/hostsfile1.md)                             | :heavy_minus_sign:                                                       | Creates events based on entries collected from the hosts file            |
| `interfaces`                                                             | [models.Interfaces1](../models/interfaces1.md)                           | :heavy_minus_sign:                                                       | Creates events for each of the host’s network interfaces                 |
| `disk`                                                                   | [models.DisksAndFileSystems1](../models/disksandfilesystems1.md)         | :heavy_minus_sign:                                                       | Creates events for physical disks, partitions, and file systems          |
| `metadata`                                                               | [models.HostInfo1](../models/hostinfo1.md)                               | :heavy_minus_sign:                                                       | Creates events based on the host system’s current state                  |
| `routes`                                                                 | [models.InputSystemStateRoutes1](../models/inputsystemstateroutes1.md)   | :heavy_minus_sign:                                                       | Creates events based on entries collected from the host’s network routes |
| `dns`                                                                    | [models.Dns1](../models/dns1.md)                                         | :heavy_minus_sign:                                                       | Creates events for DNS resolvers and search entries                      |
| `user`                                                                   | [models.UsersAndGroups1](../models/usersandgroups1.md)                   | :heavy_minus_sign:                                                       | Creates events for local users and groups                                |
| `firewall`                                                               | [models.Firewall1](../models/firewall1.md)                               | :heavy_minus_sign:                                                       | Creates events for Firewall rules entries                                |
| `services`                                                               | [models.Services1](../models/services1.md)                               | :heavy_minus_sign:                                                       | Creates events from the list of services                                 |
| `ports`                                                                  | [models.ListeningPorts1](../models/listeningports1.md)                   | :heavy_minus_sign:                                                       | Creates events from list of listening ports                              |
| `loginUsers`                                                             | [models.LoggedInUsers1](../models/loggedinusers1.md)                     | :heavy_minus_sign:                                                       | Creates events from list of logged-in users                              |