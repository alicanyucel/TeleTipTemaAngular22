# Medicare — Teletıp Paneli

Angular ile geliştirilmiş, çevrimiçi sağlık hizmetleri için tasarlanmış duyarlı bir teletıp paneli arayüzü.

## Özellikler

- Doktor paneli: randevu özeti, hasta listesi, görüşme durumu ve günlük müsaitlik.
- Türkçe ve İngilizce arayüz arasında geçiş.
- Gündüz ve gece teması.
- Giriş ve kayıt ekranı taslağı.
- Mobil, tablet ve masaüstü ekranlara uyumlu tasarım.
- Angular SSR (sunucu tarafında oluşturma) yapılandırması.

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
| `npm run watch` | Geliştirme yapılandırmasıyla değişiklikleri izleyerek derler. |
| `npm test` | Proje testlerini çalıştırır. |
| `npm run serve:ssr:teletip` | Daha önce oluşturulmuş SSR çıktısını sunar. |

SSR sunucusunu çalıştırmadan önce derleme alın:

```bash
npm run build
npm run serve:ssr:teletip
```

## Proje yapısı

```text
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