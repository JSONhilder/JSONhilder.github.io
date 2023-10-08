+++
title = "Into the Void"
date = "2023-06-22"
+++
---

I came across [Void Linux](https://voidlinux.org/) a while back and set it up in a virtual machine to explore and tinker with. Recently, I decided to take the plunge and use it as my daily driver. Here's my experience with Void Linux so far:

### Getting Started

To start off, I copied my new setup install script that uses bash and the apt package manager for Pop Os. While refactoring the script to use xbps, I realized that Void Linux had more up-to-date packages in xbps, which resulted in a trimmed-down script. This made the switch feel more unified within Void, as I didn't have to fetch packages from multiple sources. Personally, I found this to be a positive aspect.

Initially, my main concern with moving to Void Linux full time was the non-open source software I needed. Although Void has its own non-free src-repo, the software I required was outdated and didn't work upon installation. To overcome this issue, I used the [Nix Package Manager](https://nixos.org/) (only the package manager, not the OS). After a straightforward setup and updating my Nix config to allow non-free software, the combination of Void Linux and Nix seemed to work well. My only complaint is the possibility of having duplicate dependencies, but at least they are contained in Nix's designated folder and don't interfere with Void's.

### What I Like About Void Linux

#### Runit

While I don't have extensive knowledge of the issues people have with systemd in my previous distribution, I find runit in Void Linux to be simple and approachable. It seems easier to write and manage services compared to systemd.

#### XBPS

The [XBPS package manager](https://github.com/void-linux/xbps) in Void has been excellent so far. It offers a wide range of up-to-date packages, and its performance is impressive, possibly due to the [Fastly-sponsored mirror](https://voidlinux.org/news/2023/01/fastly-fast-forward.html). XBPS is also neatly split into separate commands (e.g., xbps-query, xbps-install, xbps-remove) instead of using a single command with flags for different operations.

#### Minimalism

Void Linux is relatively low on "fluff" or "bloat." The default XFCE ISO doesn't include many packages, and you can further reduce the system's footprint by using the base ISO. This minimal approach provides a clean foundation to build upon according to your preferences.

#### Stability

While I haven't experienced any stability issues with my previous OS, Pop Os, some of the software managed by its package manager was outdated and lacked desired features. This forced me to build software from source, which was a cumbersome process. In contrast, Void Linux with its close-to-"bleeding edge" software has been equally stable so far. Updates have been smooth, and removing orphan packages hasn't caused any problems. This balance feels like the best of both worlds.

### What I Dislike About Void Linux

To be honest, I haven't encountered any major issues yet. The transition and overall experience have been seamless. Perhaps my use cases are relatively basic, but all my development tools and general applications have worked without any problems. The only issue I face is not specific to Void Linux but rather a general distribution problem. Over time, my system tends to accumulate unused packages and configuration files from testing, fixing, or diagnosing issues. This can make things messy. As a solution, I've been exploring immutable distros like NixOS/VanillaOS, but that's a topic on its own. For now, Void Linux feels like a comfortable place to call home.
