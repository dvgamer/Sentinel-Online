# **Sentinel Online** #
ระบบพื้นฐานทั้งหมดทำงานบน Ubuntu OS เพื่อความปลอดภัยสูงสุด

* Ubuntu OS วิธีติดตั้ง https://help.ubuntu.com/lts/serverguide/kernel-crash-dump.html
* ระบบ Source Control ของ git วิธีติดตั้ง http://tedfelix.com/software/git-server.html


```
#!ubuntu

sudo su
apt-get install update
apt-get install dist-upgrade
apt-get install autoremove

apt-get install --yes build-essential
apt-get install libcurl3-dev

curl -sL https://deb.nodesource.com/setup | sudo bash -
apt-get install -y nodejs

npm install pm2 -g --unsafe-perm | npm install pm2-web -g --unsafe-perm
```



### NodeJS ###
1. `touno-k.info` เปิดเว็บ Webserver ทีเป็น jsx 
2. `php.touno-k.info` สำหรับใช้ พัฒนาภาษา PHP
3. `ftp.touno-k.info:21` สำหรับ uploadfile
4. `dev.touno-k.info/collection/repositories.git`

### MongoDB ###


### MySQL ###

```
#!javascript
var a=0;

```