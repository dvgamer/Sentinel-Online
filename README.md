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
  MongoDB เนื้อหาของ database ทั้งหมดถูกเก็บไว้ที่ `/var/lib/mongodb` ส่วน logs ถูกเก็บไว้ที่ `/var/log/mongodb` และคุณสามารถแก้ไขค่าพื้นฐานได้จากไฟลล์ `/etc/mongod.conf` ส่วน `systemLog.path` และ storage.dbPath

    apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
    echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-3.0.list
    apt-get update

    apt-get install mongodb-org

    echo "mongodb-org hold" | sudo dpkg --set-selections
    echo "mongodb-org-server hold" | sudo dpkg --set-selections
    echo "mongodb-org-shell hold" | sudo dpkg --set-selections
    echo "mongodb-org-mongos hold" | sudo dpkg --set-selections
    echo "mongodb-org-tools hold" | sudo dpkg --set-selections

    service mongod start
    service mongod stop


### FTP server ###
**Step 1** » ติดตั้ง package

    apt-get install vsftpd

**Step 2** » เปิดไฟล์ `/etc/vsftpd.conf` เพื่อแก้ไขบรรทัดต่อไปนี้
```
#!javascript
// Uncomment the below lines (line no:29 and 33).
write_enable=YES
local_umask=022

// Uncomment the below line (line no: 120 )
chroot_local_user=YES

// add the following line at the end.
allow_writeable_chroot=YES
pasv_enable=Yes
pasv_min_port=40000
pasv_max_port=40100
```
    sudo service vsftpd restart

**Step 3** » เพิ่ม user สำหรับใช้ login เข้า ftp

    sudo useradd -m john -s /usr/sbin/nologin
    sudo passwd john

อ้างอิงจาก : [http://www.krizna.com/ubuntu/setup-ftp-server-on-ubuntu-14-04-vsftpd/](http://www.krizna.com/ubuntu/setup-ftp-server-on-ubuntu-14-04-vsftpd/)

```
#!javascript
var a=0;

```