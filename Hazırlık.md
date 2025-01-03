## Sıfırdan React JS Projesi Oluşturma 

### Adım 1 Kurulum ve İndirmeler
```
sudo apt update -y && sudo apt upgrade -y
sudo apt install npm
sudo apt install python3 python3-pip
sudo pip3 install virtualenv

cd /project/pwd
virtualenv venv
source venv/bin/activate
```

### Adım 2 Proje Çerçevesi Oluşturma
```
npx create-react-app my-react-app
cd my-react-app/
npm start
```

### Adım 3 Kütüphaneleri İndirme ve Düzeltmeler
```
npm install react react-dom
npm audit fix
npm audit fix --force
npm audit

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
source ~/.bashrc
nvm install 16
npm install react@latest react-dom@latest
npm install react react-dom
```

### Dosya Yapısı 
```
my-react-app/
├── public/
│   ├── index.html
├── src/
│   ├── index.jsx
│   ├── App.jsx (veya App.js)
│   └── ...
├── package.json
└── ...
```

## Açıklamalar:

- **`my-react-app/`**: Proje kök dizini.
- **`public/`**: HTML dosyasının bulunduğu dizin (React uygulaması burada render edilir).
- **`src/`**: React bileşenlerinin ve JavaScript dosyalarının bulunduğu dizin.
- **`package.json`**: Proje bağımlılıkları, komutları ve meta bilgilerin bulunduğu dosya.


## Veritabanı Entegrasyonu
```
npm init -y  # package.json dosyasını oluşturur
npm install express mongoose cors body-parser  # Express, MongoDB bağlantısı, CORS ve JSON veri işleme için gerekli paketler

```



