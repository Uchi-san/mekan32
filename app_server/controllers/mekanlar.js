
const anaSayfa=function(req, res, next) {
  res.render('mekanlar-liste',
             { 'baslik': 'Anasayfa',
               'sayfaBaslik':{
                   'siteAd': 'Mekan32',
                   'aciklama': 'Isparta civarindaki mekanlari kesfedin'
               },
                    'footer': 'Tunc Kaan Dalkilic',
                    'mekanlar': [
                        {
                            'ad':'Le Blanc',
                            'adres':'Isparta Kafeler',
                            'puan':5,
                            'imkanlar':['Kahve','Çay','Kek'],
                            'mesafe':'10km'
                        },
                        {
                            'ad':'Nin10doh',
                            'adres':'İyaşpark',
                            'puan':2,
                            'imkanlar':['Oyun','Animasyon'],
                            'mesafe':'1km'
                        },

                        {
                            'ad':'Tokyo Marui',
                            'adres':'Isparta Kafeler',
                            'puan':4,
                            'imkanlar':['Airsoft','Paintball'],
                            'mesafe':'8km'
                        },
                        {
                            'ad':'Star Kebab',
                            'adres':'İyaşpark',
                            'puan':4,
                            'imkanlar':['Kebap','Kumpir','Şırdan','Kokoreç'],
                            'mesafe':'8km'
                        },
                        {
                            'ad':'Dengeki-bunkou',
                            'adres':'Centrum Garden',
                            'puan':4,
                            'imkanlar':['Dergi','LightNovel','Oyun'],
                            'mesafe':'8km'
                        },

                    ]

            });
}

const mekanBilgisi=function(req, res, next) {
  res.render('mekan-detay', {
      'baslik': 'Mekan Bilgisi',
      'sayfaBaslik': 'Le Blanc',
      'footer': 'Tunc Kaan Dalkilic',
      'mekanBilgisi':{
          'ad':'Le Blanc',
          'adres':'Centrum Garden',
          'puan':3,
          'imkanlar':['Kahve', 'Çay', 'Kek'],
          'koordinatlar':{
              'enlem':170.24564,
              'boylam':256.566034
           },
           'saatler':[
               {
                    'gunler':'Pazartesi-Cuma',
                    'acilis':'7:00',
                    'kapanis':'23:00',
                    'kapali':false
               },
               {
                    'gunler':'Cumartesi',
                    'acilis':'9:00',
                    'kapanis':'00:30',
                    'kapali':false
               },
               {
                    'gunler':'Pazar',
                    'kapali':true
               }
           ],
           'yorumlar':[
               {
                   'yorumYapan': 'Asım Sinan Yüksel',
                   'puan':3,
                   'tarih': '18 Ekim 2017',
                   'yorumMetni': 'Kahveleri çok güzel, öneririm'
            }
        ]


    }
});
}

const yorumEkle=function(req, res, next) {
  res.render('yorum-ekle', { title: 'Yorum Ekle' });
}

module.exports={
anaSayfa,
mekanBilgisi,
yorumEkle
}
