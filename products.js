/**
 * 상품 데이터
 *
 * 새 상품 추가: 아래 배열에 객체 추가
 *   name     : 상품명
 *   category : audio | tech | life | food
 *   price    : 가격 문자열
 *   image    : 이미지 URL (세로형 4:5 권장)
 *   desc     : 한줄 설명
 *   link     : 쿠팡 파트너스 링크
 */
const PRODUCTS = [
  {
    name: "ATH-M50x",
    category: "audio",
    price: "189,000",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=750&fit=crop",
    desc: "Studio Monitor Headphones",
    link: "<iframe src="https://coupa.ng/cl3Ker" width="120" height="240" frameborder="0" scrolling="no" referrerpolicy="unsafe-url" browsingtopics></iframe>"
  },
  {
    name: "Scarlett 2i2",
    category: "audio",
    price: "179,000",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=750&fit=crop",
    desc: "Audio Interface",
    link: "https://link.coupang.com/YOUR_LINK_HERE"
  },
  {
    name: "RODE NT1-A",
    category: "audio",
    price: "269,000",
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&h=750&fit=crop",
    desc: "Condenser Microphone",
    link: "https://link.coupang.com/YOUR_LINK_HERE"
  },
  {
    name: "KRK Rokit 5",
    category: "audio",
    price: "249,000",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&h=750&fit=crop",
    desc: "Monitor Speaker",
    link: "https://link.coupang.com/YOUR_LINK_HERE"
  },
  {
    name: "MacBook Air M3",
    category: "tech",
    price: "1,390,000",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=750&fit=crop",
    desc: "Laptop",
    link: "https://link.coupang.com/YOUR_LINK_HERE"
  },
  {
    name: "Galaxy Buds3 Pro",
    category: "tech",
    price: "249,000",
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&h=750&fit=crop",
    desc: "Wireless Earbuds",
    link: "https://link.coupang.com/YOUR_LINK_HERE"
  },
  {
    name: "MPK Mini MK3",
    category: "audio",
    price: "89,000",
    image: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=600&h=750&fit=crop",
    desc: "MIDI Controller",
    link: "https://link.coupang.com/YOUR_LINK_HERE"
  },
  {
    name: "Aroma Diffuser",
    category: "life",
    price: "39,900",
    image: "https://images.unsplash.com/photo-1602928321679-560bb453f190?w=600&h=750&fit=crop",
    desc: "Essential Oil Diffuser",
    link: "https://link.coupang.com/YOUR_LINK_HERE"
  },
  {
    name: "Daily Nuts 30pk",
    category: "food",
    price: "15,900",
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=600&h=750&fit=crop",
    desc: "Premium Mixed Nuts",
    link: "https://link.coupang.com/YOUR_LINK_HERE"
  }
];
