const data = [
  {
    img: 'https://avatars.mds.yandex.net/i?id=61970060a34f2886b50391b1761251de3e3351d8-5097034-images-thumbs&n=13',
    title: 'Johnnie Walker Black Label',
    reviews: 1253,
    prevPrice: 49.99,
    newPrice: 44.99,
    company: 'Johnnie Walker',
    exposure: 12,
    category: 'Scotch Whiskey',
  },
  {
    img: 'https://avatars.mds.yandex.net/i?id=cd8eff84f2918dbf55386bda507dc2d0-4256861-images-thumbs&n=13',
    title: 'Jim Beam',
    reviews: 843,
    prevPrice: 29.99,
    newPrice: 24.99,
    company: 'Beam Suntory',
    exposure: 4,
    category: 'Bourbon Whiskey',
  },
  {
    img: 'https://avatars.mds.yandex.net/i?id=94ebfc884dbc35a455905047fd8f2d98be67d100-4900962-images-thumbs&n=13',
    title: 'Château Margaux',
    reviews: 522,
    prevPrice: 250.0,
    newPrice: 230.0,
    company: 'Château Margaux',
    exposure: 10,
    category: 'Red Wine',
  },
  {
    img: 'https://www.cgarsltd.co.uk/images/Cloudy_Bay.jpg',
    title: 'Cloudy Bay Sauvignon Blanc',
    reviews: 675,
    prevPrice: 35.0,
    newPrice: 30.0,
    company: 'Cloudy Bay',
    exposure: 2,
    category: 'White Wine',
  },
  {
    img: 'https://avatars.mds.yandex.net/i?id=660964c6764054ec38b38b7fcdde76d54e510969-5498202-images-thumbs&n=13',
    title: 'Tanqueray London Dry Gin',
    reviews: 1120,
    prevPrice: 34.99,
    newPrice: 29.99,
    company: 'Tanqueray',
    exposure: null,
    category: 'Gin',
  },
  {
    img: 'https://avatars.mds.yandex.net/i?id=0f9aed09b72a0d376f54f0ad916582a283ecdf0a-10385077-images-thumbs&n=13',
    title: 'Beluga Noble Russian Vodka',
    reviews: 987,
    prevPrice: 59.99,
    newPrice: 54.99,
    company: 'Beluga',
    exposure: null,
    category: 'Vodka',
  },
  {
    img: 'https://avatars.mds.yandex.net/i?id=449d6dbd3f03c5d50622e679e94dd7cddf2620d3-7058791-images-thumbs&n=13',
    title: 'Patrón Silver Tequila',
    reviews: 789,
    prevPrice: 49.99,
    newPrice: 44.99,
    company: 'Patrón Spirits',
    exposure: null,
    category: 'Tequila',
  },
  {
    img: 'https://avatars.mds.yandex.net/i?id=a3174212ab32832cc7c347f0aab780c8_l-5236662-images-thumbs&n=13',
    title: 'Hennessy VS',
    reviews: 1150,
    prevPrice: 40.0,
    newPrice: 35.0,
    company: 'Hennessy',
    exposure: 2,
    category: 'Cognac',
  },
  {
    img: 'https://avatars.mds.yandex.net/i?id=d2f5e9355ebf677d10aab8a01e599238c5a717da-4589529-images-thumbs&n=13',
    title: 'Bacardi Gold',
    reviews: 640,
    prevPrice: 25.0,
    newPrice: 20.0,
    company: 'Bacardi',
    exposure: 3,
    category: 'Rum',
  },
  {
    img: 'https://avatars.mds.yandex.net/i?id=4efb2cc207d948adc2a02d3669cfdcbcef26af14-8219563-images-thumbs&n=13',
    title: 'Moët & Chandon Brut Impérial',
    reviews: 900,
    prevPrice: 60.0,
    newPrice: 55.0,
    company: 'Moët & Chandon',
    exposure: null,
    category: 'Champagne',
  },
  {
    img: 'https://avatars.mds.yandex.net/i?id=6da1264c7dba00bf130b6b8962b350d6c7ec9766-10697425-images-thumbs&n=13',
    title: 'Absolut Vodka',
    reviews: 2154,
    prevPrice: 25.99,
    newPrice: 22.99,
    company: 'Absolut',
    exposure: 0,
    category: 'Vodka',
  },
  {
    img: 'https://alkostyle.ru/alc/https://avatars.mds.yandex.net/i?id=18100e876fc308c10afb9a29fd523267fde44572-9998293-images-thumbs&n=13.jpg',
    title: 'Jack Daniel’s Old No. 7',
    reviews: 3541,
    prevPrice: 39.99,
    newPrice: 34.99,
    company: 'Jack Daniel’s',
    exposure: 5,
    category: 'Tennessee Whiskey',
  },
  {
    img: 'https://avatars.mds.yandex.net/i?id=1eefe646b6a347304bc336f5145cf34270f557fc-5114744-images-thumbs&n=13',
    title: 'Jameson Irish Whiskey',
    reviews: 1782,
    prevPrice: 32.99,
    newPrice: 29.99,
    company: 'Jameson',
    exposure: 8,
    category: 'Irish Whiskey',
  },
  {
    img: 'https://avatars.mds.yandex.net/i?id=e6df8bccaff811237b3e5cc7a7fd406bf16aba39-5723597-images-thumbs&n=13',
    title: 'Chivas Regal 12',
    reviews: 1623,
    prevPrice: 44.99,
    newPrice: 39.99,
    company: 'Chivas Regal',
    exposure: 12,
    category: 'Scotch Whiskey',
  },
  {
    img: 'https://avatars.mds.yandex.net/i?id=9ac41e5fc72828838b58bd842a92759224d75920-9855122-images-thumbs&n=13',
    title: 'Bacardi Superior Rum',
    reviews: 910,
    prevPrice: 19.99,
    newPrice: 17.99,
    company: 'Bacardi',
    exposure: 2,
    category: 'Rum',
  },
  {
    img: 'https://avatars.mds.yandex.net/i?id=a06c7f75e5a67c6386288ed3a06e2bbc6d9f3296-5865989-images-thumbs&n=13',
    title: 'Grey Goose Vodka',
    reviews: 1274,
    prevPrice: 49.99,
    newPrice: 45.99,
    company: 'Grey Goose',
    exposure: 0,
    category: 'Vodka',
  },
  {
    img: 'https://avatars.mds.yandex.net/i?id=f0fef9714914a3f1fe5009e441f49d101673fa84-8177627-images-thumbs&n=13',
    title: 'Don Julio Blanco',
    reviews: 832,
    prevPrice: 59.99,
    newPrice: 54.99,
    company: 'Don Julio',
    exposure: 0,
    category: 'Tequila',
  },
  {
    img: 'https://avatars.mds.yandex.net/i?id=2797ef04bd7dcce475b866022a7264f5b9b35c85-9103996-images-thumbs&n=13',
    title: 'Glenfiddich 15 Year Old',
    reviews: 781,
    prevPrice: 74.99,
    newPrice: 69.99,
    company: 'Glenfiddich',
    exposure: 15,
    category: 'Single Malt Scotch Whiskey',
  },
];

export default data;
