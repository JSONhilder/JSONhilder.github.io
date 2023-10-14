+++
title = "Personal Command Reference/Cheat Sheet"
date = "2023-10-07"
updated = "2023-10-14"
+++
---

Some common commands that I often forget and have to google for flags etc.

## Linux

* Unzip a tar archive to current location
```
tar -xf filename.tar.gz
```

* Unzip a tar archive to specific location
```
tar -xf file.name.tar -C /path/to/directory
```

* Zip with gzip a folder/file as a tar archive
```
tar -czf newfile.tar.gz file_to_be_zipped
```

* Create symbolic link to a file/folder
```
ln -s path/to/file_folder /path/to/link/location
```

* Download file from url to specific location
```
wget -P /path/to/directory URL
```

* Find and delete all zone.identifier files (wsl specific quirk/pain)
```
find . -name "*:Zone.Identifier" -type f -delete
```

* Get host information
```
hostnamectl
```

* List process listening on port number
```
lsof -i:port_number
```

* Kill process on port number
```
kill $(lsof -t -i:port_number)
```

* Violently kill (-9 SIGKILL - terminate immediately/hard kill)
```
kill -9 $(lsof -t -i:8080)
```

* Lookup details on a domain
```
nslookup -debug URL
```

## Nodenv, Node, Npm

* List all node versions installed
```
nodenv versions
```

* Set global/systems node version 
```
nodenv global <version_number> 
```

* Set global/systems node version 
```
nodenv global <version_number> 
```

* Set current projects node version 
```
nodenv local 0.10.0
```

* List all packages installed globally
```
npm list -g --depth 0
```
