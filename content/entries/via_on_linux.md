+++
title = "VIA v3 on Linux"
date = "2023-06-03"
draft = false
+++
---
As a note to myself to remind me when I forget.

I needed to use my split keyboard, a 40% corne layout for anyone interested, but it's configured using VIA.

I used it previously on my Ubuntu install and made use of the deb image, but currently I am on Void Linux and had to make use of either the appimage.

After downloading it <a href="https://github.com/the-via/releases/releases" target="_blank">here</a> as well as giving the app image permission to execute with ``chmod +x``, it didn't work, running the app image in the terminal gave me the following error:

```
UnhandledPromiseRejectionWarning: Error:....

/bin/bash: line 1: /etc/udev/rules.d/92-viia.rules: No such file or directory

...
```

I found <a href="https://get.vial.today/manual/linux-udev.html" target="_blank" >this article</a> on configuring udev which helped me fix the issue, by first making the directory with the file:

```
/etc/udev/rules.d/92-viia.rules
```
and then adding the following content:

```
KERNEL=="hidraw*", SUBSYSTEM=="hidraw", MODE="0666", TAG+="uaccess", TAG+="udev-acl"
```

You can read up more on tweaking that specific udev rule in the article linked, but in my case this was enough to get VIA working as I needed.
