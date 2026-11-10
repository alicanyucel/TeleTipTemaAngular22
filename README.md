# Medicare — Teletıp Paneli

Angular ile geliştirilmiş, çevrimiçi sağlık hizmetleri için tasarlanmış duyarlı bir teletıp paneli arayüzü.

## Özellikler

- Doktor paneli: randevu özeti, hasta listesi, görüşme durumu ve günlük müsaitlik.
- Türkçe ve İngilizce arayüz arasında geçiş.
- Gündüz ve gece teması.
- Giriş ve kayıt ekranı taslağı.
- Mobil, tablet ve masaüstü ekranlara uyumlu tasarım.
- Angular SSR (sunucu tarafında oluşturma) yapılandırması.
- Capacitor ile Android uygulaması olarak paketleme desteği.

> **Not:** Giriş ve kayıt formları şu an arayüz demosudur; kimlik doğrulama servisine bağlı değildir. Paneldeki randevu ve hasta bilgileri örnek veridir. Gerçek hasta verileri veya klinik kullanım için bir API, kimlik doğrulama ve uygun güvenlik/mahremiyet önlemleri eklenmelidir.

## Teknolojiler

- Angular 22
- TypeScript 6
- RxJS 7
- Angular SSR ve Express 5
- Özel CSS ve HTML bileşenleri

## Gereksinimler

- Angular 22 ile uyumlu bir Node.js sürümü
- npm

## Kurulum ve çalıştırma

Bağımlılıkları yükleyin:

```bash
npm install
```

Geliştirme sunucusunu başlatın:

```bash
npm start
```

Terminalde belirtilen yerel adresi tarayıcıda açın (varsayılan olarak `http://localhost:4200`).

## Kullanılabilir komutlar

| Komut | Açıklama |
| --- | --- |
| `npm start` | Geliştirme sunucusunu başlatır. |
| `npm run build` | Üretim derlemesini oluşturur. |
| `npm run build:mobile` | Android için SSR olmadan web uygulamasını derler. |
| `npm run android:sync` | Mobil derlemeyi alır ve Android projesine aktarır. |
| `npm run android:open` | Android projesini Android Studio'da açar. |
| `npm run watch` | Geliştirme yapılandırmasıyla değişiklikleri izleyerek derler. |
| `npm test` | Proje testlerini çalıştırır. |
| `npm run serve:ssr:teletip` | Daha önce oluşturulmuş SSR çıktısını sunar. |

SSR sunucusunu çalıştırmadan önce derleme alın:

```bash
npm run build
npm run serve:ssr:teletip
```

## Docker ile çalıştırma

Docker kurulu proje dizininde imajı oluşturun ve uygulamayı başlatın:

```bash
docker build -t teletip .
docker run --rm -p 4000:4000 teletip
```

Uygulamayı `http://localhost:4000` adresinde açın. Sunucu portunu değiştirmek için `PORT` ortam değişkenini kullanabilirsiniz:

```bash
docker run --rm -e PORT=8080 -p 8080:8080 teletip
```

Docker imajı çok aşamalı derleme kullanır; son imajda yalnızca üretim bağımlılıkları ve Angular SSR çıktısı bulunur. Uygulama konteyner içinde root olmayan `node` kullanıcısıyla çalışır.

## Android APK oluşturma

Android Studio, Android SDK ve JDK kurulu olmalıdır. Android Capacitor projesi depoda hazırdır; web derlemesini alıp Android'e aktarın:

```bash
npm install
npm run android:sync
npm run android:open
```

Android klasörü olmayan yeni bir kopyada önce platformu bir kez ekleyin:

```bash
npx cap add android
npm run android:sync
```

Android Studio'da **Build > Build Bundle(s) / APK(s) > Build APK(s)** seçerek APK oluşturun. Komut satırından debug APK almak için `android/gradlew.bat -p android assembleDebug` çalıştırın; çıktı `android/app/build/outputs/apk/debug/app-debug.apk` konumuna yazılır. İmzalı yayın APK'sı için Android Studio'daki **Build > Generate Signed Bundle / APK** seçeneğini kullanın. Uygulama kimliği `capacitor.config.ts` dosyasındaki `appId` değeridir.

## Proje yapısı

```text
Dockerfile
.dockerignore
src/
├── app/
│   ├── app.ts          # Ana Angular bileşeni ve dil/tema durumu
│   ├── app.html        # Panel ve giriş/kayıt arayüzü
│   ├── app.css         # Panel, tema ve duyarlı görünüm stilleri
│   ├── app.config.ts   # Angular uygulama sağlayıcıları
│   └── app.routes.ts   # Uygulama rotaları
├── index.html          # Sayfa başlığı ve temel HTML
└── styles.css          # Genel stiller
```

## Lisans ve kullanım

Bu depoda projeye ait ayrı bir açık kaynak lisansı tanımlanmamıştır. Yeniden kullanım ve dağıtım koşulları için proje sahibinden bilgi alın.