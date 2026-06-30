# Bon Suadiye

İki lokasyonlu restoran/kafe web sitesi — **İstanbul Suadiye** ve **Çanakkale Gastroport**.

Saf statik HTML + [Tailwind CSS](https://tailwindcss.com) (CDN) ile geliştirildi; kurulum gerektirmez.

## Sayfalar
| Dosya | Açıklama |
|-------|----------|
| `index.html` | Ana sayfa — marka tanıtımı ve lokasyon seçimi |
| `lokasyonlar.html` | İki mekanın seçim ekranı |
| `menu-suadiye.html` | İstanbul Suadiye menüsü (gerçek ürünler + fiyatlar) |
| `menu-gastroport.html` | Çanakkale Gastroport menüsü (gerçek ürünler + fiyatlar) |
| `hakkimizda.html` | Hakkımızda |
| `iletisim.html` | İletişim + harita + form |
| `rezervasyon.html` | Rezervasyon formu |

## Yapı
- `assets/config.js` — paylaşılan Tailwind teması
- `assets/styles.css` — özel stiller
- `assets/main.js` — mobil menü, scroll-spy, form etkileşimleri
- `assets/menu_*.json` — menü verileri

## Yerel çalıştırma
`index.html` dosyasını doğrudan tarayıcıda açmanız yeterli.
